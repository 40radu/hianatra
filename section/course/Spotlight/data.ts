import { CardCourseProps } from "@/components/common/card/CardCourse";

export const spotlightCourseData: CardCourseProps[] = [
  {
    topic: "html",
    image: "/courses/html.png",
    isFree: true,
    numberOfStudent: 4,
    description: "card1",
    numberOfLesson: 10,
    price: "20.000",
    title: "HTML course",
  },
  {
    topic: "css",
    image: "/courses/Css.png",
    isFree: false,
    numberOfStudent: 6,
    description: "card2",
    numberOfLesson: 10,
    price: "20.000",
    title: "CSS course",
  },
  {
    topic: "ui/ux",
    image: "/courses/ui-ux.png",
    isFree: true,
    numberOfStudent: 4,
    description: "card3",
    numberOfLesson: 10,
    price: "20.000",
    title: "UI/UX course",
  },
];
