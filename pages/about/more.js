import MainSVG from "../../svg/main.svg";
import Link from "next/link";
import About from "./index";
import Image from "next/image";
import Cirenio from "../../img/Cirenio.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCar,
  faMicrochip,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faSpotify,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function More(props) {
  library.add(
    faCar,
    faMicrochip,
    faDumbbell,
    faSpotify,
    faInstagram,
    faTwitter
  );
  return (
    <>
      <About
        currentPage={props.currentPage}
        active={props.active}
        scrollDir={props.scrollDir}
        handleScroll={props.handleScroll}
        more={true}
      />
      <section className="mb-[10rem] relative overflow-hidden">
        <div className="mt-[20rem] flex flex-col md:flex-row px-10">
          <p className="text-7xl text-red-500 md:pl-[10%] pr-[5%]">01</p>
          <div className="items-start md:flex justify-between pr-[10%] box-content w-full m-auto flex-wrap">
            <h2 className="pt-0 text-6xl text-blue-50 tracking-widest mr-[3.2rem] pb-10 flex-wrap">
              WHO I AM
            </h2>
            <div className="xl:w-[50%]">
              <div className="text-blue-50 mb-[2.4rem]">
                <p className="text-4xl tracking-widest">Cirenio Bryan Lopez</p>
              </div>
              <div className="text-blue-50 mb-[2.4rem]">
                <p className="text-2xl font-light lh9">
                  I am an undergraduate student at the University of Pittsburgh
                  currently in the process of transferring with a current
                  graduation date of 2024. I started programming back in high
                  school, working with raw HTML, CSS, and JavaScript and
                  eventually learned the basics of C/C++.
                  <br />
                  <br />I am now an aspiring Software Engineer working on
                  different projects on the front-end and back-end using
                  numerous frameworks and programming languages.
                </p>
              </div>
              <div>
                <Image src={Cirenio} alt="Picture of Cirenio Lopez" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[20rem] flex flex-col md:flex-row px-10">
          <p className="text-7xl text-red-500 md:pl-[10%] pr-[5%]">02</p>
          <div className="items-start justify-between pr-[10%] box-content w-full m-auto">
            <h2 className="pt-0 text-6xl text-blue-50 tracking-widest mr-[3.2rem] pb-10">
              PASSIONS
            </h2>
            <div className="w-full flex xl:flex-row flex-col">
              <div className="w-full xl:w-[33%] items-center flex flex-col pb-8 pr-4">
                <div className="text-9xl">
                  <FontAwesomeIcon icon={["fas", "car"]} />
                </div>
                <div className="text-6xl">
                  <p>Travel</p>
                </div>
                <div className="text-2xl font-thin lh9">
                  I love to travel, whether it be driving or flying, I love to
                  constantly be on the move, visit new sights and meet new
                  people. I have traveled all throughout Texas, parts of
                  California and Pennsylvania and my current 2022 travel goal is
                  to drive from coast to coast.
                </div>
              </div>
              <div className="w-full xl:w-[33%] items-center flex flex-col pb-8 pr-4">
                <div className="text-9xl">
                  <FontAwesomeIcon icon={["fas", "microchip"]} />
                </div>
                <div className="text-6xl">
                  <p>Technology</p>
                </div>
                <div className="text-2xl font-thin lh9">
                  I have been an avid tinkerer for as long as I can remember,
                  starting from studying toy circuitry when I was a kid to today
                  where I am actively studying technology and writing new
                  programs on a daily basis.
                </div>
              </div>
              <div className="w-full xl:w-[33%] items-center flex flex-col pb-8">
                <div className="text-9xl">
                  <FontAwesomeIcon icon={["fas", "dumbbell"]} />
                </div>
                <div className="text-6xl">
                  <p>Fitness</p>
                </div>
                <div className="text-2xl font-thin lh9">
                  I am an active gym goer, you can almost catch me going to the
                  gym on a daily basis trying to improve my physical health. I
                  currently engage in free weight lifting with a current
                  interest in calisthenics. I am always more than happy to share
                  any advice to beginner gym goers.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[20rem] flex flex-col md:flex-row px-10">
          <p className="text-7xl text-red-500 md:pl-[10%] pr-[5%]">03</p>
          <div className="items-start justify-between pr-[10%] box-content w-full m-auto">
            <h2 className="pt-0 text-6xl text-blue-50 tracking-widest mr-[3.2rem] pb-10">
              Skill Set
            </h2>
            <div className="w-full flex xl:flex-row flex-col flex-wrap">
              <div className="w-full xl:w-[33%] items-center flex pb-8">
                <div className="">
                  <Image
                    src="/icons/ps.svg"
                    height="60"
                    width="60"
                    alt="PhotoShop"
                  />
                </div>
                <div className="pl-5 text-5xl">
                  <p>PhotoShop</p>
                </div>
              </div>
              <div className="w-full xl:w-[33%] items-center flex pb-8">
                <div className="">
                  <Image
                    src="/icons/ai.svg"
                    height="60"
                    width="60"
                    alt="Adobe Illustrator"
                  />
                </div>
                <div className="pl-5 text-5xl">
                  <p>Illustrator</p>
                </div>
              </div>
              <div className="w-full xl:w-[33%] items-center flex pb-8">
                <div className="">
                  <Image
                    src="/icons/html.svg"
                    height="80"
                    width="80"
                    alt="HTML5 & CSS3"
                  />
                </div>
                <div className="pl-5 text-5xl">
                  <p>HTML5 & CSS3</p>
                </div>
              </div>
              <div className="w-full xl:w-[33%] items-center flex pb-8">
                <div className="">
                  <Image
                    src="/icons/js.svg"
                    height="60"
                    width="60"
                    alt="JavaScript"
                  />
                </div>
                <div className="pl-5 text-5xl">
                  <p>JavaScript</p>
                </div>
              </div>
              <div className="w-full xl:w-[33%] items-center flex pb-8">
                <div className="">
                  <Image
                    src="/icons/sass.svg"
                    height="60"
                    width="60"
                    alt="Sass"
                  />
                </div>
                <div className="pl-5 text-5xl">
                  <p>Sass</p>
                </div>
              </div>
              <div className="w-full xl:w-[33%] items-center flex pb-8">
                <div className="">
                  <Image
                    src="/icons/c.svg"
                    height="70"
                    width="70"
                    alt="C & C plus plus"
                  />
                </div>
                <div className="pl-5 text-5xl">
                  <p>C/C++</p>
                </div>
              </div>
              <div className="w-full xl:w-[33%] items-center flex pb-8">
                <div className="">
                  <Image
                    src="/icons/java.svg"
                    height="80"
                    width="80"
                    alt="Java"
                  />
                </div>
                <div className="pl-5 text-5xl">
                  <p>Java</p>
                </div>
              </div>
              <div className="w-full xl:w-[33%] items-center flex pb-8">
                <div className="">
                  <Image
                    src="/icons/python.svg"
                    height="80"
                    width="80"
                    alt="Python"
                  />
                </div>
                <div className="pl-5 text-5xl">
                  <p>Python</p>
                </div>
              </div>
              <div className="w-full xl:w-[33%] items-center flex pb-8">
                <div className="">
                  <Image
                    src="/icons/rust.svg"
                    height="80"
                    width="80"
                    alt="Rust"
                  />
                </div>
                <div className="pl-5 text-5xl">
                  <p>Rust</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[20rem] flex flex-col md:flex-row px-10">
          <p className="text-7xl text-red-500 md:pl-[10%] pr-[5%]">04</p>
          <div className="items-start justify-between pr-[10%] box-content w-full m-auto">
            <h2 className="pt-0 text-6xl text-blue-50 tracking-widest mr-[3.2rem] pb-10">
              Social Media
            </h2>
            <div className="w-full flex xl:flex-row flex-col flex-wrap">
              <div className="w-full xl:w-[33%] items-center flex pb-8 flex-wrap xl:pr-10">
                <div className="text-6xl pb-10">
                  <FontAwesomeIcon icon={["fab", "spotify"]} />
                </div>
                <div className="pl-5 text-5xl pb-10">
                  <p>Spotify</p>
                </div>
                <div className="w-full">
                  <iframe
                    src="https://open.spotify.com/embed/playlist/7LlQkhdTjLG0Otbh7IIcuV?utm_source=generator&theme=0"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    style={{ borderRadius: "25px" }}
                  ></iframe>
                </div>
              </div>
              <div className="w-full xl:w-[66%] items-center flex pb-8 flex-wrap xl:pr-10">
                <div className="text-6xl pb-10">
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </div>
                <div className="pl-5 text-5xl pb-10">
                  <p>Instagram</p>
                </div>
                <div className="w-full">
                  <iframe
                    src="https://snapwidget.com/embed/981438"
                    frameBorder="0"
                    scrolling="no"
                    width="100%"
                    className="h-[350px] sm:h-[400px] xl:h-[500px]"
                  ></iframe>
                </div>
              </div>
              <div className="w-full xl:w-[33%] items-center flex pb-8 flex-wrap xl:pr-10">
                <div className="text-6xl pb-10">
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </div>
                <div className="pl-5 text-5xl pb-10">
                  <p>Twitter</p>
                </div>
                <div className="w-full">
                  <a
                    className="twitter-timeline"
                    data-lang="en"
                    data-height="450"
                    data-theme="dark"
                    href="https://twitter.com/CirenioBryLopez?ref_src=twsrc%5Etfw"
                  >
                    Tweets by CirenioBryLopez
                  </a>{" "}
                  <script
                    async
                    src="https://platform.twitter.com/widgets.js"
                    charSet="utf-8"
                  ></script>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default More;
