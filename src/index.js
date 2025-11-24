(function () {
  const debounce = (fn, delay) => {
    let timeoutId = null;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(fn, delay);
    };
  };

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

  let elements = [];
  let innerWidth = window.innerWidth;
  let scrollY = window.scrollY;

  const getClassAttribute = (element) => {
    return element.getAttribute("class") || "";
  };

  const setClassAttribute = (element, className) => {
    element.setAttribute("class", className);
  };

  const setClassNameAfterTrigger = (element) => {
    const className = getClassAttribute(element);

    if (!className.includes("taos-animate")) {
      element.style.transitionDuration = "";
      element.style.transitionDelay = "";

      setClassAttribute(element, className + " taos-animate");
    }
  };

  const setClassNameBefore = (element) => {
    const className = getClassAttribute(element);
    setClassAttribute(element, className.split(" taos-animate").join(""));
  };

  const getTrigger = ({ element, offset }) => {
    return (
      element.getBoundingClientRect().top -
      window.innerHeight +
      offset +
      scrollY
    );
  };

  const refreshTriggers = throttle(() => {
    elements.forEach((el) => (el.trigger = getTrigger(el)));
  }, 250);

  const handleScroll = () => {
    scrollY = window.scrollY;

    elements.forEach(({ element, trigger, once, offset }) => {
      const className = getClassAttribute(element);

      trigger ||= getTrigger({ element, offset });

      if (trigger < scrollY) {
        setClassNameAfterTrigger(element);
      } else if (!once && className.includes("taos-animate")) {
        setClassNameBefore(element);
      }
    });

    refreshTriggers();
  };

  const refresh = () => {
    elements = [];
    document.querySelectorAll('[class*="taos"]').forEach(initElement);
    refreshTriggers();
    requestAnimationFrame(handleScroll);
  };

  const handleResize = () => {
    if (innerWidth !== window.innerWidth) {
      innerWidth = window.innerWidth;
      refresh();
    }
  };

  const initElement = (element) => {
    const className = getClassAttribute(element);

    if (elements.some((el) => el.element === element)) {
      return;
    }

    if (!className.includes("taos:")) {
      return;
    }

    if (!className.includes("taos-init")) {
      setClassAttribute(element, className + " taos-init");
    }

    element.style.transitionDuration = "0ms";
    element.style.transitionDelay = "0ms";
    setClassNameBefore(element);

    elements.push({
      element,
      once: getComputedStyle(element)["animation-iteration-count"] === "1",
      offset: parseInt(element.dataset.taosOffset || 0),
    });
  };

  refresh();
  addEventListener("scroll", throttle(handleScroll, 32));
  addEventListener("orientationchange", refresh);
  addEventListener("resize", debounce(handleResize, 250));

  const observer = new MutationObserver((mutations) => {
    mutations.forEach(({ target }) => {
      initElement(target);
    });
  });

  observer.observe(document, {
    attributes: true,
    childList: true,
    subtree: true,
  });
})();
