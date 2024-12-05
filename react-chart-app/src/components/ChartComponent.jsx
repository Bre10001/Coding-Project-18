// Task 2: Create the Reusable ChartComponent


// Use useEffect and useRef to manage chart lifecycle (initialization, updates, and cleanup).
import React, { useEffect, useRef } from 'react'; 
import Chart from 'chart.js/auto';

// Implement a reusable chart component that accepts type, data, and options as props.
const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

// React hook to execute code when the component mounts, updates, or unmounts.
  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Checks if an existing Chart.js instance exists and destroys the existing chart to prevent overlapping or memory leaks.
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    // Creates a new Chart.js instance with the given context
    chartInstanceRef.current = new Chart(ctx, {
      type,
      data,
      options,
    });

    // Cleanup function runs when the component unmounts.
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };

  }, [type, data, options]);

  return <canvas ref={chartRef}></canvas>;

}

export default ChartComponent;
