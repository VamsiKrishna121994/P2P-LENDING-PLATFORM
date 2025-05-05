import React from 'react';
import BarChart from '../components/BarChart';

const ChartPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Financial Chart</h1>
      <BarChart />
    </div>
  );
};

export default ChartPage;