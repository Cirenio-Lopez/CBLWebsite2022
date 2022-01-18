import MainSVG from "../svg/main.svg";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
function Index(props) {
  const [active, setActive] = useState(false);
  const router = useRouter();
  useEffect(() => {
    props.currentPage(1);
    setActive(props.active);
    if (props.scrollDir === "down") {
      router.push("/works");
      props.handleScroll("none");
    }
  }, [props, router]);
  return (
    <>
      <div className="z-10 h-screen w-screen overflow-hidden">
        <div className="ml-[15%] absolute bottom-24 md:bottom-[29%] z-10 overflow-x-hidden">
          <div
            className={`transition duration-400 ${
              active ? "slide-in-left" : "-translate3d-x-full"
            }`}
          >
            <span className="text-5xl md:text-9xl">
              CIRENIO
              <br />
              LOPEZ
            </span>
            <div className="pt-2 md:pt-0">
              <span className="block w-[50px] h-[2px] md:w-[150px] md:h-1 rounded-[5px] bg-[#ff4d5a] my-2 md:my-[1rem]"></span>
              <span className="block w-[50px] h-[2px] md:w-[150px] md:h-1 rounded-[5px] bg-[#ff4d5a] ml-[24px] md:ml-[54px] mb-4"></span>
            </div>
            <p className="pt-2 md:text-3xl tracking-[.1em] md:leading-normal">
              web developer / <br /> software engineer.
            </p>
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
      <p
        className={`transition duration-400 fixed text-[1rem] bottom-[80px] left-[20px] leading-none tracking-[.25em] writing-mode z-20 font-light after:w-[2px] after:h-[64px] after:bg-white after:absolute after:left-0 after:right-0 after:m-auto after:-bottom-[80px] ${
          active ? "translate-y-0 slide-in-up" : "translate-y-[180%]"
        }`}
      >
        SCROLL DOWN
      </p>
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

export default Index;
