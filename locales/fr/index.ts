import aboutCards from "./about/aboutCards";
import aboutHero from "./about/aboutHero";
import aboutInsructor from "./about/aboutInsructor";
import aboutWelcome from "./about/aboutWelcome";
import header from "./common/header";
import heroHome from "./home/heroHome";
import homeAbout from "./home/homeAbout";
import homeReason from "./home/homeReason";
import homeTestimonial from "./home/homeTestimonial";

export default {
  header,
  heroHome,
  homeReason,
  homeAbout,
  homeTestimonial,
  aboutHero,
  aboutWelcome,
  aboutCards,
  aboutInsructor,
  viewMore: "Voir plus",
} as const;
