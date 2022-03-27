import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCar,
  faMicrochip,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faCss3,
  faJs,
  faInstagram,
  faSpotify,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import AboutImg from "../../public/svg/general/about.svg";

function More() {
  library.add(
    faSpotify,
    faInstagram,
    faTwitter,
    faCar,
    faMicrochip,
    faDumbbell,
    faReact,
    faCss3,
    faJs
  );
  return (
    <>
      <div className="static-cover">
        <div className="fullPage_slide">
          <div className="text-wrap">
            <div className="title">About Me</div>
            <div className="decoration">
              <span />
              <span />
            </div>
            <div className="description">
              Learn more about who I am <br /> and what I do.
            </div>
          </div>
          <div className="image-wrap">
            <div className="parallaxImages">
              <div>
                <img className="about-img" src={AboutImg.src} />
              </div>
            </div>
          </div>
        </div>
        <div className="scrollDown">SCROLL DOWN</div>
      </div>
      <div className="static-overview">
        <div className="static-development">
          <div className="static-number">01</div>
          <div className="static-content">
            <h2>WHO AM I</h2>
            <div className="static-p">
              <h3 className="static-title">Cirenio Bryan Lopez</h3>
              I am an undergraduate student at the University of Pittsburgh
              currently in the process of transferring with a current graduation
              date of 2024. I started programming back in high school, working
              with raw HTML, CSS, and JavaScript and eventually learned the
              basics of C/C++.
              <br />I am now an aspiring Software Engineer working on different
              projects on the front-end and back-end using numerous frameworks
              and programming languages.
              <img src="/img/Cirenio.jpg" alt="Cirenio Bryan Lopez"></img>
            </div>
          </div>
        </div>
        <div className="static-development">
          <div className="static-number">02</div>
          <div className="static-content">
            <h2>PASSIONS</h2>
            <div className="static-p-container">
              <div className="static-p">
                <div className="icons-special">
                  <FontAwesomeIcon icon={["fas", "car"]} />
                </div>
                <h3 className="static-title">Travel</h3>I love to travel,
                whether it be driving or flying, I love to constantly be on the
                move, visit new sights and meet new people. I have traveled all
                throughout Texas, parts of California and Pennsylvania and my
                current 2022 travel goal is to drive from coast to coast.
              </div>
              <div className="static-p">
                <div className="icons-special">
                  <FontAwesomeIcon icon={["fas", "microchip"]} />
                </div>
                <h3 className="static-title">Technology</h3> I have been an avid
                tinkerer for as long as I can remember, starting from studying
                toy circuitry when I was a kid to today where I am actively
                studying technology and writing new programs on a daily basis.
              </div>
              <div className="static-p">
                <div className="icons-special">
                  <FontAwesomeIcon icon={["fas", "dumbbell"]} />
                </div>
                <h3 className="static-title">Fitness</h3> I am an active gym
                goer, you can almost catch me going to the gym on a daily basis
                trying to improve my physical health. I currently engage in free
                weight lifting with a current interest in calisthenics. I am
                always more than happy to share any advice to beginner gym
                goers.
              </div>
            </div>
          </div>
        </div>
        <div className="static-development">
          <div className="static-number">03</div>
          <div className="static-content">
            <h2>SKILL SET</h2>
            <div className="static-p-i">
              <div className="skill-icons">
                <img src="/icons/ps.svg" alt="PhotoShop" />
                <p>PhotoShop</p>
              </div>
              <div className="skill-icons">
                <img src="/icons/ai.svg" alt="Illustrator" />
                <p>Illustrator</p>
              </div>
              <div className="skill-icons">
                <img src="/icons/html.svg" alt="HTML5 & CSS3" />
                <p>HTML5 & CSS3</p>
              </div>
              <div className="skill-icons">
                <img src="/icons/js.svg" alt="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div className="skill-icons">
                <img src="/icons/sass.svg" alt="Sass" />
                <p>Sass</p>
              </div>
              <div className="skill-icons">
                <img src="/icons/c.svg" alt="C and C++" />
                <p>C/C++</p>
              </div>
              <div className="skill-icons">
                <img src="/icons/java.svg" alt="Java" />
                <p>Java</p>
              </div>
              <div className="skill-icons">
                <img src="/icons/python.svg" alt="Python" />
                <p>Python</p>
              </div>
              <div className="skill-icons">
                <img src="/icons/rust.svg" alt="Rust" />
                <p>Rust</p>
              </div>
            </div>
          </div>
        </div>
        <div className="static-development">
          <div className="static-number">04</div>
          <div className="static-content">
            <h2>SOCIAL MEDIA</h2>
            <div className="social-wrapper">
              <div className="static-social">
                <div className="static-social-title">
                  <FontAwesomeIcon icon={["fab", "spotify"]} />
                  <h3>Spotify</h3>
                </div>
                <div className="static-social-wrapper">
                  <iframe
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/playlist/75mVNbT5Y8HkqIx6coHDc7?utm_source=generator"
                    width="100%"
                    height="380"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  ></iframe>
                </div>
              </div>
              <div className="static-social">
                <div className="static-social-title">
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                  <h3>Instagram</h3>
                </div>
                <div className="static-social-wrapper insta">
                  <iframe
                    src="https://snapwidget.com/embed/981438"
                    frameBorder="0"
                    style={{ borderRadius: "12px" }}
                    scrolling="no"
                    height="100%"
                    width="100%"
                  ></iframe>
                </div>
              </div>
              <div className="static-social">
                <div className="static-social-title">
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                  <h3>Twitter</h3>
                </div>
                <div className="static-social-wrapper">
                  <a
                    className="twitter-timeline"
                    data-lang="en"
                    data-height="600"
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
        <div className="static-return">
          <Link href="/about">
            <a>BACK</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default More;
