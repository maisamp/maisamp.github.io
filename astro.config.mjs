// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://maisamp.github.io",
	devToolbar: { enabled: false },
	markdown: {
		shikiConfig: {
			themes: { light: "github-light", dark: "github-dark" },
			wrap: true,
		},
	},
});
