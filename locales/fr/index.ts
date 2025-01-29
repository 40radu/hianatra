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
} as const;
