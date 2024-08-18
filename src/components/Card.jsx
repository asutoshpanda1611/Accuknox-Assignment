// Card.js
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Card = ({ title, data }) => {
  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="shadow-xl p-4 mr-4 sm:w-1/3 md:w-2/4 lg:w-1/3 rounded-2xl">
      <h1 className="mb-4">{title}</h1>
      <div className="relative w-30 h-30">
        <Doughnut
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default Card;
