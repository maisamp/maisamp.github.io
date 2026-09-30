import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { site } from "../config";
import { published } from "../utils";

export async function GET(context: APIContext) {
	const posts = (await published("blog")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
	return rss({
		title: site.name,
		description: site.description,
		site: context.site!,
		items: posts.map((p) => ({
			title: p.data.title,
			description: p.data.description,
			pubDate: p.data.publishDate,
			link: `/blog/${p.id}/`,
		})),
	});
}
