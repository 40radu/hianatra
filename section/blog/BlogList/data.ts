import { BlogCardProps } from "@/components/common/card/CardBlog";
import { KeyOfBlogTopic } from "@/locales/type/listCourseTopic";
export type listTabBlog = "all" | "collection" | "archive";

export interface LinksBlogType {
  label: listTabBlog;
  href: listTabBlog;
}

interface keyCardProps extends BlogCardProps {
  keyDescription: KeyOfBlogTopic;
}
const blogLinksData: LinksBlogType[] = [
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

const allBlogData: keyCardProps[] = [
  {
    topic: "html",
    image: "/courses/html.png",
    isFree: true,
    numberOfStudent: 4,
    keyDescription: "html",
    numberOfLesson: 10,
    price: "20.000",
    title: "HTML Blog",
  },
  {
    topic: "css",
    image: "/courses/Css.png",
    isFree: false,
    numberOfStudent: 6,
    keyDescription: "css",
    numberOfLesson: 10,
    price: "20.000",
    title: "CSS Blog",
  },
  {
    topic: "ui/ux",
    image: "/courses/ui-ux.png",
    isFree: true,
    numberOfStudent: 4,
    keyDescription: "ux/ui",
    numberOfLesson: 10,
    price: "20.000",
    title: "UI/UX Blog",
  },
  {
    topic: "Vue js",
    image: "/courses/javascript.png",
    isFree: true,
    numberOfStudent: 4,
    keyDescription: "css",
    numberOfLesson: 10,
    price: "20.000",
    title: "Vue js Blog",
  },
  {
    topic: "react",
    image: "/courses/html.png",
    isFree: false,
    numberOfStudent: 4,
    keyDescription: "html",
    numberOfLesson: 10,
    price: "20.000",
    title: "react Blog",
  },
  {
    topic: "sass",
    image: "/courses/Css.png",
    isFree: false,
    numberOfStudent: 7,
    keyDescription: "css",
    numberOfLesson: 10,
    price: "20.000",
    title: "sass Blog",
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
    title: "HTML Blog",
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
    title: "HTML Blog",
  },
  {
    topic: "css",
    image: "/courses/Css.png",
    isFree: true,
    numberOfStudent: 6,
    keyDescription: "javascript",
    numberOfLesson: 10,
    price: "20.000",
    title: "CSS Blog",
  },
  {
    topic: "ui/ux",
    image: "/courses/ui-ux.png",
    isFree: true,
    numberOfStudent: 4,
    keyDescription: "html",
    numberOfLesson: 10,
    price: "20.000",
    title: "UI/UX Blog",
  },
];

export { allBlogData, archiveData, collectionData, blogLinksData };
