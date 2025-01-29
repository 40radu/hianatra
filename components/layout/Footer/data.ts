import { IconType } from "@/components/Icon";

interface SocialMediaProps {
    link: string;
    icon: keyof IconType
}

interface LinkProps {
    link: string;
    labKey: "home" | "about" | "course" | "career" | "resources" | "blog" | "privacyPolicy" | "termsOfUse"
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
        labKey: "home",
        link: "/",
    },
    {
        labKey: "about",
        link: "/about",
    },
    {
        labKey: "course",
        link: "/courses",
    },
    {
        labKey: "career",
        link: "",
    },
    {
        labKey: "resources",
        link: "",
    },
    {
        labKey: "blog",
        link: "",
    },
    {
        labKey: "privacyPolicy",
        link: "",
    },
    {
        labKey: "termsOfUse",
        link: "",
    },
]

export { socialMediaData, linkData }