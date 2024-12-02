import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Donut = ({ data }) => {
  const chartData = {
    labels: ['COGS', 'Operations', 'Net Profit'], // Labels for segments (e.g., profit, expenses)
    datasets: [
      {
        label: "Profit Margin",
        data: [20, 13, ], // Array of values for the segments
        backgroundColor: ["#EC5800", "#2C2B2B", "#"], // Different colors for each segment
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false, // Disable tooltips to hide segment values on hover
      },
      legend: {
        display: false, // Hide the legend
      },
    },
    elements: {
      arc: {
        borderWidth: 0, // Remove the border of the segments
      },
    },
  };

  return <Doughnut data={chartData} options={options}  />;
};

export default Donut;
