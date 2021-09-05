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
  //   input: "src/bp.js",
  //   output: [
  //     {
  //       file: "js/bp-min.js",
  //       format: "iife",
  //       sourcemap: true,
  //       plugins: [terser()],
  //     },
  //   ],
  // },
  {
    input: "src/um.js",
    output: [
      {
        file: "js/um-min.js",
        format: "iife",
        sourcemap: true,
        plugins: [terser()],
      },
    ],
  },
];
