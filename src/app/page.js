import Image from "next/image";
import Nav from "./components/nav/nav";
import HomePage from "./components/home/homePage";
import Services from './components/servicess/services'
import { Rubik} from "next/font/google";
import Projects from "./components/projects/projects";
const almarai = Rubik({
  subsets:['arabic'],
  weight:'300'
})


export default function Home() {
  return (
    <div className={`w-full ${almarai.className}`} >
      <Nav />
      <HomePage />
      <Services />
      <Projects />

    </div>
  );
}
