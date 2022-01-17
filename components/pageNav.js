import Link from "next/link";
import { useState, useEffect } from "react";

function PageNav(props) {
  const [curr_0, setCurr_0] = useState(false);
  const [curr_1, setCurr_1] = useState(false);
  const [curr_2, setCurr_2] = useState(false);
  const [curr_3, setCurr_3] = useState(false);
  useEffect(() => {
    if (props.active === 1) {
      setCurr_0(true);
    } else setCurr_0(false);
    if (props.active === 2) setCurr_1(true);
    else setCurr_1(false);
    if (props.active === 3) setCurr_2(true);
    else setCurr_2(false);
    if (props.active === 4) setCurr_3(true);
    else setCurr_3(false);
  }, [props.active]);
  return (
    <div className="m-0 -translate3d-y-half -translate3d-x-half md:w-[40px] w-auto md:left-[40px] left-1/2 overflow-hidden fixed md:top-1/2 top-auto bottom-[32px] md:bottom-0 opacity-1 z-20">
      <ul className="m-0 p-0 list-none md:block flex items-end">
        <li className="md:h-[3px] h-auto my-0 mx-[28px] md:mt-0 md:mx-0 md:mb-[40px] block w-[14] relative list-none">
          <Link href="/" to="/">
            <a
              className={`w-[3px] md:h-full bg-white duration-300 block relative z-1 cursor-pointer no-underline ${
                curr_0 ? "md:w-[40px] h-[40px]" : "md:w-[24px] h-[24px]"
              }`}
            ></a>
          </Link>
        </li>
        <li className="md:h-[3px] h-auto my-0 mx-[28px] md:mt-0 md:mx-0 md:mb-[40px] block w-[14] relative list-none">
          <Link href="/works" to="/works">
            <a
              className={`w-[3px] md:h-full bg-white duration-300 block relative z-1 cursor-pointer no-underline ${
                curr_1 ? "md:w-[40px] h-[40px]" : "md:w-[24px] h-[24px]"
              }`}
            ></a>
          </Link>
        </li>
        <li className="md:h-[3px] h-auto my-0 mx-[28px] md:mt-0 md:mx-0 md:mb-[40px] block w-[14] relative list-none">
          <Link href="/about" to="/about">
            <a
              className={`w-[3px] md:h-full bg-white duration-300 block relative z-1 cursor-pointer no-underline ${
                curr_2 ? "md:w-[40px] h-[40px]" : "md:w-[24px] h-[24px]"
              }`}
            ></a>
          </Link>
        </li>
        <li className="md:h-[3px] h-auto my-0 mx-[28px] md:mt-0 md:mx-0 md:mb-[40px] block w-[14] relative list-none">
          <Link href="/contact" to="/">
            <a
              className={`w-[3px] md:h-full bg-white duration-300 block relative z-1 cursor-pointer no-underline ${
                curr_3 ? "md:w-[40px] h-[40px]" : "md:w-[24px] h-[24px]"
              }`}
            ></a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default PageNav;
