const { build } = require("esbuild");

build({
  entryPoints: ["./items.tsx"],
  bundle: false,
  minify: true,
  format: "esm",
  sourcemap: true,
  outdir: "dist",
});
