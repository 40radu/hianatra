import { IconType } from "@/components/Icon";

interface SocialMediaProps {
    link: string;
    icon: keyof IconType
}

interface LinkProps {
    label: string;
    link: string;
}

const socialMediaData: SocialMediaProps[] = [
    {
        link: "",
        icon: "android"
    },
    {
        link: "",
        icon: "facebook"
    },
    {
        link: "",
        icon: "instagram"
    },
    {
        link: "",
        icon: "twitter"
    },
    {
        link: "",
        icon: "linkedin"
    }
];

const linkData: LinkProps[] = [
    {
        label: "Accueil",
        link: "",
    },
    {
        label: "À propos",
        link: "",
    },
    {
        label: "Cours",
        link: "",
    },
    {
        label: "Parcours",
        link: "",
    },
    {
        label: "Ressources",
        link: "",
    },
    {
        label: "Blog",
        link: "",
    },
    {
        label: "Politique de Confidentialité",
        link: "",
    },
    {
        label: "Conditions d'Utilisation",
        link: "",
    },
]

export { socialMediaData, linkData }