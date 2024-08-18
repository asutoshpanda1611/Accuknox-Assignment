import React from 'react';
import { TbChartHistogram } from "react-icons/tb";

const NoGraph = () => {
  return (
    <div className="shadow-xl rounded-2xl lg:w-1/3 h-60 flex flex-col justify-between p-4">
      <h1 className="text-left mb-2">Top 5 Namespace Specific Alerts</h1>
      <div className="flex justify-center items-center flex-grow">
        <TbChartHistogram size={96} />
      </div>
    </div>
  );
};

export default NoGraph;
