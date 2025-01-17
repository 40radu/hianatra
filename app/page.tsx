import Ready from "@/components/common/section/Ready";
import Testimonial from "@/components/common/section/Testimonial";
import About from "@/section/home/About";
import ContactCommon from "@/section/home/ContactCommon";
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
      <ContactCommon />
    </>
  );
}
