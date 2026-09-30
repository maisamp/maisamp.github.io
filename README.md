# 🦦 maisamp.github.io

My personal site. Built with [Astro](https://astro.build), deployed to GitHub Pages on every push to `master`.

```sh
npm install
npm run dev      # http://localhost:4321, shows drafts too
npm run build    # what CI runs
```

## Adding things

Everything you'd normally edit lives in `src/content/`. Add `draft: true` to anything to keep it off the live site while you work on it.

| What | Where | Notes |
|---|---|---|
| Blog post | `src/content/blog/my-post.md` | `title`, `description`, `publishDate`. Images/GIFs go in `public/assets/…` |
| Project | `src/content/projects/name.md` | `title`, `summary`, `date`, `image`, `links`, `tags`. Put the thumbnail next to the `.md` |
| Book | `src/content/books/title.md` | `title`, `author`, `read` (a date, only used for ordering). The review is the body: a paragraph or two. For a cover, drop an image into `src/content/books/covers/` with the same name, e.g. `title.jpg` |
| Human | `src/content/human/some-moment/index.md` | One folder per moment, with its photos alongside; list them under `photos` |
| Bio | `src/content/bio/` | One file per tab of the About toggle |
| Résumé | `src/content/resume/resume.md` | Put the PDF at `public/resume.pdf` and set `pdf: /resume.pdf` |
| Name, nav, social links | `src/config.ts` | |
| Portrait | `src/assets/portrait.webp`, `portrait-round.webp` | Tall arch artwork for desktop, square crop for phones |

Copy one of the `example-*` files to get started, then delete the examples.
