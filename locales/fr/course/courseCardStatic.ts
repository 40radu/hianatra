export default {
  body: {
    free: "Gratuit",
    paying: "Payante",
    student: "Etudiants",
    lesson: "Leçons",
  },
  hover: {
    student: "Etudiants",
    lesson: "Leçons",
    button: {
      seeMore: "Voir Plus",
      subsribe: "S'inscrire",
    },
  },
};

type ContentType = {
  title: string;
  description: string;
};

interface DataTest {
  type: string;
  content: ContentType[];
}

export const dataSimulation: DataTest[] = [
  {
    type: "all",
    content: [
      {
        title: "html",
        description: "html course descri",
      },
      {
        title: "css",
        description: "css course descri",
      },
      {
        title: "javascipt",
        description: "javascipt course descri",
      },
    ],
  },
  {
    type: "arichve",
    content: [
      {
        title: "html",
        description: "html course descri",
      },
    ],
  },
  {
    type: "collection",
    content: [
      {
        title: "html",
        description: "html course descri",
      },
    ],
  },
];
