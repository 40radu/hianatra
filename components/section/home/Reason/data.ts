interface ReasonProps {
    image: string;
    title: string;
    description: string;
    link: string;
}

const reasonData: ReasonProps[] = [
    {
        image: "/home/atomic.png",
        title: "Des cours adaptés à tous les niveaux",
        description: "Que vous soyez débutant ou avancé, nos formations sont conçues pour vous aider à progresser étape par étape.",
        link: ""
    },
    {
        image: "/home/hours.png",
        title: "Flexibilité totale",
        description: "Apprenez à votre rythme, quand et où vous voulez, avec un accès en ligne 24/7.",
        link: ""
    },
    {
        image: "/home/achievement.png",
        title: "Des experts passionnés",
        description: "Nos formateurs sont des développeurs expérimentés, prêts à partager leurs connaissances et astuces.",
        link: ""
    }
]

export { reasonData }