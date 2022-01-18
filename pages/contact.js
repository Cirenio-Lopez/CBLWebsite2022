import MainSVG from "../svg/contact.svg";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Contact(props) {
  const [active, setActive] = useState(false);
  const router = useRouter();
  library.add(faTwitter, faGithub, faLinkedin, faInstagram);
  useEffect(() => {
    props.currentPage(4);
    setActive(props.active);
    if (props.scrollDir === "up") {
      router.push("./about/");
      props.handleScroll("none");
    }
  }, [props, router]);
  return (
    <>
      <div className="z-10 h-screen w-screen overflow-hidden">
        <div className="ml-[11%] absolute bottom-44 md:bottom-[29%] z-10 overflow-x-hidden">
          <div
            className={`transition duration-400 ${
              active ? "slide-in-left" : "-translate3d-x-full"
            }`}
          >
            <span className="text-5xl md:text-9xl">Get In Touch</span>
            <div className="pt-2 md:pt-0">
              <span className="block w-[50px] h-[2px] md:w-[150px] md:h-1 rounded-[5px] bg-[#ff4d5a] my-2 md:my-[1rem]"></span>
              <span className="block w-[50px] h-[2px] md:w-[150px] md:h-1 rounded-[5px] bg-[#ff4d5a] ml-[24px] md:ml-[54px] mb-4"></span>
            </div>
            <span className="pt-2 md:text-3xl tracking-[.1em] md:leading-normal">
              <Link href="mailto:cireniobrylopez@gmail.com">
                <a>cireniobrylopez@gmail.com</a>
              </Link>
              <br />
              <div className="flex text-5xl md:text-7xl pt-14 flex-wrap justify-center">
                <Link href="https://github.com/Cirenio-Lopez">
                  <a>
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </Link>
                <div className="pl-10"></div>
                <Link href="https://www.linkedin.com/in/cireniolopez/">
                  <a>
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </a>
                </Link>
                <div className="pl-10"></div>
                <Link href="https://twitter.com/CirenioBryLopez">
                  <a>
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                  </a>
                </Link>
                <div className="pl-10"></div>
                <Link href="https://www.instagram.com/cireniobrylopez/">
                  <a>
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </a>
                </Link>
              </div>
            </span>
          </div>
        </div>
        <div className="overflow-x-hidden md:w-1/2 right-0 absolute">
          <div
            className={`transition duration-400 w-screen md:w-auto md:h-screen h-auto ${
              active ? "slide-in-right" : "translate3d-x-full"
            }`}
          >
            <MainSVG />
          </div>
        </div>
      </div>
    </>
  );
}

//This is to allow transition animation to play between render.
export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
  return { props: {} };
}

export default Contact;
