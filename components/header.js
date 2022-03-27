import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Header(props) {
  const [show, setShow] = useState();
  const [headerColor, setHeaderColor] = useState({ color: "#fff" });
  library.add(faTwitter, faGithub, faLinkedin, faInstagram);

  useEffect(() => {
    function listenScrollEvent() {
      if (window.scrollY > window.innerHeight) {
        setHeaderColor({ color: "#020b16" });
      } else {
        setHeaderColor({ color: "#fff" });
      }
    }
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header style={{ color: headerColor.color }}>
      <div className="wrap">
        <div className="title" onClick={() => setShow(false)}>
          <Link href="/">
            <a>Cirenio Lopez</a>
          </Link>
        </div>
        <div className="links">
          <div className="navbar-icons">
            <div className="item">
              <Link href="https://github.com/Cirenio-Lopez">
                <a>
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
              </Link>
              <div className="item"></div>
              <Link href="https://www.linkedin.com/in/cireniolopez/">
                <a>
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>
              </Link>
              <div className="item"></div>
              <Link href="https://twitter.com/CirenioBryLopez">
                <a>
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </a>
              </Link>
              <div className="item"></div>
              <Link href="https://www.instagram.com/_cirenio/">
                <a>
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
              </Link>
            </div>
          </div>
          <div
            id="hamburger"
            className={`${show ? "open" : ""}`}
            onClick={() => {
              setShow(!show);
              if (
                headerColor.color === "#fff" &&
                show === true &&
                (props.location == "/about/more" ||
                  props.location == "/works/projects")
              )
                setHeaderColor({ color: "#020b16" });
              else setHeaderColor({ color: "#fff" });
            }}
          >
            <span style={{ backgroundColor: headerColor.color }}></span>
            <span style={{ backgroundColor: headerColor.color }}></span>
            <span style={{ backgroundColor: headerColor.color }}></span>
            <span style={{ backgroundColor: headerColor.color }}></span>
            <span style={{ backgroundColor: headerColor.color }}></span>
            <span style={{ backgroundColor: headerColor.color }}></span>
          </div>
        </div>
      </div>
      <nav className={`${show ? "" : "nav-hidden"}`}>
        <div className="nav-wrap">
          <Link href="/">
            <a
              className={`strikeThrough ${show ? "" : "nav-item-hidden"}`}
              onClick={() => setShow(!show)}
            >
              HOME
            </a>
          </Link>
        </div>
        <div className="nav-wrap">
          <Link href="/works">
            <a
              className={`strikeThrough ${show ? "" : "nav-item-hidden"}`}
              onClick={() => setShow(!show)}
            >
              WORKS
            </a>
          </Link>
        </div>
        <div className="nav-wrap">
          <Link href="/about">
            <a
              className={`strikeThrough ${show ? "" : "nav-item-hidden"}`}
              onClick={() => setShow(!show)}
            >
              ABOUT ME
            </a>
          </Link>
        </div>
        <div className="nav-wrap">
          <Link href="/contact">
            <a
              className={`strikeThrough ${show ? "" : "nav-item-hidden"}`}
              onClick={() => setShow(!show)}
            >
              CONTACT
            </a>
          </Link>
        </div>
        <div className="nav-wrap">
          <div className={`nav-icons ${show ? "" : "nav-item-hidden"}`}>
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
            <Link href="https://www.instagram.com/cireniobrylopez/">
              <a>
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <div className="tally-navbar">
        <ul>
          <li>
            <Link href="/" to="/">
              <a
                className={`${props.location == "/" ? "tally-active" : ""}`}
              ></a>
            </Link>
          </li>
          <li>
            <Link href="/works" to="/works">
              <a
                className={`${
                  props.location == "/works" ? "tally-active" : ""
                }`}
              ></a>
            </Link>
          </li>
          <li>
            <Link href="/about" to="/about">
              <a
                className={`${
                  props.location == "/about" ? "tally-active" : ""
                }`}
              ></a>
            </Link>
          </li>
          <li>
            <Link href="/contact" to="/contact">
              <a
                className={`${
                  props.location == "/contact" ? "tally-active" : ""
                }`}
              ></a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
