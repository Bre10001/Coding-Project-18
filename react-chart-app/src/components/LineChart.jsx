// Task 3: Implement Specific Chart Components (Line Chart)

import React from "react";
import ChartComponent from "./ChartComponent.jsx";

//  Functional component to render a bar chart.
const LineChart = ({ data }) => {
    const lineChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Profits',
          data: data.profits,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    const lineChartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

    return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />;
};

export default LineChart;
