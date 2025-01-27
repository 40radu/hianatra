
import { CardCourseProps } from '@/components/common/card/CardCourse';
export type listTab = "all" | "collections" | "archives"

export interface LinksCoursType {
    label : string, 
    href : listTab
}
 const courseLinksData : LinksCoursType[] = [
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

type ListCourseProps = {
    type : listTab,
    content : CardCourseProps[]
}[]

const courseListData : ListCourseProps = [
    {
        type : "all",
        content : [
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
                    },
                    {
                        topic : 'Vue js',
                        image : "/courses/javascript.png",
                        isFree : true,
                        numberOfStudent : 4,
                        description : 'this is a Vue js description',
                        numberOfLesson : 10,
                        price : '20.000',
                        title : 'Vue js course'
                    },
                    {
                        topic : 'react',
                        image : '/courses/html.png',
                        isFree : false,
                        numberOfStudent : 4,
                        description : 'this is a react description',
                        numberOfLesson : 10,
                        price : '20.000',
                        title : 'react course'
                    },
                    {
                        topic : 'sass',
                        image : '/courses/Css.png',
                        isFree : false,
                        numberOfStudent : 7,
                        description : 'this is a sass description',
                        numberOfLesson : 10,
                        price : '20.000',
                        title : 'sass course'
                    }
        ]
    },
    {
        type :  "archives",
        content : [
            {
                topic : 'html',
                image : '/courses/html.png',
                isFree : true,
                numberOfStudent : 4,
                description : 'this is a html description',
                numberOfLesson : 10,
                price : '20.000',
                title : 'HTML course'
            }
        ]
    },
    {
        type :  "collections",
        content : [
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
                isFree : true,
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
    }, 
]

export {courseLinksData, courseListData}