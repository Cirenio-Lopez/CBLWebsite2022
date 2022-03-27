import MouseParallax from "../../components/mouseParallax";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Index(props) {
  library.add(faTwitter, faGithub, faLinkedin, faInstagram);
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
            Get In Touch
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
            <Link href="mailto:cireniobrylopez@gmail.com">
              cireniobrylopez@gmail.com
            </Link>
          </motion.div>
          <motion.div
            className="contact-icon-wrap"
            initial={{ x: "-100vw" }}
            animate={{ x: "0" }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.825 }}
          >
            <div className="contact-icons">
              <Link href="https://github.com/Cirenio-Lopez">
                <a>
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/cireniolopez/">
                <a>
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>
              </Link>
              <Link href="https://twitter.com/CirenioBryLopez">
                <a>
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </a>
              </Link>
              <Link href="https://www.instagram.com/_cirenio/">
                <a>
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
              </Link>
            </div>
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
