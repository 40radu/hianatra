import Ready from "@/components/common/section/Ready";
import Testimonial from "@/components/common/section/Testimonial";
import About from "@/components/section/home/About";
import Contact from "@/components/section/home/Contact";
import Course from "@/components/section/home/Course";
import Dashboard from "@/components/section/home/Dashboard";
import Reason from "@/components/section/home/Reason";

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
    </>
  );
}
