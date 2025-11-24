<script setup>
import {TAOS} from '../src/Taos.js'
</script>

<template>
  <section className="py-[0px]">
      <TAOS
        as="div"
        class="bg-purple-600/40 py-12 delay-[300ms] duration-[700ms] taos:translate-y-[200px] taos:opacity-0"
      >
        <h1 className="text-9xl">Test</h1>
      </TAOS>
      <div className="my-[2000px] flex flex-col justify-center items-center">
        <div className="h-1 w-full bg-blue-600"></div>
        <TAOS
          class="bg-purple-600/40 py-12 delay-[300ms] duration-[700ms] taos:translate-y-[200px] taos:opacity-0 [animation-iteration-count:infinite]"
          data-taos-offset="500"
          random="test"
        >
          <h1 className="text-9xl">Test</h1>
        </TAOS>
        <TAOS
          as="div"
          class="bg-purple-600/40 py-12 delay-[300ms] duration-[700ms] taos:translate-y-[200px] taos:opacity-0"
        >
          <h1 className="text-9xl">Test</h1>
        </TAOS>
      </div>
    </section>
</template>