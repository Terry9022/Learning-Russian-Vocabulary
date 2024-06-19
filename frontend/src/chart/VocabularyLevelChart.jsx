import { useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const VocabularyLevelChart = () => {
  const [showLevel1, setShowLevel1] = useState(true);
  const [showLevel2, setShowLevel2] = useState(true);
  const [showLevel3, setShowLevel3] = useState(true);
  const [showLevel4, setShowLevel4] = useState(true);
  const [showLevel5, setShowLevel5] = useState(true);
  const [showLevel6, setShowLevel6] = useState(true);

  const data = {
    labels: [" Difficulty Level "],
    datasets: [
      showLevel1 && {
        label: "Level 1",
        data: [60],
        backgroundColor: "rgba(230, 0, 0, 0.2)",
        borderColor: "#e60000",
        borderWidth: 1,
      },
      showLevel2 && {
        label: "Level 2",
        data: [50],
        backgroundColor: "rgba(230, 0, 0, 0.3)",
        borderColor: "#e60000",
        borderWidth: 1,
      },
      showLevel3 && {
        label: "Level 3",
        data: [40],
        backgroundColor: "rgba(230, 0, 0, 0.4)",
        borderColor: "#e60000",
        borderWidth: 1,
      },
      showLevel4 && {
        label: "Level 4",
        data: [30],
        backgroundColor: "rgba(230, 0, 0, 0.6)",
        borderColor: "#e60000",
        borderWidth: 1,
      },
      showLevel5 && {
        label: "Level 5",
        data: [20],
        backgroundColor: "rgba(230, 0, 0, 0.8)",
        borderColor: "#e60000",
        borderWidth: 1,
      },
      showLevel6 && {
        label: "Level 6",
        data: [10],
        backgroundColor: "#e60000",
        borderColor: "#e60000",
        borderWidth: 1,
      },
    ].filter(Boolean),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Vocabulary Words by Difficulty Level",
        font: {
          size: 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div className="flex justify-between">
      <div className="w-5/6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Bar data={data} options={options} />
        </div>
      </div>
      <div className="w-1/6 ml-4">
        <div className="bg-white p-4 rounded-lg shadow-md relative top-[70px]">
          <h3 className="text-lg font-bold mb-2">Filter Levels</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="level-1"
                checked={showLevel1}
                onChange={() => setShowLevel1(!showLevel1)}
                className="form-checkbox h-5 w-5 text-red-600"
              />
              <label htmlFor="level-1" className="ml-2 text-gray-700">
                Level 1
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="level-2"
                checked={showLevel2}
                onChange={() => setShowLevel2(!showLevel2)}
                className="form-checkbox h-5 w-5 text-red-600"
              />
              <label htmlFor="level-2" className="ml-2 text-gray-700">
                Level 2
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="level-3"
                checked={showLevel3}
                onChange={() => setShowLevel3(!showLevel3)}
                className="form-checkbox h-5 w-5 text-red-600"
              />
              <label htmlFor="level-3" className="ml-2 text-gray-700">
                Level 3
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="level-4"
                checked={showLevel4}
                onChange={() => setShowLevel4(!showLevel4)}
                className="form-checkbox h-5 w-5 text-red-600"
              />
              <label htmlFor="level-4" className="ml-2 text-gray-700">
                Level 4
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="level-5"
                checked={showLevel5}
                onChange={() => setShowLevel5(!showLevel5)}
                className="form-checkbox h-5 w-5 text-red-600"
              />
              <label htmlFor="level-5" className="ml-2 text-gray-700">
                Level 5
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="level-6"
                checked={showLevel6}
                onChange={() => setShowLevel6(!showLevel6)}
                className="form-checkbox h-5 w-5 text-red-600"
              />
              <label htmlFor="level-6" className="ml-2 text-gray-700">
                Level 6
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocabularyLevelChart;
