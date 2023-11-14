import { Link } from "react-router-dom";
import { newsType } from "../../types/NewsType";

export const SmallCard: React.FC<newsType> = (props) => {
  return (
    <>
      <Link to="/detail-page">
        <div className="w-full h-[422px] bg-white uppercase">
          <img
            src={props.image}
            alt="rapat"
            className="h-[200px] object-cover w-full"
          />
          <div className="p-3">
            <p className="bg-red-600 font-bold inline-block p-3.5 text-xl rounded-xl text-white">
              {props.date}
            </p>
            <div className="w-4/5">
              <h1 className="font-bold text-4xl mt-4 text-black ">
                {props.title}
              </h1>
              <p className="text-3xl font-normal text-black">{props.author}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
