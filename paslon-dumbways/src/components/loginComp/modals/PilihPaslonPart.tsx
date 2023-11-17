import paslon1 from "../../../assets/images/paslon1.jpg";
import paslon2 from "../../../assets/images/paslon2.jpg";
import paslon3 from "../../../assets/images/paslon3.jpg";

interface CardProps {
  image: string;
  name: string;
  visi: string;
  partaiPengusung: string[];
}

const Card: React.FC<CardProps> = ({ image, name, visi, partaiPengusung }) => {
  return (
    <div className="bg-slate-800 p-4 rounded-md shadow-md w-96 h-96">
      <img
        src={image}
        alt={name}
        className="w-full h-50 object-cover mb-4 rounded-md"
      />

      <h2 className="text-2xl font-bold text-white ">{name}</h2>
      <p className="text-white text-xl">{visi}</p>
      <ul className="text-white list-disc">
        <p className="font-bold">Partai Pengusung:</p>
        {partaiPengusung.map((partai, index) => (
          <li className="ml-7" key={index}>
            {partai}
          </li>
        ))}
      </ul>
    </div>
  );
};

import React from "react";

export const PilihPaslonPart = () => {
  return (
    <>
      <div>
        <h1 className="mt-5 font-bold text-5xl text-center text-slate-800 uppercase">
          Masukkan Pilihan Mu
        </h1>
      </div>
      <div>
        <div className="flex justify-center mt-10">
          <div className="flex gap-4">
            <Card
              image={paslon1}
              name="Sultan Bransyah"
              visi="30%"
              partaiPengusung={[
                "Partai Arah Kiri",
                "Partai Pantai Selatan",
                "Partai Jakarta Selatan",
              ]}
            />
            <Card
              image={paslon2}
              name="Bransyah Sultan"
              visi="40%"
              partaiPengusung={[
                "Partai Makanan Kucing",
                "Partai Whiskas",
                "Partai Selamat Pagi",
              ]}
            />
            <Card
              image={paslon3}
              name="Bransyah Tan"
              visi="30%"
              partaiPengusung={[
                "Partai Jalan Surabaya",
                "Partai Gunung Kidul",
                "Partai Cakra Dunia",
              ]}
            />
          </div>
        </div>
        <div className="flex justify-center gap-5 mt-9">
          <button
            type="submit"
            className="w-96 h-16 border-slate-700 border-4 bg-white text-slate-700 text-2xl font-bold py-2 px-4 rounded-md hover:bg-slate-900 uppercase"
          >
            RESET
          </button>
          <button
            type="submit"
            className="w-96 h-16 bg-slate-700 text-white text-2xl font-bold py-2 px-4 rounded-md hover:bg-slate-900 uppercase"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};
