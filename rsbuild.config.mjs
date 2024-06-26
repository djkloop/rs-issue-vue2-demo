import { defineConfig, loadEnv } from "@rsbuild/core";
import { pluginVue2 } from "@rsbuild/plugin-vue2";
import { pluginSass } from "@rsbuild/plugin-sass";
import path from "node:path";

const aliasOptions = {
  "@": path.resolve(__dirname, "./src"),
};

const { publicVars } = loadEnv({ prefixes: ["VUE_APP_"] });

const sourceOptions = {
  define: publicVars,
  alias: aliasOptions,
};

export default defineConfig({
  source: sourceOptions,
  resolve: {
    alias: aliasOptions,
  },
  plugins: [
    pluginSass({
      sassLoaderOptions: {
        api: "legacy",
        additionalData: `@import '~@/style/preload.scss';`,
      },
    }),
    pluginVue2(),
  ],
});
