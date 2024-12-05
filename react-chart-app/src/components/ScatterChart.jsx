// Task 3: Implement Specific Chart Components (Line Chart)

import React from "react";
import ChartComponent from "./ChartComponent.jsx";

// Functional component to render a scatter chart
const ScatterChart = ({ data }) => {
  const scatterChartData = {
    datasets: [
      {
        label: "Expenses vs. Profits",
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
        })),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const scatterChartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Expenses",
        },
      },
      y: {
        title: {
          display: true,
          text: "Profits",
        },
      },
    },
  };

  return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions} />;
};

export default ScatterChart;
