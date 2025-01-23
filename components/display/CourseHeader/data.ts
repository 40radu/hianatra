import { CardsCourseProps } from "@/section/course/CardsCourse"

interface LinksCoursType {
    label : string, 
    href : CardsCourseProps["filter"]
}

export const courseLinks : LinksCoursType[] = [
    {
        label : "Tous les cours",
        href : "all"
    },
    {
        label : "Collections",
        href : "collections"
    },
    {
        label : "Archives",
        href : "archives"
    }
]