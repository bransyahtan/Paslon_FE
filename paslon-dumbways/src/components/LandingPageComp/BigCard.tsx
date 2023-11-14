import { newsType } from "../../types/NewsType";
import { Link } from "react-router-dom";

export const BigCard: React.FC<newsType> = (props) => {
  return (
    <>
      <Link to="/detail-page">
        <div className="w-full h-[422px] relative uppercase">
          <img
            src={props.image}
            alt="rapat KPU"
            className="h-[422px] w-full object-cover"
          />

          <div className="w-full bg-gradient-to-t from-black to-transparent h-[422px] absolute bottom-0" />

          <div className="text-white absolute bottom-3 left-3 font-bold">
            <p className="bg-red-600 font-bold inline-block p-3.5 text-xl rounded-xl">
              {props.date}
            </p>
            <h1 className="font-bold text-4xl mt-4">{props.title}</h1>
            <p className="text-3xl font-normal">{props.author}</p>
          </div>
        </div>
      </Link>
    </>
  );
};
