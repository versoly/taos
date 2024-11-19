import React, { useEffect, useState, useRef } from "react";

const throttle = (fn, delay) => {
  let waiting = false;
  return () => {
    if (!waiting) {
      fn();
      waiting = true;
      setTimeout(() => (waiting = false), delay);
    }
  };
};

const useScrollY = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    let ticking = false;

    const updateScrollY = () => {
      const scrollY = window.scrollY;
      setScrollY(scrollY);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollY);
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttle(onScroll, 25));

    return () => window.removeEventListener("scroll", onScroll);
  });

  return scrollY;
};

const getBeforeClassName = (className) => {
  return className.replaceAll("taos:", "");
};

const TAOS = ({ as = "div", children, offset = 0, ...props }) => {
  const As = as;
  const taosClassName = props.className + " taos-init";
  const beforeClassName = getBeforeClassName(taosClassName);

  const [className, setClassName] = useState(
    props.className.replaceAll("taos:", "") + " !duration-[0ms] !delay-[0ms]"
  );
  const [trigger, setTrigger] = useState(null);
  const ref = useRef(null);
  const scrollY = useScrollY();

  const setClassNameAfterFrame = (className) =>
    window.requestAnimationFrame(() => setClassName(className));

  useEffect(() => {
    if (ref.current) {
      window.requestAnimationFrame(() =>
        setTrigger(
          ref.current.getBoundingClientRect().top -
            window.innerHeight +
            offset +
            window.scrollY
        )
      );

      setClassNameAfterFrame(beforeClassName);
    }
  }, []);

  useEffect(() => {
    if (trigger < scrollY) {
      setClassNameAfterFrame(taosClassName);
      return;
    }

    setClassNameAfterFrame(beforeClassName);
  }, [trigger, scrollY]);

  return (
    <As ref={ref} {...props} className={className}>
      {children}
    </As>
  );
};

TAOS.displayName = "TAOS";
export { TAOS };
