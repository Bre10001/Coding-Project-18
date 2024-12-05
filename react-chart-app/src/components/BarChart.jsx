// Task 3: Implement Specific Chart Components (Bar Chart)

import React from "react";
import ChartComponent from "./ChartComponent.jsx";

//  Functional component to render a bar chart.
const BarChart = ({ data }) => {
    const barChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Sales',
          data: data.sales,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    const barChartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

    return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
};

export default BarChart;

