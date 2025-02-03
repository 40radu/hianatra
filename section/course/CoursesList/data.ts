import { CardCourseProps } from "@/components/common/card/CardCourse";
import { keyOfCourseTopic } from "@/locales/type/listCourseTopic";
export type listTabCourse = "all" | "collection" | "archive";

export interface LinksCoursType {
  label: listTabCourse;
  href: listTabCourse;
}

interface keyCardProps extends CardCourseProps {
  keyDescription: keyOfCourseTopic;
}
const courseLinksData: LinksCoursType[] = [
  {
    label: "all",
    href: "all",
  },
  {
    label: "collection",
    href: "collection",
  },
  {
    label: "archive",
    href: "archive",
  },
];

const allCourseData: keyCardProps[] = [
  {
    topic: "html",
    image: "/courses/html.png",
    isFree: true,
    numberOfStudent: 4,
    keyDescription: "html",
    numberOfLesson: 10,
    price: "20.000",
    title: "HTML course",
  },
  {
    topic: "css",
    image: "/courses/javascript.png",
    isFree: false,
    numberOfStudent: 6,
    keyDescription: "css",
    numberOfLesson: 10,
    price: "20.000",
    title: "CSS course",
  },
  {
    topic: "ui/ux",
    image: "/courses/ui-ux.png",
    isFree: true,
    numberOfStudent: 4,
    keyDescription: "ux/ui",
    numberOfLesson: 10,
    price: "20.000",
    title: "UI/UX course",
  },
  {
    topic: "Vue js",
    image: "/courses/javascript.png",
    isFree: true,
    numberOfStudent: 4,
    keyDescription: "css",
    numberOfLesson: 10,
    price: "20.000",
    title: "Vue js course",
  },
  {
    topic: "react",
    image: "/courses/html.png",
    isFree: false,
    numberOfStudent: 4,
    keyDescription: "html",
    numberOfLesson: 10,
    price: "20.000",
    title: "react course",
  },
  {
    topic: "sass",
    image: "/courses/javascript.png",
    isFree: false,
    numberOfStudent: 7,
    keyDescription: "css",
    numberOfLesson: 10,
    price: "20.000",
    title: "sass course",
  },
];

const archiveData: keyCardProps[] = [
  {
    topic: "html",
    image: "/courses/html.png",
    isFree: true,
    numberOfStudent: 4,
    keyDescription: "html",
    numberOfLesson: 10,
    price: "20.000",
    title: "HTML course",
  },
];

const collectionData: keyCardProps[] = [
  {
    topic: "html",
    image: "/courses/html.png",
    isFree: true,
    numberOfStudent: 4,
    keyDescription: "css",
    numberOfLesson: 10,
    price: "20.000",
    title: "HTML course",
  },
  {
    topic: "css",
    image: "/courses/Css.png",
    isFree: true,
    numberOfStudent: 6,
    keyDescription: "javascript",
    numberOfLesson: 10,
    price: "20.000",
    title: "CSS course",
  },
  {
    topic: "ui/ux",
    image: "/courses/ui-ux.png",
    isFree: true,
    numberOfStudent: 4,
    keyDescription: "html",
    numberOfLesson: 10,
    price: "20.000",
    title: "UI/UX course",
  },
];

export { allCourseData, archiveData, collectionData, courseLinksData };
