import "../styles/globals.css";
import "../styles/header.css";
import "../styles/static.css";
import Head from "next/head";
import { useRouter } from "next/router";
import Background from "../components/background";
import Header from "../components/header";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [scrollDir, setScrollDir] = useState("none");
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  function scrollPage(e) {
    if (e.nativeEvent.wheelDelta > 0) {
      setScrollDir("up");
      switch (router.pathname) {
        case "/works":
          router.push("/");
          break;
        case "/about":
          router.push("/works");
          break;
        case "/contact":
          router.push("/about");
          break;
      }
      setScrollDir("none");
    } else {
      setScrollDir("down");
      switch (router.pathname) {
        case "/":
          router.push("/works");
          break;
        case "/works":
          router.push("/about");
          break;
        case "/about":
          router.push("/contact");
          break;
      }
      setScrollDir("none");
    }
  }
  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientY);
    setTouchEnd(0);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientY);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 100 && touchEnd != 0) {
      setScrollDir("down");
      switch (router.pathname) {
        case "/":
          router.push("/works");
          break;
        case "/works":
          router.push("/about");
          break;
        case "/about":
          router.push("/contact");
          break;
      }
      setScrollDir("none");
    }

    if (touchStart - touchEnd < -100 && touchEnd != 0) {
      setScrollDir("up");
      switch (router.pathname) {
        case "/works":
          router.push("/");
          break;
        case "/about":
          router.push("/works");
          break;
        case "/contact":
          router.push("/about");
          break;
      }
      setScrollDir("none");
    }
  }

  return (
    <>
      <Head>
        <title>Cirenio Bryan Lopez</title>
        <meta
          name="description"
          content="Cirenio Bryan Lopez's personal website"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <div
        onWheel={scrollPage}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="app">
          <Background />
          <Header location={router.pathname} />

          <motion.div
            className="load-in"
            initial={{ y: 0 }}
            animate={{ y: "-100vh" }}
            transition={{ duration: 0.75 }}
          ></motion.div>

          <AnimatePresence exitBeforeEnter>
            <Component
              {...pageProps}
              key={router.route}
              location={router.pathname}
            />
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default MyApp;
