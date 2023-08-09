const { build } = require("esbuild");

build({
  entryPoints: ["./items.tsx"],
  bundle: true,
  minify: true,
  format: "esm",
  sourcemap: false,
  outdir: "dist",
});
