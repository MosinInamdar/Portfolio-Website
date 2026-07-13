import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { fetchMediumArticles } from "@/lib/medium";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const FramerImage = motion(Image);

const FeaturedArticles = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light ">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl dark:bg-light"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg block"
      >
        <FramerImage
          src={img}
          alt={title}
          width={800}
          height={420}
          className="w-full h-auto rounded-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ImgRef = useRef(null);

  function handleMouse(event) {
    ImgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave() {
    ImgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={ImgRef}
        src={img}
        alt={title}
        width={384}
        height={216}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="w-full relative p-4 py-6 my-4 rounded-xl flex items-center justify-between
    bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4
    dark:border-light dark:bg-dark dark:text-light sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const articles = ({ articles: mediumArticles }) => {
  const featured = mediumArticles.slice(0, 2);
  const rest = mediumArticles.slice(2);

  return (
    <>
      <Head>
        <title>Mosin Inamdar | Articles Page</title>
        <meta
          name="description"
          content="Latest articles by Mosin Inamdar on Medium"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          {featured.length > 0 ? (
            <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
              {featured.map((article) => (
                <FeaturedArticles
                  key={article.link}
                  img={article.image}
                  title={article.title}
                  time={article.readingTime}
                  summary={article.summary}
                  link={article.link}
                />
              ))}
            </ul>
          ) : (
            <p className="text-center text-lg">
              Unable to load articles from Medium right now. Please try again
              later.
            </p>
          )}

          {rest.length > 0 && (
            <>
              <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
                All Articles
              </h2>
              <ul>
                {rest.map((article) => (
                  <Article
                    key={article.link}
                    title={article.title}
                    date={article.date}
                    img={article.image}
                    link={article.link}
                  />
                ))}
              </ul>
            </>
          )}
        </Layout>
      </main>
    </>
  );
};

export async function getStaticProps() {
  try {
    const articles = await fetchMediumArticles();
    return {
      props: { articles },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Failed to fetch Medium articles:", error);
    return {
      props: { articles: [] },
      revalidate: 600,
    };
  }
}

export default articles;
