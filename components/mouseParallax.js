import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function PicResting(props) {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: "0" }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.5, delay: 0.125 }}
    >
      <motion.img
        animate={props.animate}
        alt="PicResting"
        src="../svg/general/resting.svg"
      />
    </motion.div>
  );
}

function PicMoon(props) {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: "0" }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.625, delay: 0.125 }}
    >
      <motion.img
        animate={props.animate}
        alt="PicMoon"
        src="../svg/general/moon.svg"
      />
    </motion.div>
  );
}

function PicMoonlight(props) {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: "0" }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.625, delay: 0.125 }}
    >
      <motion.img
        animate={props.animate}
        alt="PicMoonlight"
        src="../svg/general/moonlight.svg"
      />
    </motion.div>
  );
}

function PicText(props) {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: "0" }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.75, delay: 0.125 }}
    >
      <motion.img
        animate={props.animate}
        alt="PicText"
        // src="../svg/text/index.svg"
        src={`${
          props.location == "/"
            ? "../svg/text/index.svg"
            : props.location == "/works"
            ? "../svg/text/works.svg"
            : props.location == "/contact"
            ? "../svg/text/contact.svg"
            : "../svg/text/index.svg"
        }`}
      />
    </motion.div>
  );
}

function PicAbout(props) {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: "0" }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.75, delay: 0.125 }}
    >
      <motion.img
        animate={props.animate}
        alt="PicAbout"
        src="../svg/general/about.svg"
        className="about-img"
      />
    </motion.div>
  );
}

function MouseParallax(props) {
  const restingAnimate = useAnimation();
  const moonAnimate = useAnimation();
  const moonLightAnimate = useAnimation();
  const textAnimate = useAnimation();
  const aboutAnimate = useAnimation();
  useEffect(() => {
    if (props.clientX == 0 && props.clientY == 0) return;
    const offsetX = props.clientX - window.innerWidth / 2;
    const offsetY = props.clientY - window.innerHeight / 2;
    restingAnimate.start({
      x: offsetX / 24,
      y: offsetY / 24,
    });
    moonAnimate.start({
      x: offsetX / 16,
      y: offsetY / 16,
    });
    moonLightAnimate.start({
      x: offsetX / 16,
      y: offsetY / 16,
    });
    textAnimate.start({
      x: offsetX / 64,
      y: offsetY / 64,
    });
    aboutAnimate.start({
      x: offsetX / 24,
      y: offsetY / 24,
    });
  }, [props]);
  if (props.location == "/about") {
    return (
      <div className="parallaxImages">
        <PicAbout animate={aboutAnimate} />
      </div>
    );
  } else {
    return (
      <div className="parallaxImages">
        <PicResting animate={restingAnimate} />
        <PicMoon animate={moonAnimate} />
        <PicMoonlight animate={moonLightAnimate} />
        <PicText animate={textAnimate} location={props.location} />
      </div>
    );
  }
}

export default MouseParallax;
