import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Wykres temperatur na Teneryfie",
    },
  },
};

export function VerticalBarChart({ weathers }) {
  const datas = weathers.map((item) => ({
    date: item.timestamp.slice(4, 15),
    min_temp: item.min_temp,
    max_temp: item.max_temp,
  }));

  const labelsSet = [...new Set(datas.map((x) => x.date))];
  // TODO zmiana ilości wyników
  const labels = labelsSet.slice(labelsSet.length - 7, labelsSet.length);
  const chartWeathers = [];

  labels.forEach((label) => {
    const pairedObj = datas.find((data) => data.date === label);
    if (pairedObj) {
      chartWeathers.push(pairedObj);
    }
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Minimalna",
        //   TODO zmiana ilości wyników
        data: chartWeathers
          .slice(chartWeathers.length - 7, chartWeathers.length)
          .map((item) => item.min_temp),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Maksymalna",
        data: chartWeathers
          .slice(chartWeathers.length - 7, chartWeathers.length)
          .map((item) => item.max_temp),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

