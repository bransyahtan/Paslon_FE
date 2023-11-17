import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

export const PieGraph: React.FC = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["Megatron Dragon", "Gita Gutawa", "Surya Garpit"],
    datasets: [
      {
        data: [45, 25, 30],
        backgroundColor: ["red", "green", "yellow"],
        borderColor: ["red", "green", "yellow"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: "400px" }}>
      <Pie data={data} />
    </div>
  );
};
