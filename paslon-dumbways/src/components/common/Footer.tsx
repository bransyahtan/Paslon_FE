import logo from "../../assets/logos/logo.png";

export const FooterPart = () => {
  return (
    <>
      <div className="bg-black w-full h-[291px]">
        <div className="flex gap-[42px] items-center py-16 pl-72">
          <img src={logo} alt="dumbwayslogo" className="h-[110px]" />
          <div className="flex text-white flex-col">
            <h1 className="font-bold text-2xl">DUMBWAYS.ID</h1>
            <p className="font-light text-base">
              Jl. Elang IV, Sawah Lama, Kec. Ciputat, <br /> Kota Tangerang
              Selatan, Banten 15413
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-center items-center text-white h-12">
          <p>Komisi Pemilihan Umum DumbWays.ID | Sultan Bransyah 2023</p>
        </div>
      </div>
    </>
  );
};
