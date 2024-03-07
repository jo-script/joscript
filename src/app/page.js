import Image from "next/image";

import Nav from "./components/nav/nav";
import HomePage from "./components/home/homePage";
import Scenes from "./components/scenes/Scenes";
import Services from './components/servicess/services'
import Projects from "./components/projects/projects";
import TeamWork from "./components/team work/TeamWork";
import ShowImg from "./components/show-img/ShowImg";
import Footer from "./components/footer/Footer";

// font
import { Rubik} from "next/font/google";

import Roadmap from "./components/roadmap/page";

const almarai = Rubik({
  subsets:['arabic'],
  weight:'300'
})

export default function Home() {
  return (
    <div className={ `home w-full ${almarai.className}`} >
      <Nav />
      <HomePage />
      <ShowImg />
      <Services />
      <Scenes />
      <Projects />
      <Roadmap />
      <TeamWork />
      <Footer />
    </div>
  );
}
