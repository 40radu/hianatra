import aboutCards from "./about/aboutCards";
import aboutHero from "./about/aboutHero";
import aboutWelcome from "./about/aboutWelcome";
import header from "./common/header";
import ready from "./common/ready";
import heroHome from "./home/heroHome";
import homeCourse from "./home/homeCourse";
import homeAbout from "./home/homeAbout";
import homeReason from "./home/homeReason";
import contactCommon from "./common/contactCommon";
import homeTestimonial from "./home/homeTestimonial";
import aboutInstructor from "./about/aboutInstructor";
import footer from "./common/footer";
import aboutPartner from "./about/aboutPartner";
import courseHero from "./course/courseHero";
import courseHeader from "./course/courseHeader";
import courseCardStatic from "./course/courseCardStatic";

export default {
  header,
  heroHome,
  homeReason,
  viewMore: "Voir plus",
  readMore: "En savoir plus",
  moreAboutUs: "Nous connaitre",
  ready,
  homeCourse,
  homeAbout,
  homeTestimonial,
  aboutHero,
  aboutWelcome,
  contactCommon,
  aboutCards,
  aboutInstructor,
  aboutPartner,
  courseHero,
  courseHeader,
  courseCardStatic,
  footer,
} as const;
