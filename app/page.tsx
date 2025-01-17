import Ready from "@/components/common/section/Ready";
import Testimonial from "@/components/common/section/Testimonial";
import CourseHeader from "@/components/display/CourseHeader";
import About from "@/section/home/About";
import Contact from "@/section/home/Contact";
import Course from "@/section/home/Course";
import Dashboard from "@/section/home/Dashboard";
import Reason from "@/section/home/Reason";


export default function Home() {
  return (
    <>
      <Dashboard />
      <Reason />
      <About />
      <Ready />
      <Course />
      <Testimonial />
      <Contact />
      <CourseHeader />
    </>
  );
}
