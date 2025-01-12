interface TestimonialProps {
    image: string;
    starNumber: number;
    description: string;
    userName: string;
}

const testimonialData: TestimonialProps[] = [
    {
        image: "/profil.png",
        starNumber: 5,
        description: "Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled to make type specimen book has survived. <br/> Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled make.",
        userName: "Tolotra.k"
    },
    {
        image: "/profil.png",
        starNumber: 4,
        description: "Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled to make type specimen book has survived. <br/> Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled make.",
        userName: "Tolotra.l"
    },
    {
        image: "/profil.png",
        starNumber: 5,
        description: "Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled to make type specimen book has survived. <br/> Lorem Ipsum has been the industry's standard dumy text since the when took and scrambled make.",
        userName: "Tolotra.m"
    },
]
export { testimonialData }