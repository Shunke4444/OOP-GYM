import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registering necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CarbsLineChart = () => {
  const data = {
    labels: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM'], // Time slots for the day
    datasets: [
      {
        label: 'Carbohydrates Taken (g)', // Label for the dataset
        data: [45, 55, 60, 40, 70, 90, 100], // Example data: carbs consumed at each time slot (in grams)
        borderColor: '#FFB74D', // Line color
        backgroundColor: 'rgba(255, 183, 77, 0.2)', // Background color under the line (optional)
        fill: true, // Fill the area under the line
        tension: 0.4, // Smoothness of the line
        pointRadius: 5, // Size of the data points
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          title: (tooltipItems) => `Carbs Taken: ${tooltipItems[0].raw}g`, // Custom tooltip title
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time of Day',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Carbohydrates (grams)',
        },
      },
    },
  };

  return (
    <div className="w-full ">
      <Line data={data} options={options} />
    </div>
  );
};

export default CarbsLineChart;
