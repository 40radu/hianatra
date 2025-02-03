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
import aboutInstructor from "./about/aboutInstructor";
import footer from "./common/footer";
import aboutPartner from "./about/aboutPartner";
import courseHero from "./course/courseHero";
import courseCard from "./course/courseCard";
import blogCard from "./blog/blogCard";
import courseSpotlight from "./course/courseSpotlight";
import courseList from "./course/courseList";
import contactHero from "./contact/contactHero";
import contactUs from "./contact/contactUs";

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
  aboutInstructor,
  aboutPartner,
  courseHero,
  courseCard,
  footer,
  blogCard,
  courseSpotlight,
  courseList,
  contactHero,
  contactUs,
} as const;
