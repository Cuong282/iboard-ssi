import "./BoxChart.css";
import React, { Component } from "react";
import { render } from "react-dom";

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {
  DownOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { BiChevronDown } from "react-icons/bi";
import BoxIndex from "./BoxIndex";

const BoxChart = () => {
  const chartOptions = {
    title: {
      text: "",
    },

    series: [
      {
        data: [1, 2, 3, 2, 4, 2, 3, 5],
      },
    ],
    legend: {
      floating: true,
      align: "left",
      x: 100,
      verticalAlign: "top",
      y: 70,
    },
    chart: {
      backgroundColor: {
        stops: [
          [0, "rgb(255, 255, 255)"],
          [1, "rgb(200, 200, 255)"],
        ],
      },
    },
  };

  return (
    <section className="w-100">
      <div className=" p-1 bg-theme-primary grid grid-cols-12 gap-1 ">
        <div className="w-100 col-span-7 xl:col-span-8 flex space-x-1 h-full overflow-x-auto rounded scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-scroll ">
          <div className="flex-1 min-w-[200px] p-1 bg-theme-secondary rounded text-white">
            <div className="w-30 p-3" style={{}}>
              <div className="y bg-theme-primary">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={chartOptions}
                />
              </div>

              <div className="flex justify-between pt-3 ">
                <button className="flex select-index-button max-w items-center hover:text-color-highlight">
                  <p className="text-theme-text-tertiary flex items-center text-xs">
                    VNINDEX
                  </p>
                  <BiChevronDown />
                </button>
                <div className="flex items-center whitespace-nowrap text-color-down">
                  <ArrowDownOutlined style={{ color: "red" }} />
                  <span style={{ fontSize: 10, color: "red" }}>
                    {" "}
                    1,117.42 (-5.04 -0.45%)
                  </span>
                </div>
              </div>
              <div className="flex justify-between pt-2 text-theme-text-tertiary ">
                <span style={{ fontSize: 12 }}>928,596,018 CP</span>
                <span style={{ fontSize: 12 }}>17,130.702 Tỷ</span>
              </div>
              <div className="flex justify-between">
                <div className="flex-1 flex items-center space-x-0.5 pt-2 text-sm">
                  <ArrowUpOutlined style={{ color: "green" }} />
                  <span className="inline text-green-400">126</span>
                  <span className="inline text-green-400"> (5)</span>
                </div>
                <div className="flex-1 flex items-center space-x-0.5 pt-2 text-sm">
                  <MinusOutlined style={{ marginTop: "7px" }} />
                  <span className="inline text-yellow-400">51</span>
                </div>
                <div className="flex-1 flex items-center space-x-0.5 pt-2 text-sm">
                  <ArrowDownOutlined style={{ color: "red" }} />
                  <span className="inline text-red-400">280</span>
                  <span className="inline text-blue-400"> (8)</span>
                </div>
                <div className="flex-1 text-right whitespace-nowrap pl-1 pt-2 text-sm text-theme-text-tertiary ">
                  Đóng cửa
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-[200px] p-1 bg-theme-secondary rounded text-white">
            <div className="w-30 p-3" style={{}}>
              <div className="y bg-theme-primary">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={chartOptions}
                />
              </div>

              <div className="flex justify-between pt-3 ">
                <button className="flex select-index-button max-w items-center hover:text-color-highlight">
                  <p className="text-theme-text-tertiary flex items-center text-xs">
                    VNINDEX
                  </p>
                  <BiChevronDown />
                </button>
                <div className="flex items-center whitespace-nowrap text-color-down">
                  <ArrowDownOutlined style={{ color: "red" }} />
                  <span style={{ fontSize: 10, color: "red" }}>
                    {" "}
                    1,117.42 (-5.04 -0.45%)
                  </span>
                </div>
              </div>
              <div className="flex justify-between pt-2 text-theme-text-tertiary ">
                <span style={{ fontSize: 12 }}>928,596,018 CP</span>
                <span style={{ fontSize: 12 }}>17,130.702 Tỷ</span>
              </div>
              <div className="flex justify-between">
                <div className="flex-1 flex items-center space-x-0.5 pt-2 text-sm">
                  <ArrowUpOutlined style={{ color: "green" }} />
                  <span className="inline text-green-400">126</span>
                  <span className="inline text-green-400"> (5)</span>
                </div>
                <div className="flex-1 flex items-center space-x-0.5 pt-2 text-sm">
                  <MinusOutlined style={{ marginTop: "7px" }} />
                  <span className="inline text-yellow-400">51</span>
                </div>
                <div className="flex-1 flex items-center space-x-0.5 pt-2 text-sm">
                  <ArrowDownOutlined style={{ color: "red" }} />
                  <span className="inline text-red-400">280</span>
                  <span className="inline text-blue-400"> (8)</span>
                </div>
                <div className="flex-1 text-right whitespace-nowrap pl-1 pt-2 text-sm text-theme-text-tertiary ">
                  Đóng cửa
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-[200px] p-1 bg-theme-secondary rounded text-white">
            <div className="w-30 p-3" style={{}}>
              <div className="y bg-theme-primary">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={chartOptions}
                />
              </div>

              <div className="flex justify-between pt-3 ">
                <button className="flex select-index-button max-w items-center hover:text-color-highlight">
                  <p className="text-theme-text-tertiary flex items-center text-xs">
                    VNINDEX
                  </p>
                  <BiChevronDown />
                </button>
                <div className="flex items-center whitespace-nowrap text-color-down">
                  <ArrowDownOutlined style={{ color: "red" }} />
                  <span style={{ fontSize: 10, color: "red" }}>
                    {" "}
                    1,117.42 (-5.04 -0.45%)
                  </span>
                </div>
              </div>
              <div className="flex justify-between pt-2 text-theme-text-tertiary ">
                <span style={{ fontSize: 12 }}>928,596,018 CP</span>
                <span style={{ fontSize: 12 }}>17,130.702 Tỷ</span>
              </div>
              <div className="flex justify-between">
                <div className="flex-1 flex items-center space-x-0.5 pt-2 text-sm">
                  <ArrowUpOutlined style={{ color: "green" }} />
                  <span className="inline text-green-400">126</span>
                  <span className="inline text-green-400"> (5)</span>
                </div>
                <div className="flex-1 flex items-center space-x-0.5 pt-2 text-sm">
                  <MinusOutlined style={{ marginTop: "7px" }} />
                  <span className="inline text-yellow-400">51</span>
                </div>
                <div className="flex-1 flex items-center space-x-0.5 pt-2 text-sm">
                  <ArrowDownOutlined style={{ color: "red" }} />
                  <span className="inline text-red-400">280</span>
                  <span className="inline text-blue-400"> (8)</span>
                </div>
                <div className="flex-1 text-right whitespace-nowrap pl-1 pt-2 text-sm text-theme-text-tertiary ">
                  Đóng cửa
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-[200px] p-1 bg-theme-secondary rounded text-white">
            <div className="w-30 p-3" style={{}}>
              <div className="y bg-theme-primary">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={chartOptions}
                />
              </div>

              <div className="flex justify-between pt-3 ">
                <button className="flex select-index-button max-w items-center hover:text-color-highlight">
                  <p className="text-theme-text-tertiary flex items-center text-xs">
                    VNINDEX
                  </p>
                  <BiChevronDown />
                </button>
                <div className="flex items-center whitespace-nowrap text-color-down">
                  <ArrowDownOutlined style={{ color: "red" }} />
                  <span style={{ fontSize: 10, color: "red" }}>
                    {" "}
                    1,117.42 (-5.04 -0.45%)
                  </span>
                </div>
              </div>
              <div className="flex justify-between pt-2 text-theme-text-tertiary ">
                <span style={{ fontSize: 12 }}>928,596,018 CP</span>
                <span style={{ fontSize: 12 }}>17,130.702 Tỷ</span>
              </div>
              <div className="flex justify-between">
                <div className="flex-1 flex items-center space-x-0.5 pt-2 text-sm">
                  <ArrowUpOutlined style={{ color: "green" }} />
                  <span className="inline text-green-400">126</span>
                  <span className="inline text-green-400"> (5)</span>
                </div>
                <div className="flex-1 flex items-center space-x-0.5 pt-2 text-sm">
                  <MinusOutlined style={{ marginTop: "7px" }} />
                  <span className="inline text-yellow-400">51</span>
                </div>
                <div className="flex-1 flex items-center space-x-0.5 pt-2 text-sm">
                  <ArrowDownOutlined style={{ color: "red" }} />
                  <span className="inline text-red-400">280</span>
                  <span className="inline text-blue-400"> (8)</span>
                </div>
                <div className="flex-1 text-right whitespace-nowrap pl-1 pt-2 text-sm text-theme-text-tertiary ">
                  Đóng cửa
                </div>
              </div>
            </div>
          </div>
        </div>

        <BoxIndex />
      </div>
    </section>
  );
};

export default BoxChart;
//git add .
