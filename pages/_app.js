import "../styles/globals.css";
import Head from "next/head";
import Background from "../components/background";
import Header from "../components/header";
import PageNav from "../components/pageNav";
import { useState } from "react";
import { Router } from "next/router";
function MyApp({ Component, pageProps }) {
  const [currPage, setCurrPage] = useState(1);
  const [active, setActive] = useState(true);
  const [scrollDir, setScrollDir] = useState("none");
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  function getCurrentPage(currentPage) {
    setCurrPage(currentPage);
  }
  Router.events.on("routeChangeStart", () => {
    setActive(false);
  });
  Router.events.on("routeChangeComplete", () => {
    setActive(true);
  });
  function scrollPage(e) {
    if (e.nativeEvent.wheelDelta > 0) {
      setScrollDir("up");
    } else {
      setScrollDir("down");
    }
  }
  function handleScroll(none) {
    setScrollDir(none);
  }
  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientY);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientY);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 100) {
      // do your stuff here for left swipe
      setScrollDir("down");
    }

    if (touchStart - touchEnd < -100) {
      // do your stuff here for right swipe
      setScrollDir("up");
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
        className="px-0 mx-auto sm:px-6 xl:px-0 main-active overflow-hidden"
        onWheel={scrollPage}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Background></Background>
        <div className="flex flex-col justify-between h-full">
          <Header />
          <Component
            {...pageProps}
            currentPage={getCurrentPage}
            active={active}
            scrollDir={scrollDir}
            handleScroll={handleScroll}
          />
        </div>
        <PageNav active={currPage} />
      </div>
    </>
  );
}

export default MyApp;
