const { build } = require("esbuild");

build({
  entryPoints: ["./index.tsx"],
  bundle: true,
  minify: true,
  format: "esm",
  sourcemap: false,
  outfile: "dist/compiled.js",
});
