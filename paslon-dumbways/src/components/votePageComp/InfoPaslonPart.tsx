import paslon3 from "../../assets/images/paslon3.jpg";
import { SlControlRewind, SlControlForward } from "react-icons/sl";

export const InfoPaslonPart = () => {
  return (
    <>
      <div className="bg-zinc-300">
        <h1 className="text-5xl font-bold text-center p-10">INFO PASLON</h1>
        <div className="flex justify-center items-center gap-8">
          <div className="bg-white text-4xl rounded-full p-3">
            <SlControlRewind />
          </div>
          <div className="w-[947px] h-[500px] bg-white flex justify-center items-center gap-4 mb-16">
            <div>
              <img
                src={paslon3}
                alt="Foto-Paslon"
                className="w-96 h-96 rounded-xl object-cover"
              />
            </div>
            <div className="flex flex-col gap-7">
              <div className="">
                <p className="font-bold text-2xl">Nomor Urut: 3</p>
                <h1 className="font-bold text-5xl">GITA GUTAWA</h1>
              </div>
              <div className="font-normal text-2xl">
                <h2>Visi-Misi</h2>
                <ul className="list-disc pl-10">
                  <li>Memindahkan Indonesia Ke Isekai</li>
                  <li>Melegalkan Judi Online</li>
                  <li>Subsidi Pembelian Ganja</li>
                </ul>
                <h2>Koalisi</h2>
                <ul className="list-disc pl-10">
                  <li>Koalisi Indonesia Tronjal-Tronjol Maha Asik</li>
                  <li>Sunda Empire</li>
                  <li>Partai Demokrasi Indonesia Perwibuan</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white text-4xl rounded-full p-3">
            <SlControlForward />
          </div>
        </div>
      </div>
    </>
  );
};
