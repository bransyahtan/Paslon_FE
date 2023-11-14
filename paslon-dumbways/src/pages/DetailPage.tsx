import { DetailPagePart } from "../components/DetailPageComp/DetailPagePart";
import { FooterPart } from "../components/common/Footer";
import { NavbarPart } from "../components/common/Navbar";

export const DetailPage = () => {
  return (
    <div className="bg-zinc-300">
      <NavbarPart />
      <DetailPagePart />
      <FooterPart />
    </div>
  );
};
