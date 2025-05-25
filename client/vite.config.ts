import { defineConfig, Plugin, ResolvedConfig } from "vite";
import { AssetPack } from "@assetpack/core";
// @ts-expect-error TS2307: Cannot find module
import { pixiPipes } from "@assetpack/core/pixi";
import tsconfigPaths from "vite-tsconfig-paths";

function assetpackPlugin(): Plugin {
  const config = {
    entry: "./raw-assets",
    output: "./public/assets",
    pipes: [
      ...pixiPipes({
        cacheBust: true,
        manifest: {
          output: "./src/manifest.json",
        },
      }),
    ],
  };

  let mode: ResolvedConfig["command"];
  let ap: AssetPack | undefined;

  return {
    name: "vite-plugin-assetpack",
    configResolved(resolvedConfig) {
      mode = resolvedConfig.command;
      if (!resolvedConfig.publicDir) return;
      if (config.output) return;
      const publicDir = resolvedConfig.publicDir.replace(process.cwd(), "");
      config.output = `.${publicDir}/assets/`;
    },
    buildStart: async () => {
      if (mode === "serve") {
        if (ap) return;
        ap = new AssetPack(config);
        void ap.watch();
      } else {
        await new AssetPack(config).run();
      }
    },
    buildEnd: async () => {
      if (ap) {
        await ap.stop();
        ap = undefined;
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    open: true,
  },
  plugins: [assetpackPlugin(), tsconfigPaths()],
});
