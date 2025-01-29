import aboutCards from "./about/aboutCards";
import aboutHero from "./about/aboutHero";
import aboutWelcome from "./about/aboutWelcome";
import header from "./common/header";
import heroHome from "./home/heroHome";
import homeAbout from "./home/homeAbout";
import homeReason from "./home/homeReason";
import homeTestimonial from "./home/homeTestimonial";
import ready from "./common/ready";
import homeCourse from "./home/homeCourse";
import contactCommon from "./common/contactCommon";

export default {
  header,
  heroHome,
  homeReason,
  viewMore: "View more",
  readMore: "Read more",
  moreAboutUs: "More about us",
  ready,
  homeCourse,
  homeAbout,
  homeTestimonial,
  aboutHero,
  aboutWelcome,
  contactCommon,
  aboutCards,
} as const;
