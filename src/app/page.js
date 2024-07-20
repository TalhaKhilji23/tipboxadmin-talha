"use client";
import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { Bar } from "react-chartjs-2";
import RestDetails from "@/components/RestDetails";
import Transactions from "@/components/Transactions";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import DashCard from "@/components/DashCard";

export default function Home() {
  const data = {
    labels: [
      "Users",
      "Users",
      "Users",
      "Users",
      "Users",
      "Users",
      "Users",
      "Users",
      "Users",
      "Users",
      "Users",
      "Users",
    ],
    datasets: [
      {
        label: "",
        barThickness: 22,
        hoverBackgroundColor: "#FF0000", // Color when hovering over bars
        data: [155, 112, 226, 117, 334, 155, 112, 226, 117, 334, 424, 500],
        backgroundColor: ["#FFECEC"],
        borderWidth: 0, // Adjust border width as needed
      },
    ],
  };

  // Get the current month (0-11)
  const currentMonth = new Date().getMonth();

  // Set the background color for all bars to default and change the current month's bar to red
  const backgroundColors = data.labels.map((label, index) => {
    return index === currentMonth ? "#FF0000" : "#FFECEC";
  });

  // Update the backgroundColor property of the dataset
  data.datasets[0].backgroundColor = backgroundColors;

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          stepSize: 100, // Specify the step size for y-axis values
          callback: function (value) {
            if (value % 100 === 0) {
              return value;
            }
          },
        },
        border: { dash: [4, 4] }, // for the grid lines
        grid: {
          color: function (context) {
            // Ensure grid line only at specified intervals
            if (context.tick && context.tick.value % 100 === 0) {
              return "#aaa";
            }
            return "transparent";
          },
          borderDash: [4, 4], // Make the grid lines dashed
          tickColor: "#000", // for the tick mark
          tickBorderDash: [2, 3], // also for the tick, if long enough
          tickLength: 0, // just to see the dotted line
          tickWidth: 1,
          offset: true,
          drawTicks: true, // true is default
          drawOnChartArea: true, // true is default
        },
        beginAtZero: true,
      },
      x: {
        ticks: {
          maxTicksLimit: 12, // Ensure all months appear
          callback: function (value, index) {
            const labels = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ];
            return labels[index % labels.length];
          },
        },
        grid: {
          display: false, // Remove vertical lines
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    elements: {
      bar: {
        borderRadius: 50, // Add border radius to the bars
        barThickness: 22, // Set the width of the bars to 22px
      },
    },
  };
  const dashCardData = [
    { title: "Total Users", value: 65, icon: "/svgs/glass.svg" },
    { title: "Active Users", value: 45, icon: "/svgs/users.svg" },
    { title: "New Users", value: 20, icon: "/svgs/salesman.svg" },
  ];
  const restDetailsData = [
    {
      text: "Total Staff hello there",
      value: "108",
      icon: "/svgs/glass.svg",
    },
    {
      text: "Total Customers",
      value: "256",
      icon: "/svgs/customer.svg",
    },
    {
      text: "Total Orders",
      value: "89",
      icon: "/svgs/order.svg",
    },
    {
      text: "Total Revenue",
      value: "$13,200",
      icon: "/svgs/revenue.svg",
    },
  ];
  const HomePage = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    return (
      <div className=" w-full mt-5  bg-gray-100 flex flex-col justify-between">
        <div className="container mx-auto    flex flex-col items-center">
          <div className="chart-container bg-white rounded-[20px] p-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-[20px] font-semibold">User Growth</p>
              <div className="relative">
                <div
                  className="flex justify-between w-[156px] h-9 rounded-[5px] items-center px-3 border border-[#E0E0E0] cursor-pointer"
                  onClick={() => setDropdownVisible(!dropdownVisible)}
                >
                  <p className="text-sm">Sort By</p>
                  <p>
                    <ReactSVG src="/svgs/down.svg" className="mt-1" />
                  </p>
                </div>
                {dropdownVisible && (
                  <div className="absolute right-0 mt-2 w-[156px] bg-white border border-[#E0E0E0] rounded-[5px] shadow-lg z-10">
                    <ul className="py-1">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Suspended
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Active
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Newly Added
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <div className="bg-white h-[78px] max-w-[1050px] rounded-[20px] ml-[485px] mt-5"></div>
        <div className="w-full max-w-[675px] flex justify-center flex-col mx-auto">
          <div className="bg-gray-100 flex justify-center items-center flex-col">
            <div className=" mt-5  gap-5 flex flex-wrap  justify-center">
              {dashCardData.map((data, index) => (
                <DashCard
                  key={index}
                  title={data.title}
                  value={data.value}
                  icon={data.icon}
                />
              ))}
            </div>
          </div>
          <HomePage />
          <div className="flex mt-5">
            <RestDetails />
          </div>
          <div className="flex mt-5">
            <Transactions />
          </div>
        </div>
      </div>
    </div>
  );
}
