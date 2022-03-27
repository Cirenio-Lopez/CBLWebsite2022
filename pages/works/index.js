import MouseParallax from "../../components/mouseParallax";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
            Works &
            <br />
            Projects
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
            Follow developing projects on Github or view published ones here.
          </motion.div>
          <motion.div
            className="button-wrap"
            initial={{ x: "-100vw" }}
            animate={{ x: "0" }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.825 }}
          >
            <Link href="https://github.com/Cirenio-Lopez">
              <a>
                <motion.button
                  className="text-lg py-3 px-6 rounded-[36px] bg-[#ff4d5a] leading-none tracking-widest font-semibold sm:text-2xl mr-1 xl:mr-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Github
                </motion.button>
              </a>
            </Link>
            <a href="/works/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
              >
                Projects
              </motion.button>
            </a>
          </motion.div>
        </div>
        <div className="image-wrap">
          <MouseParallax
            clientX={clientX}
            clientY={clientY}
            location={props.location}
          />
        </div>
      </div>
    </>
  );
}

export default Index;
