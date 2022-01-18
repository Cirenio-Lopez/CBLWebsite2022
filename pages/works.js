import WorksSVG from "../svg/works.svg";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
function Works(props) {
  const [active, setActive] = useState(false);
  const router = useRouter();
  useEffect(() => {
    props.currentPage(2);
    setActive(props.active);
    if (props.scrollDir === "down") {
      router.push("./about/");
      props.handleScroll("none");
    }
    if (props.scrollDir === "up") {
      router.push("/");
      props.handleScroll("none");
    }
  }, [props, router]);
  return (
    <>
      <div className="z-10 h-screen w-screen overflow-hidden">
        <div className="ml-[11%] absolute bottom-20 md:bottom-[29%] z-10 overflow-x-hidden">
          <div
            className={`transition duration-400 ${
              active ? "slide-in-left" : "-translate3d-x-full"
            }`}
          >
            <span className="text-5xl md:text-9xl">
              Works &
              <br />
              Projects
            </span>
            <div className="pt-2 md:pt-0">
              <span className="block w-[50px] h-[2px] md:w-[150px] md:h-1 rounded-[5px] bg-[#ff4d5a] my-2 md:my-[1rem]"></span>
              <span className="block w-[50px] h-[2px] md:w-[150px] md:h-1 rounded-[5px] bg-[#ff4d5a] ml-[24px] md:ml-[54px] mb-4"></span>
            </div>
            <p className="pt-2 md:text-3xl tracking-[.1em] md:leading-normal pr-16">
              Future projects & / <br /> software progress will <br /> displayed
              here. Follow my progress on my Github.
            </p>
            <div className="translate-y-0 translate-z-0 mt-3 ease-in">
              <Link href="https://github.com/Cirenio-Lopez">
                <a>
                  <button className="inline-block text-[1.4rem] bg-[#ff4d5a] leading-none tracking-widest font-bold py-[18px] px-[32px] rounded-[50px] ease-in duration-400 hover:-translate-y-3">
                    Github
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="overflow-x-hidden md:w-1/2 right-0 absolute">
          <div
            className={`transition duration-400 w-screen md:w-auto md:h-screen h-auto ${
              active ? "slide-in-right" : "translate3d-x-full"
            }`}
          >
            <WorksSVG />
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

export default Works;
