type Label = "instructor" | "program" | "amelioration"

interface AboutCardData { 
	label : Label
	image : string 
	title : `${Label}.title`
	firstDescription : `${Label}.firstDescription`
	secondDescription : `${Label}.secondDescription`
 }

const dataCardInfo: AboutCardData[] = [
	{
		label : "instructor",
		image: "/about/instructor.png",
		title: "instructor.title" ,
		firstDescription: "instructor.firstDescription" ,
		secondDescription: "instructor.secondDescription",
	},
	{
		label : "program",
		image: "/about/program.png",
		title: "program.title",
		firstDescription: "program.firstDescription" ,
		secondDescription:  "program.secondDescription" ,
	},
	{
		label : "amelioration",
		image: "/about/amelioration.png",
		title: "amelioration.title",
		firstDescription:"amelioration.firstDescription",
		secondDescription: "amelioration.secondDescription",
	},
]

export { dataCardInfo }