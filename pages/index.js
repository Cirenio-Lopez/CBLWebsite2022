import MouseParallax from "../components/mouseParallax";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function Index(props) {
  const router = useRouter();
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
  const handleMouseMove = (e) => {
    setClientX(e.clientX);
    setClientY(e.clientY);
  };
  return (
    <>
      <div className="fullPage_slide" onMouseMove={(e) => handleMouseMove(e)}>
        <div className="text-wrap">
          <motion.div
            className="title"
            initial={{ x: "-100vw" }}
            animate={{ x: "0" }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.5 }}
          >
            CIRENIO
            <br />
            LOPEZ
          </motion.div>
          <motion.div
            className="decoration"
            initial={{ x: "-100vw" }}
            animate={{ x: "0" }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.625 }}
          >
            <span />
            <span />
          </motion.div>
          <motion.div
            className="description"
            initial={{ x: "-100vw" }}
            animate={{ x: "0" }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.75 }}
          >
            web developer / <br /> software engineer
          </motion.div>
        </div>
        <div className="image-wrap">
          <MouseParallax clientX={clientX} clientY={clientY} />
        </div>
      </div>
      <motion.div
        className="scrollDown"
        initial={{ y: "320px" }}
        animate={{ y: "0" }}
        exit={{ y: "320px" }}
        transition={{ duration: 0.75 }}
      >
        SCROLL DOWN
      </motion.div>
    </>
  );
}

export default Index;
