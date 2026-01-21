import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoalsChart = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <button onClick={() => navigate(-1)} className="px-3 py-1 bg-gray-100 rounded">Back</button>
        </div>

        <h2 className="text-2xl font-bold mb-4">Goals Chart Organizer</h2>

        <div className="border rounded h-[80vh] overflow-hidden">
          <iframe src="/goals_chart.pdf" title="Goals Chart Organizer" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default GoalsChart;
