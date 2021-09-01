import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/main.js",
    output: [
      {
        file: "js/min.js",
        format: "iife",
        sourcemap: true,
        plugins: [terser()],
      },
    ],
  },
  // {
  //   input: "src/youtube.js",
  //   output: [
  //     {
  //       file: "js/youtube-min.js",
  //       format: "iife",
  //       sourcemap: true,
  //       plugins: [terser()],
  //     },
  //   ],
  // },
];
