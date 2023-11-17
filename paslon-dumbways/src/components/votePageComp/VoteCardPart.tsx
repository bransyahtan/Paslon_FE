import React from "react";

interface CardProps {
  name: string;
  votePercentage: number;
}

const VoteCard: React.FC<CardProps> = ({ name, votePercentage }) => {
  return (
    <div className="bg-slate-900 rounded-lg shadow-md p-6 mb-8 text-white">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p>{votePercentage}%</p>
    </div>
  );
};

export const VoteCardPart: React.FC = () => {
  const voteCards = [
    { name: "Megatron Dragon", votePercentage: 45 },
    { name: "Gita Gutawa", votePercentage: 25 },
    { name: "Surya Garpit", votePercentage: 30 },
  ];

  const sortedVoteCards = voteCards.sort(
    (a, b) => b.votePercentage - a.votePercentage
  );

  return (
    <div className="w-96 my-10">
      {sortedVoteCards.map((card, index) => (
        <VoteCard
          key={index}
          name={card.name}
          votePercentage={card.votePercentage}
        />
      ))}
    </div>
  );
};
