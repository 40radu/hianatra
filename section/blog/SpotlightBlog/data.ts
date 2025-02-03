import { BlogCardProps } from "@/components/common/card/CardBlog";
import { KeyOfBlogTopic } from "@/locales/type/listCourseTopic";

interface SpotLightBlogProps extends BlogCardProps {
  keyDescription: KeyOfBlogTopic;
}
export const spotlightBlogData: SpotLightBlogProps[] = [
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
    image: "/courses/Css.png",
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
];
