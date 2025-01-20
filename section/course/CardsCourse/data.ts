import { CardsCourseProps } from '.';
import { courseLinks } from './../../../components/display/CourseHeader/data';
import { CardCourseProps } from '@/components/common/card/CardCourse';

type CourseDataType = {
    type : CardsCourseProps['filter'],
    content : CardCourseProps[]
}[]

export const courseData : CourseDataType = [
    {
        type : "Tous les cours",
        content : [
                    {
                        topic : 'html',
                        image : '/course/html',
                        isFree : true,
                        numberOfStudent : 4,
                        description : 'this is a html description',
                        numberOfLesson : 10,
                        price : '20 000',
                        title : 'HTML course'
                    },
                    {
                        topic : 'css',
                        image : '/course/html',
                        isFree : true,
                        numberOfStudent : 6,
                        description : 'this is a css description',
                        numberOfLesson : 10,
                        price : '20 000',
                        title : 'CSS course'
                    },
                    {
                        topic : 'ui/ux',
                        image : '/course/html',
                        isFree : true,
                        numberOfStudent : 4,
                        description : 'this is a ui/ux description',
                        numberOfLesson : 10,
                        price : '20 000',
                        title : 'UI/UX course'
                    },
                    {
                        topic : 'Vue js',
                        image : '/course/html',
                        isFree : true,
                        numberOfStudent : 4,
                        description : 'this is a Vue js description',
                        numberOfLesson : 10,
                        price : '20 000',
                        title : 'Vue js course'
                    },
                    {
                        topic : 'react',
                        image : '/course/html',
                        isFree : false,
                        numberOfStudent : 4,
                        description : 'this is a react description',
                        numberOfLesson : 10,
                        price : '20 000',
                        title : 'react course'
                    },
                    {
                        topic : 'sass',
                        image : '/course/html',
                        isFree : false,
                        numberOfStudent : 7,
                        description : 'this is a sass description',
                        numberOfLesson : 10,
                        price : '20 000',
                        title : 'sass course'
                    },
                    {
                        topic : 'javascripte',
                        image : '/course/html',
                        isFree : true,
                        numberOfStudent : 5,
                        description : 'this is a javascripte description',
                        numberOfLesson : 10,
                        price : '20 000',
                        title : 'javascripte course'
                    },
                    {
                        topic : 'Next',
                        image : '/course/html',
                        isFree : false,
                        numberOfStudent : 6,
                        description : 'this is a Next description',
                        numberOfLesson : 10,
                        price : '20 000',
                        title : 'Next course'
                    },
                    {
                        topic : 'Tailwind',
                        image : '/course/html',
                        isFree : false,
                        numberOfStudent : 8,
                        description : 'this is a Tailwind description',
                        numberOfLesson : 10,
                        price : '20 000',
                        title : 'Tailwind course'
                    },
                    {
                        topic : 'Nuxt',
                        image : '/course/html',
                        isFree : true,
                        numberOfStudent : 5,
                        description : 'this is a Nuxt description',
                        numberOfLesson : 10,
                        price : '20 000',
                        title : 'Nuxt course'
                    }
        ]
    },
    {
        type :  "Archives",
        content : [
            {
                topic : 'html',
                image : '/course/html',
                isFree : true,
                numberOfStudent : 4,
                description : 'this is a html description',
                numberOfLesson : 10,
                price : '20 000',
                title : 'HTML course'
            },
            {
                topic : 'css',
                image : '/course/html',
                isFree : true,
                numberOfStudent : 6,
                description : 'this is a css description',
                numberOfLesson : 10,
                price : '20 000',
                title : 'CSS course'
            },
            {
                topic : 'ui/ux',
                image : '/course/html',
                isFree : true,
                numberOfStudent : 4,
                description : 'this is a ui/ux description',
                numberOfLesson : 10,
                price : '20 000',
                title : 'UI/UX course'
            }
        ]
    },
    {
        type :  "Collections",
        content : [
            {
                topic : 'html',
                image : '/course/html',
                isFree : true,
                numberOfStudent : 4,
                description : 'this is a html description',
                numberOfLesson : 10,
                price : '20 000',
                title : 'HTML course'
            },
            {
                topic : 'css',
                image : '/course/html',
                isFree : true,
                numberOfStudent : 6,
                description : 'this is a css description',
                numberOfLesson : 10,
                price : '20 000',
                title : 'CSS course'
            },
            {
                topic : 'ui/ux',
                image : '/course/html',
                isFree : true,
                numberOfStudent : 4,
                description : 'this is a ui/ux description',
                numberOfLesson : 10,
                price : '20 000',
                title : 'UI/UX course'
            },
            {
                topic : 'Vue js',
                image : '/course/html',
                isFree : true,
                numberOfStudent : 4,
                description : 'this is a Vue js description',
                numberOfLesson : 10,
                price : '20 000',
                title : 'Vue js course'
            },
            {
                topic : 'react',
                image : '/course/html',
                isFree : false,
                numberOfStudent : 4,
                description : 'this is a react description',
                numberOfLesson : 10,
                price : '20 000',
                title : 'react course'
            },
            {
                topic : 'sass',
                image : '/course/html',
                isFree : false,
                numberOfStudent : 7,
                description : 'this is a sass description',
                numberOfLesson : 10,
                price : '20 000',
                title : 'sass course'
            },
            {
                topic : 'javascripte',
                image : '/course/html',
                isFree : true,
                numberOfStudent : 5,
                description : 'this is a javascripte description',
                numberOfLesson : 10,
                price : '20 000',
                title : 'javascripte course'
            },
        ]
    }, 
]