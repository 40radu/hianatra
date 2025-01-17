import { CardsCourseProps } from "@/section/course/CardsCourse"

interface LinksCoursType {
    label : CardsCourseProps['filter'], 
    href : string
}

export const courseLinks : LinksCoursType[] = [
    {
        label : "Tous les cours",
        href : "/ui"
    },
    {
        label : "Collections",
        href : "/test"
    },
    {
        label : "Archives",
        href : "/test2"
    }
]