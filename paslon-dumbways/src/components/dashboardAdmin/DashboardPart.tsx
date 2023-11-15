import paslon1 from "../../assets/images/paslon1.jpg";
import paslon2 from "../../assets/images/paslon2.jpg";
import paslon3 from "../../assets/images/paslon3.jpg";

interface CardProps {
  image: string;
  name: string;
  akumulasi: string;
  jumlahVotes: string;
}

const Card: React.FC<CardProps> = ({ image, name, akumulasi, jumlahVotes }) => {
  return (
    <div className="bg-slate-800 p-4 rounded-md shadow-md w-96 h-96">
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover mb-4 rounded-md"
      />

      <h2 className="text-lg font-semibold text-white">{name}</h2>
      <p className="text-white">Akumulasi: {akumulasi}</p>
      <p className="text-white">Jumlah Votes: {jumlahVotes}</p>
    </div>
  );
};

export const DashboardPart = () => {
  return (
    <>
      <div>
        <h1 className="mt-10 font-bold text-5xl text-center text-slate-800">
          DASHBOARD
        </h1>
      </div>
      <div>
        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center text-4xl font-bold bg-slate-800 text-white mx-[170px] rounded-full">
              1
            </div>
            <div className="text-center text-4xl font-bold bg-slate-800 text-white mx-[170px] rounded-full">
              2
            </div>
            <div className="text-center text-4xl font-bold bg-slate-800 text-white mx-[170px] rounded-full">
              3
            </div>
            <Card
              image={paslon1}
              name="Sultan Bransyah"
              akumulasi="30%"
              jumlahVotes="30.000"
            />
            <Card
              image={paslon2}
              name="Bransyah Sultan"
              akumulasi="40%"
              jumlahVotes="40.000"
            />
            <Card
              image={paslon3}
              name="Bransyah Tan"
              akumulasi="30%"
              jumlahVotes="40.000"
            />
          </div>
        </div>
      </div>
    </>
  );
};
