import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/assets/js/main.js",
    output: [
      {
        file: "js/min.js",
        format: "iife",
        sourcemap: true,
        plugins: [terser()],
      },
    ],
  },
  {
    input: "src/assets/js/bp.js",
    output: [
      {
        file: "js/bp-min.js",
        format: "iife",
        sourcemap: true,
        plugins: [terser()],
      },
    ],
  },
];
