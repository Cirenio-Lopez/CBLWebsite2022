import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faReact, faCss3, faJs } from "@fortawesome/free-brands-svg-icons";
import Resting from "../../public/svg/general/resting.svg";
import Moon from "../../public/svg/general/moon.svg";
import MoonLight from "../../public/svg/general/moonlight.svg";
import Text from "../../public/svg/text/index.svg";

function Projects() {
  library.add(faReact, faCss3, faJs);
  return (
    <>
      <div className="static-cover">
        <div className="fullPage_slide">
          <div className="text-wrap">
            <div className="title">
              CIRENIO
              <br />
              LOPEZ
            </div>
            <div className="decoration">
              <span />
              <span />
            </div>
            <div className="description">Website</div>
            <div className="button-wrap">
              <Link href="https://github.com/Cirenio-Lopez">
                <a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Visit Site
                  </motion.button>
                </a>
              </Link>
            </div>
          </div>
          <div className="image-wrap">
            <div className="parallaxImages">
              <div>
                <img src={Resting.src} />
              </div>
              <div>
                <img src={Moon.src} />
              </div>
              <div>
                <img src={MoonLight.src} />
              </div>
              <div>
                <img src={Text.src} />
              </div>
            </div>
          </div>
        </div>
        <div className="scrollDown">SCROLL DOWN</div>
      </div>
      <div className="static-overview">
        <div className="static-description">
          <div className="content">
            <ul>
              <li>
                <div className="title">ROLE</div>
                <div className="description">Full Stack Developer</div>
              </li>
              <li>
                <div className="title">DATE</div>
                <div className="description">Since June 2020</div>
              </li>
              <li>
                <div className="title">OVERVIEW</div>
                <div className="description">
                  Cirenio Lopez (Portfolio Website) has been a project I have
                  worked on since 2018. It has undergone several names but
                  recently I have used my own name to host the website. My
                  objective is to present future recruiters and clients an idea
                  of what I am able to produce and support.
                </div>
              </li>
            </ul>
          </div>
          <div className="content-img">
            <Image
              src="/img/example.png"
              alt="website example"
              height="75%"
              width="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="static-development">
          <div className="static-number">01</div>
          <div className="static-content">
            <h2>CONCEPT</h2>
            <div className="static-p">
              I won&apos;t lie, I have taken huge inspiration from{" "}
              <a
                href="https://www.kuon.space/"
                className="text-[#ff4d5a] underline"
                target="_blank"
                rel="nonreferrer"
              >
                Kuon Yagi
              </a>{" "}
              and have tried to give my website its own spin. As time
              progresses, my hope is to become a better front-end developer and
              to launch something unique of my own, but I believe that this
              website alone shows precedent as to what I can accomplish.
              Utilizing themes that reflect my brand, I am able to publish what
              you are seeing today.
            </div>
          </div>
        </div>
        <div className="static-development">
          <div className="static-number">02</div>
          <div className="static-content">
            <h2>DEVELOPMENT</h2>
            <div className="static-p">
              Development of this website is primarily composed of JavaScript
              frameworks, most notably NextJS and React. In addition, to ease
              CSS, TailwindCSS was used to reduce production time and improve
              code readability and compatibility, but has been retired for the
              production build. Instead, SCSS has been used.
              <div className="icons">
                <FontAwesomeIcon icon={["fab", "react"]} />
                <FontAwesomeIcon icon={["fab", "css3"]} />
                <FontAwesomeIcon icon={["fab", "js"]} />
              </div>
            </div>
          </div>
        </div>
        <div className="static-return">
          <Link href="/works">
            <a>BACK</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Projects;
