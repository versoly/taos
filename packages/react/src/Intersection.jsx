import React, { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < 5) {
        ticking = false;
        return;
      }

      setScrollDirection(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  return scrollDirection;
};

const getBeforeClassName = (className) => {
  return className.replaceAll("taos:", "");
};

const TAOS = ({ as = "div", children, ...props }) => {
  const initClassName = props.className + " taos-init";
  const beforeClassName = getBeforeClassName(initClassName);
  const [className, setClassName] = useState(
    props.className + " !duration-[0ms] !delay-[0ms]"
  );
  const scrollDirection = useScrollDirection();

  const setClassNameAfterFrame = (className) =>
    window.requestAnimationFrame(() => setClassName(className));

  // useEffect(() => {
  //   setClassNameAfterFrame(beforeClassName);
  // });

  console.log(className);
  return (
    <InView
      as={as}
      className={className}
      rootMargin={"-400px"}
      onChange={(inView, entry) => {
        console.log(inView, entry);
        // if (className.includes("!duration-[0ms]")) {
        //   setClassNameAfterFrame(beforeClassName);
        //   return;
        // }

        // init visible
        if (inView && !className.includes("taos-init")) {
          console.log("ere");
          setClassNameAfterFrame(beforeClassName);
          setClassNameAfterFrame(initClassName);
          return;
        }
        // init not visible
        if (!inView && !className.includes("taos-init")) {
          setClassNameAfterFrame(beforeClassName);
          return;
        }
        // scroll down
        if (className.includes("taos:") && scrollDirection === "down") {
          return;
        }

        if (!inView) {
          setClassNameAfterFrame(beforeClassName);
          return;
        }

        setClassNameAfterFrame(initClassName);
      }}
    >
      {children}
    </InView>
  );
};

TAOS.displayName = "TAOS";
export { TAOS };
