import Ready from "@/components/common/section/Ready";
import About from "@/components/section/home/About";
import Course from "@/components/section/home/Course";
import Dashboard from "@/components/section/home/Dashboard";
import Reason from "@/components/section/home/Reason";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Dashboard/>
      <Reason/>
      <About/>
      <Ready/>
      <Course/>
    </>
  );
}
