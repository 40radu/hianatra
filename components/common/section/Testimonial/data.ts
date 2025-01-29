interface CardTestimonialProps { 
	image : string
	starNumber : number
	description : "descriOne" | "descriTwo" | "descriThree"
	userName : string
 }

const cardTestimonialData: CardTestimonialProps[] = [
    {
        image: "/profil.png",
        starNumber: 5,
        description: "descriOne",
        userName: "Tolotra.k"
    },
    {
        image: "/profil.png",
        starNumber: 4,
        description: "descriTwo" ,
        userName: "Tolotra.l"
    },
    {
        image: "/profil.png",
        starNumber: 5,
        description: "descriThree" ,
        userName: "Tolotra.m"
    },
]
export { cardTestimonialData }