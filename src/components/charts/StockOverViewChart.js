import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];

const StockOverViewChart = () => {
  const [chartData, setChartData] = useState({
    series: [{ data: [] }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        events: {
          click: function (chart, w, e) {
          },
        },
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [],
        labels: {
          style: {
            colors: colors,
            fontSize: '12px',
          },
        },
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/product');
        const categories = response.data.products.map((product) => product.categories);
        const categoryCount = {};
       
        categories.forEach((category) => {
          categoryCount[category] = (categoryCount[category] || 0) + 1;
        });
       
        setChartData({
          ...chartData,
          series: [{ data: Object.values(categoryCount) }],
          options: {
            ...chartData.options,
            xaxis: {
              categories: Object.keys(categoryCount),
              labels: {
                style: {
                  colors: colors,
                  fontSize: '12px',
                },
              },
            },
          },
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={200} />
    </div>
  );
};

export default StockOverViewChart;
