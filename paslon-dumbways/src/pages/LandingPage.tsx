// import { useState } from "react";
import { Jumbotron } from "../components/LandingPageComp/Jumbotron";
import { News } from "../components/LandingPageComp/News";
import { Reminder } from "../components/LandingPageComp/Reminder";
import { FooterPart } from "../components/common/Footer";
import { NavbarPart } from "../components/common/Navbar";
// import { LoginModal } from "../components/loginComp/modals/LoginModal";
// import { RegisterModal } from "../components/loginComp/modals/RegisterModal";

export default function App() {
  // const [isModalLoginOpen, setisModalLoginOpen] = useState(false);
  // const [isModalRegisterOpen, setisModalRegisterOpen] = useState(false);
  // const toggleModalLogin = () => setisModalLoginOpen(!isModalLoginOpen);
  // const toggleModalRegister = () =>
  //   setisModalRegisterOpen(!isModalRegisterOpen);

  // const openRegisterModal = () => {
  //   toggleModalRegister();
  //   toggleModalLogin();
  // };

  return (
    <div className="bg-zinc-300">
      <NavbarPart />
      <Jumbotron />
      <News />
      <Reminder />
      <FooterPart />
      {/* {isModalLoginOpen && (
        <LoginModal
          openModalRegister={openRegisterModal}
          toggleModalLogin={toggleModalLogin}
        />
      )}
      {isModalRegisterOpen && (
        <RegisterModal
          openModalLogin={openRegisterModal}
          toggleModalRegister={toggleModalRegister}
        />
      )} */}
    </div>
  );
}
