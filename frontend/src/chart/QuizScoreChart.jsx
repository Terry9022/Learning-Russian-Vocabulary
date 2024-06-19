import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { DateTime } from "luxon";
import { Chart } from "chart.js";
import "chartjs-adapter-luxon";

Chart.register({
  id: "luxon",
  adapter: {
    date: DateTime,
  },
});

const QuizScoreChart = () => {
  const data = {
    labels: [
      "2024-06-01",
      "2024-06-03",
      "2024-06-06",
      "2024-06-10",
      "2024-06-15",
      "2024-06-18",
      "2024-06-21",
      "2024-06-24",
      "2024-06-27",
      "2024-06-30",
    ],
    datasets: [
      {
        label: "Quiz Score",
        data: [80, 75, 70, 72, 78, 85, 90, 92, 95, 98],
        backgroundColor: "rgba(230, 0, 0, 0.2)",
        borderColor: "#e60000",
        borderWidth: 2,
        pointBackgroundColor: "#e60000",
        pointBorderColor: "#fff",
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Quiz Score Progress",
        font: {
          size: 20,
        },
      },
      tooltip: {
        callbacks: {
          title: (context) => {
            const date = context[0].label;
            return date.slice(0, 12);
          },
          label: (context) => `Score: ${context.parsed.y}%`,
        },
      },
    },
    scales: {
      x: {
        type: "time",

        time: {
          unit: "day",
          adapter: "luxon",
          displayFormats: {
            day: "MMM d",
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
          callback: (value) => `${value}%`,
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Line data={data} options={options} />
    </div>
  );
};

export default QuizScoreChart;
