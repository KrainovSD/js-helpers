/* eslint-disable import/no-extraneous-dependencies */
import typescript from "@rollup/plugin-typescript";
import { type Plugin, defineConfig } from "rollup";
import externals from "rollup-plugin-peer-deps-external";

export default defineConfig({
  input: "./src/index.ts",
  output: [
    {
      dir: "./lib/esm",
      format: "es",
      generatedCode: "es2015",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: "src",
    },
    {
      file: "./lib/cjs/index.cjs",
      format: "cjs",
      generatedCode: "es2015",
      sourcemap: true,
    },
  ],
  plugins: [externals({ includeDependencies: true }) as Plugin, typescript()],
});
