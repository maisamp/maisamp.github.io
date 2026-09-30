import { getCollection, type CollectionKey } from "astro:content";

export async function published<C extends CollectionKey>(name: C) {
	return getCollection(name, (e) => import.meta.env.DEV || !(e.data as { draft?: boolean }).draft);
}

export function formatDate(d: Date, style: "short" | "month" = "short") {
	return d.toLocaleDateString("en-US", {
		timeZone: "UTC",
		year: "numeric",
		month: "short",
		...(style === "short" ? { day: "numeric" } : {}),
	});
}
