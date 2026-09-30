// Book covers live in src/content/books/covers/ and match their book by file name:
// books/shoe-dog.md  ->  books/covers/shoe-dog.jpg (or .png / .webp)
const files = import.meta.glob<{ default: ImageMetadata }>("./content/books/covers/*.{jpg,jpeg,png,webp,avif}", {
	eager: true,
});

export function coverFor(id: string): ImageMetadata | undefined {
	for (const [path, mod] of Object.entries(files)) {
		const name = path.split("/").pop()!.replace(/\.[^.]+$/, "");
		if (name === id) return mod.default;
	}
}
