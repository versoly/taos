import React, { useEffect, useRef } from "react";
import { initElement, removeElement } from "./utils";

const useTaos = () => {
  const ref = useRef(null);

  useEffect(() => {
    initElement(ref.current);

    return () => {
      removeElement(ref.current);
    };
  }, []);

  return ref;
};

export default useTaos;
