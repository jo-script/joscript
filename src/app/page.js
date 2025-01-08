import Image from "next/image";
import "../../public/Frame.svg"
import Header from "./components/header";
import Courses from "./components/courses";
import Catalog from "./components/catalog";
import Scenes from "./components/scenes";
import Projects from "./components/projects";

// font
import { Rubik } from "next/font/google";

const almarai = Rubik({
  subsets: ['arabic'],
  weight: '300'
})

export default function Home() {
  return (
    <div className={`home w-full flex flex-col gap-20 pt-20 px-[5%] relative ${almarai.className}`} >
     
      <Header />
      <Catalog />
      <Projects />
      <Courses />
      <Scenes />
      <br/>
      
    </div>
  );
}
