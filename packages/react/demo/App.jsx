import React from "react";
import { TAOS } from "../src";

const App = () => {
  return (
    <section className="py-[5px]">
      <TAOS
        as="div"
        className="bg-purple-600/40 py-12 delay-[300ms] duration-[700ms] taos:translate-y-[200px] taos:opacity-0"
      >
        <h1 className="text-9xl">Test</h1>
      </TAOS>
      <div className="opacity-0"></div>

      <div className="my-[2000px] flex flex-col justify-center items-center">
        <div className="h-1 w-full bg-blue-600"></div>
        <TAOS
          as="div"
          className="bg-purple-600/40 py-12 delay-[300ms] duration-[700ms] taos:translate-y-[200px] taos:opacity-0"
        >
          <h1 className="text-9xl">Test</h1>
        </TAOS>
      </div>
    </section>
  );
};

export default App;
