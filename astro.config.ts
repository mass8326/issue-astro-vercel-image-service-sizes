import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  adapter: vercel({
    imageService: true,
    imagesConfig: { sizes: [640, 960, 1280] },
  }),
  image: { remotePatterns: [{ hostname: "picsum.photos" }] },
});
