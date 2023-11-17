import { useState } from "react";
import { FooterPart } from "../components/common/Footer";
import { NavbarPart } from "../components/common/Navbar";
import { InfoPaslonPart } from "../components/votePageComp/InfoPaslonPart";
import { PiePart } from "../components/votePageComp/PiePart";
import { ReminderVote } from "../components/votePageComp/ReminderVote";
import { LoginModal } from "../components/loginComp/modals/LoginModal";
import { RegisterModal } from "../components/loginComp/modals/RegisterModal";

export const VotePage = () => {
  const [isModalLoginOpen, setisModalLoginOpen] = useState(false);
  const [isModalRegisterOpen, setisModalRegisterOpen] = useState(false);
  const toggleModalLogin = () => setisModalLoginOpen(!isModalLoginOpen);
  const toggleModalRegister = () =>
    setisModalRegisterOpen(!isModalRegisterOpen);
  const openRegisterModal = () => {
    toggleModalLogin();
    toggleModalRegister();
  };
  return (
    <div>
      <NavbarPart toggleModal={toggleModalLogin} />
      <PiePart />
      <InfoPaslonPart />
      <ReminderVote />
      <FooterPart />
      {isModalLoginOpen && (
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
      )}
    </div>
  );
};
