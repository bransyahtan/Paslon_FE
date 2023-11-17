import { VoteModal } from "../loginComp/modals/VoteModal";
import { PieGraph } from "./PieGraph";
import { VoteCardPart } from "./VoteCardPart";
import { useState } from "react";

export const PiePart = () => {
  const [isVoteModalOpen, setIsVoteModalOpen] = useState(false);

  const handleVoteButtonClick = () => {
    setIsVoteModalOpen(true);
  };
  const handleVoteModalClose = () => {
    setIsVoteModalOpen(false);
  };
  return (
    <>
      <div className="flex w-full h-[850px] bg-white flex-col">
        <h1 className="uppercase font-bold text-5xl text-center my-14">
          info pemilu terupdate
        </h1>
        <div className="flex justify-center">
          <div>
            <p className="text-center text-4xl font-bold">Hasil:</p>
            <PieGraph />
          </div>
          <div>
            <VoteCardPart />
            <button
              type="submit"
              onClick={handleVoteButtonClick}
              className="w-80 h-16 bg-slate-700 text-white text-2xl font-bold py-2 px-4 rounded-md hover:bg-slate-900 uppercase"
            >
              Masukkan Suaramu
            </button>
          </div>
        </div>
        <VoteModal isOpen={isVoteModalOpen} onClose={handleVoteModalClose} />
      </div>
    </>
  );
};
