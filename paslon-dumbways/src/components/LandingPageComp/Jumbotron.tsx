import imagesDU from "../../assets/images/imagesDU.png";
import kotak from "../../assets/images/kotak.png";
export const Jumbotron = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="rounded-3xl w-4/5 h-[35rem] mt-11 bg-gradient-to-r from-red-300 via-red-600 to-red-900 relative">
          <img
            src={imagesDU}
            alt="Dumbwaysimage"
            className="h-60 absolute top-0 left-0"
          />
          <div className="absolute bottom-8 left-8">
            <h1 className="text-white font-bold uppercase text-6xl">
              Selamat Datang
            </h1>
            <h2 className="uppercase text-white text-2xl font-bold ">
              PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR <br /> DIPILIH MELALUI JUDI
              ONLINE
            </h2>
          </div>
          <img
            src={kotak}
            alt="kotak KPU"
            className="absolute top-0 right-28 h-[31rem]"
          />
        </div>
      </div>
    </>
  );
};
