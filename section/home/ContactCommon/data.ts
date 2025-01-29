type keyTitleProps = "phone" | "email" | "localisation"

interface ContactProps {
	image: string;
	title: keyTitleProps;
	description: string
}

const contactData: ContactProps[] = [
	{
		image: "/call.png",
		title: "phone",
		description: "(603) 555-0123"
	},
	{
		image: "/email.png",
		title: "email",
		description: "exemple@gmail.com"
	},
	{
		image: "/location.png",
		title: "localisation",
		description: "ambohimanarina anosisoa, Antananarivo , m/car"
	}
]

export { contactData }