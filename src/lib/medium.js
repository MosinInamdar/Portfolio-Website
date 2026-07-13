const MEDIUM_USERNAME = "mosininamdar";
const FALLBACK_IMAGE = "/images/articles/Article1.jpg";

function extractTag(xml, tag) {
  const cdata = xml.match(
    new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`)
  );
  if (cdata) return cdata[1].trim();

  const plain = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return plain ? plain[1].trim() : "";
}

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function extractImage(html) {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : FALLBACK_IMAGE;
}

function formatDate(pubDate) {
  const date = new Date(pubDate);
  if (Number.isNaN(date.getTime())) return pubDate;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function estimateReadingTime(text) {
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function makeSummary(text, maxLength = 220) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

function parseMediumRss(xml) {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(
    (match) => match[1]
  );

  return items.map((item) => {
    const title = stripHtml(extractTag(item, "title"));
    const link = extractTag(item, "link").split("?")[0];
    const pubDate = extractTag(item, "pubDate");
    const content =
      extractTag(item, "content:encoded") || extractTag(item, "description");
    const text = stripHtml(content);

    return {
      title,
      link,
      date: formatDate(pubDate),
      image: extractImage(content),
      summary: makeSummary(text),
      readingTime: estimateReadingTime(text),
    };
  });
}

export async function fetchMediumArticles(
  username = MEDIUM_USERNAME
) {
  const response = await fetch(`https://medium.com/feed/@${username}`, {
    headers: {
      Accept: "application/rss+xml, application/xml, text/xml",
    },
  });

  if (!response.ok) {
    throw new Error(`Medium feed request failed: ${response.status}`);
  }

  const xml = await response.text();
  return parseMediumRss(xml);
}
