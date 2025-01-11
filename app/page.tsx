import About from "@/components/section/home/About";
import Dashboard from "@/components/section/home/Dashboard";
import Reason from "@/components/section/home/Reason";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Dashboard/>
      <Reason/>
      <About/>
    </>
  );
}
