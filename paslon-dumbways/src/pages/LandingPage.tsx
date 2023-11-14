import { Jumbotron } from "../components/LandingPageComp/Jumbotron";
import { News } from "../components/LandingPageComp/News";
import { Reminder } from "../components/LandingPageComp/Reminder";
import { FooterPart } from "../components/common/Footer";
import { NavbarPart } from "../components/common/Navbar";

export default function App() {
  return (
    <div className="bg-zinc-300">
      <NavbarPart />
      <Jumbotron />
      <News />
      <Reminder />
      <FooterPart />
    </div>
  );
}
