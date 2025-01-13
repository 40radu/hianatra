interface ContactProps {
    image: string;
    title: string;
    description: string
}

const contactData: ContactProps[] = [
    {
        image: "/call.png",
        title: "Téléphone",
        description: "(603) 555-0123"
    },
    {
        image: "/email.png",
        title: "Adresse Email",
        description: "exemple@gmail.com"
    },
    {
        image: "/location.png",
        title: "Localisation",
        description: "ambohimanarina anosisoa, Antananarivo , m/car"
    }
]

export { contactData }