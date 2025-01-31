import { CardCourseProps } from "@/components/common/card/CardCourse";
import { keyOfCourseTopic } from "@/locales/type/listCourseTopic";

interface SpotLightCoursProps extends CardCourseProps {
  keyDescription : keyOfCourseTopic
}

export const spotlightCourseData: SpotLightCoursProps[] = [
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
    keyDescription: "javascript",
    numberOfLesson: 10,
    price: "20.000",
    title: "UI/UX course",
  },
] as const;
