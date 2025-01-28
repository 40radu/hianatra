interface LinksProps {
	href : string;
	labelKey : "home" | "about" | "course" | "blog"
}

export const dataLinks : LinksProps[] = [
	{
		href: "/",
		labelKey: "home",

	},
	{
		href: "/about",
		labelKey: "about",

	},
	{
		href: "/courses",
		labelKey: "course",
	},
	{
		href: "/blog",
		labelKey: "blog",

	},
]