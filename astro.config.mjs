// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://maisamp.github.io",
	devToolbar: { enabled: false },
	integrations: [sitemap()],
	markdown: {
		shikiConfig: {
			themes: { light: "github-light", dark: "github-dark" },
			wrap: true,
		},
	},
});
