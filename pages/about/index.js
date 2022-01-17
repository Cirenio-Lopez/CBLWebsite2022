import CirenioSVG from "../../svg/Cirenio.svg";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
function About(props) {
  const [active, setActive] = useState(false);
  const more = useRef(false);
  const router = useRouter();
  useEffect(() => {
    props.currentPage(3);
    setActive(props.active);
    more.current = props.more;
    if (typeof more.current === "undefined") {
      more.current = false;
    }
    if (props.scrollDir === "up" && more.current === false) {
      router.push("../works");
      props.handleScroll("none");
    }
    if (props.scrollDir === "down" && more.current === false) {
      router.push("../contact");
      props.handleScroll("none");
    }
  }, [props, router, more]);
  return (
    <>
      <div className={`z-10 ${more.current ? "h-screen w-screen" : ""}`}>
        <div className="ml-[11%] absolute bottom-44 md:bottom-[29%] z-10 overflow-x-hidden">
          <div
            className={` transition duration-400 ${
              active ? "slide-in-left" : "-translate3d-x-full"
            }`}
          >
            <span className="text-5xl md:text-9xl">About Me</span>
            <div className="pt-2 md:pt-0">
              <span className="block w-[50px] h-[2px] md:w-[150px] md:h-1 rounded-[5px] bg-[#ff4d5a] my-2 md:my-[1rem]"></span>
              <span className="block w-[50px] h-[2px] md:w-[150px] md:h-1 rounded-[5px] bg-[#ff4d5a] ml-[24px] md:ml-[54px] mb-4"></span>
            </div>
            <p className="pt-2 md:text-3xl tracking-[.1em] md:leading-normal transition duration-400">
              I love Technology, Music
              <br /> and Traveling.
            </p>
            <div
              className={`translate-y-0 translate-z-0 mt-12 ease-in ${
                more.current ? "hidden" : ""
              }`}
            >
              <Link href="/about/more">
                <a>
                  <button className="inline-block text-[1.4rem] bg-[#ff4d5a] leading-none font-bold py-[18px] px-[32px] rounded-[50px] ease-in duration-400 hover:-translate-y-3">
                    More information
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`absolute top-20 md:bottom-0 md:left-[29.5%] m-auto flex items-center justify-center transition duration-400 ${
            active ? "slide-in-right" : "translate3d-x-full"
          }`}
        >
          <CirenioSVG />
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

export default About;
