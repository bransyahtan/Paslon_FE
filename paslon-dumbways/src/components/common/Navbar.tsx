import logo from "../../assets/logos/logo.png";

export const NavbarPart = () => {
  return (
    <>
      <div className="flex bg-black justify-center">
        <div className="flex items-center justify-between py-3 w-4/5">
          <div className="flex gap-4">
            <img src={logo} alt="Dumbways" className="h-10" />
            <h1 className="uppercase text-white text-2xl font-bold">
              Pemilu Presiden Dumbways.ID
            </h1>
          </div>
          <div className="flex gap-4 items-baseline">
            <p className="text-white">Partai</p>
            <span className="text-white">|</span>
            <p className="text-white">Paslon</p>
            <span className="text-white">|</span>
            <p className="text-white">Voting</p>
            <p className="bg-white rounded-full px-2 py-1">SB</p>
          </div>
        </div>
      </div>
    </>
  );
};