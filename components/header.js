import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Header() {
  const [show, setShow] = useState();
  library.add(faTwitter, faGithub, faLinkedin, faInstagram);
  return (
    <header className="flex items-center justify-between p-10 z-30 fixed w-full right-1">
      <div className="z-30">
        <Link aria-label="Cirenio Lopez" href="/" passHref={true}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Link href="/">
                <a>
                  <svg
                    width="50"
                    height="50"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 54.3 64"
                    style={{
                      enableBackground: "new 0 0 54.3 64",
                      fill: "#fff",
                    }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        className="st0"
                        d="M12.6,21.9c1.8-3.8,4.6-6.7,8.1-8.9c8.3-5.2,19.3-4.2,26.5,2.3c0.7,0.7,0.9,1.1,0.1,1.7
                    c-0.9,0.7-1.7,1.5-2.4,2.4c-0.6,0.7-1,0.7-1.8,0.1c-7.9-6.7-19.7-4.8-25,4.1c-4.1,6.8-2.6,15.6,3.5,20.9c5.9,5.1,14.9,5.3,21,0.3
                    c1.4-1.1,1.4-1.1,2.7,0.2c0.7,0.7,1.3,1.4,2,2c0.6,0.5,0.6,0.9,0,1.4c-4.8,4.3-10.5,6.3-16.9,5.7c-9.8-0.9-17-7-19.7-16.5
                    c-0.2-0.8-0.6-0.9-1.3-0.9c-2.8,0-5.5,0-8.3,0c-0.8,0-1.1-0.3-1.2-1.1C-1.6,18.5,9.5,3.6,26.5,0.5C36.9-1.3,46,1.6,53.9,8.7
                    c0.6,0.5,0.6,0.9,0,1.4c-0.9,0.8-1.8,1.7-2.6,2.6c-0.6,0.6-0.9,0.7-1.6,0.1c-10.6-9.7-26.6-9.2-36.5,1c-4.3,4.4-6.7,9.8-7.2,15.9
                    c-0.1,0.9,0.1,1.4,1.2,1.3C8,31,9.2,31.3,9.9,30.9c0.8-0.5,0.3-1.8,0.6-2.7c0.3-1.4,0.6-2.8,1.2-4.1c0.4-0.3,0.5-0.7,0.5-1.2l0,0
                    C12.5,22.6,12.5,22.2,12.6,21.9z"
                      />
                      <path
                        className="st0"
                        d="M16.3,53C19.5,55.3,23,57,27,57.7c7.5,1.4,14.3-0.2,20.5-4.6c0.4-0.2,0.8-0.3,1-0.7c2-1.9,2-1.9,3.9,0
                    c0.1,0.1,0.3,0.3,0.4,0.4c1.8,1.8,1.8,1.8-0.1,3.5C36.2,70.6,10,64,2.2,43.7c-0.4-1-0.2-1.2,0.8-1.1c1.4,0.1,2.8,0,4.2,0
                    c0.5,0,0.9,0,1.2,0.6c1.7,3.7,4.3,6.8,7.4,9.4C15.9,52.9,16,53.1,16.3,53z"
                      />
                    </g>
                  </svg>
                </a>
              </Link>
            </div>
            <div className="h-6 font-light hidden sm:block text-3xl ">
              Cirenio Lopez
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 text-4xl z-30">
        <div className="md:flex hidden">
          <Link href="https://github.com/Cirenio-Lopez">
            <a>
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </Link>
          <div className="pl-5 sm:pl-10"></div>
          <Link href="https://www.linkedin.com/in/cireniolopez/">
            <a>
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </Link>
          <div className="pl-5 sm:pl-10"></div>
          <Link href="https://twitter.com/CirenioBryLopez">
            <a>
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </Link>
          <div className="pl-5 sm:pl-10"></div>
          <Link href="https://www.instagram.com/cireniobrylopez/">
            <a>
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
          </Link>
        </div>
        <div
          className={`tham tham-e-spin tham-w-12 px-5 sm:px-10 ${
            show ? "tham-active" : ""
          }`}
          onClick={() => setShow(!show)}
        >
          <div className="tham-box">
            <div className="tham-inner bg-white" />
          </div>
        </div>
      </div>
      <nav
        className={`bg-gradient-to-r from-customBlue via-customViolet to-orange-700 fixed w-full h-screen top-0 left-0 flex flex-col justify-center items-center z-10 text-6xl md:text-9xl transition duration-500 ${
          show ? "" : "-translate-y-full"
        }`}
      >
        <div className="overflow-hidden">
          <Link href="/">
            <a
              className={`strikeThrough transition duration-300 delay-300 ${
                show ? "" : "translate3d-y-full"
              }`}
              onClick={() => setShow(!show)}
            >
              HOME
            </a>
          </Link>
        </div>
        <div className="pt-16 overflow-hidden">
          <Link href="/works">
            <a
              className={`strikeThrough transition duration-300 delay-300 ${
                show ? "" : "translate3d-y-full"
              }`}
              onClick={() => setShow(!show)}
            >
              WORKS
            </a>
          </Link>
        </div>
        <div className="pt-16 overflow-hidden">
          <Link href="/about">
            <a
              className={`strikeThrough transition duration-300 delay-300 ${
                show ? "" : "translate3d-y-full"
              }`}
              onClick={() => setShow(!show)}
            >
              ABOUT ME
            </a>
          </Link>
        </div>
        <div className="pt-16 overflow-hidden">
          <Link href="/contact">
            <a
              className={`strikeThrough transition duration-300 delay-300 ${
                show ? "" : "translate3d-y-full"
              }`}
              onClick={() => setShow(!show)}
            >
              CONTACT
            </a>
          </Link>
        </div>
        <div className="md:hidden pt-16 overflow-hidden">
          <div
            className={`flex transition duration-300 delay-300 ${
              show ? "" : "translate3d-y-full"
            }`}
          >
            <Link href="https://github.com/Cirenio-Lopez">
              <a>
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </Link>
            <div className="pl-10 sm:pl-10"></div>
            <Link href="https://www.linkedin.com/in/cireniolopez/">
              <a>
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
            </Link>
            <div className="pl-10 sm:pl-10"></div>
            <Link href="https://twitter.com/CirenioBryLopez">
              <a>
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </Link>
            <div className="pl-10 sm:pl-10"></div>
            <Link href="https://www.instagram.com/cireniobrylopez/">
              <a>
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
