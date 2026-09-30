// Site-wide settings. Edit freely.

export const site = {
	name: "Maisam Pyarali",
	description: "Engineer in San Francisco. Building things, lately with AI in the loop on hardware design.",
};

export const nav = [
	{ href: "/", label: "About" },
	{ href: "/projects/", label: "Projects" },
	{ href: "/blog/", label: "Blog" },
	{ href: "/books/", label: "Books" },
	{ href: "/human/", label: "Human" },
	{ href: "/resume/", label: "Résumé" },
];

// `icon` must be one of the names in src/components/Icon.astro
export const socials = [
	{ label: "GitHub", href: "https://github.com/maisamp", icon: "github" },
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/maisam-pyarali/", icon: "linkedin" },
	// { label: "X", href: "https://x.com/…", icon: "x" },
	// { label: "Email", href: "mailto:…", icon: "mail" },
] as const;
