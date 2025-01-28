import { BlogCourseProps } from "@/components/common/card/CardBlog";

export const spotlightBlogData : BlogCourseProps[] = [
    {
        topic : 'html',
        image : '/courses/html.png',
        isFree : true,
        numberOfStudent : 4,
        description : 'this is a html description',
        numberOfLesson : 10,
        price : '20.000',
        title : 'HTML course'
    },
    {
        topic : 'css',
        image : '/courses/Css.png',
        isFree : false,
        numberOfStudent : 6,
        description : 'this is a css description',
        numberOfLesson : 10,
        price : '20.000',
        title : 'CSS course'
    },
    {
        topic : 'ui/ux',
        image : '/courses/ui-ux.png',
        isFree : true,
        numberOfStudent : 4,
        description : 'this is a ui/ux description',
        numberOfLesson : 10,
        price : '20.000',
        title : 'UI/UX course'
    }
]