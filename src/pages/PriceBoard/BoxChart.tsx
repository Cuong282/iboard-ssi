import "./BoxChart.css";
import React, { Component } from "react";
import { render } from "react-dom";
import { SettingOutlined } from "@ant-design/icons";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {
  DownOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
  MinusOutlined,
} from "@ant-design/icons";

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
            <div
              className="w-30 p-3"
              style={{

              }}
            >
              <div className="y bg-theme-primary">
                <HighchartsReact highcharts={Highcharts} options={chartOptions} />
              </div>

              <div className="flex justify-between pt-2 ">
                <button className="flex select-index-button max-w items-center hover:text-color-highlight">
                  <span
                    className="text-theme-text-tertiary "
                    style={{ fontSize: 15 }}
                  >
                    VNINDEX
                  </span>
                  <DownOutlined style={{ fontSize: "12px" }} />
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
            <div
              className="w-25 p-3"
              style={{
                height: "100%",
                overflow: "hidden",
              }}
            >
              <div className="y bg-theme-primary">
                <HighchartsReact highcharts={Highcharts} options={chartOptions} />
              </div>
              <div className="flex justify-between pt-2 ">
                <button className="flex select-index-button max-w items-center hover:text-color-highlight">
                  <span
                    className="text-theme-text-tertiary "
                    style={{ fontSize: 15 }}
                  >
                    VNINDEX
                  </span>
                  <DownOutlined style={{ fontSize: "12px" }} />
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
            <div
              className="w-25 p-3"
              style={{
                height: "100%",
                overflow: "hidden",
              }}
            >
              <div className="y bg-theme-primary">
                <HighchartsReact highcharts={Highcharts} options={chartOptions} />
              </div>
              <div className="flex justify-between pt-2 ">
                <button className="flex select-index-button max-w items-center hover:text-color-highlight">
                  <span
                    className="text-theme-text-tertiary "
                    style={{ fontSize: 15 }}
                  >
                    VNINDEX
                  </span>
                  <DownOutlined style={{ fontSize: "12px" }} />
                </button>
                <div className="flex items-center whitespace-nowrap text-color-down ">
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
            <div
              className="w-25 p-3"
              style={{
                height: "100%",
                overflow: "hidden",
              }}
            >
              <div className="y bg-theme-primary">
                <HighchartsReact highcharts={Highcharts} options={chartOptions} />
              </div>
              <div className="flex justify-between pt-2 ">
                <button className="flex select-index-button max-w items-center hover:text-color-highlight">
                  <span
                    className="text-theme-text-tertiary "
                    style={{ fontSize: 15 }}
                  >
                    VNINDEX
                  </span>
                  <DownOutlined style={{ fontSize: "12px" }} />
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

        <div className="col-span-5 xl:col-span-4 rounded bg-theme-secondary ">
          <div className="relative bg-theme-secondary  ">
            <table className="w-full text-sm text-left text-gray-500  ">
              <thead className=" dark:bg-gray-800 dark:border-gray-700 text-theme-text-tertiary theme-text-highlight">
                <tr >

                  <td className="px-0 py-0"> <SettingOutlined className="px-1 py-1" />Chỉ số</td>
                  <td className="px-0 py-0">Điểm</td>
                  <td className="px-0 py-0">{'<+/->'}</td>
                  <td className="px-0 py-0">KLGD(triệu)</td>
                  <td className="px-0 py-0">GTGD(tỷ)</td>
                  <td className="px-2 py-0">CK tăng/giảm</td>
                </tr>
              </thead>
              <tbody>

                <tr className=" dark:bg-gray-800 dark:border-gray-700 text-theme-text-tertiary theme-text-highlight  ">
                  <th scope="row" className="px-0 py-0 font-medium">
                    VNINDEX
                  </th>
                  <td className="px-0 py-2">Silver</td>
                  <td className="px-0 py-0">Silver</td>
                  <td className="px-0 py-0">Laptop</td>
                  <td className="px-0 py-0">Laptop</td>
                  <td className="px-0 py-0">Laptop</td>

                </tr>
                <tr className=" dark:bg-gray-800 dark:border-gray-700 theme-text-pending theme-sell-highlight bg-theme-price-table-col-highlight">
                  <th scope="row" className="px-1 py-1 font-medium">
                    VN30
                  </th>
                  <td className="px-0 py-2">Silver</td>
                  <td className="px-0 py-0">Silver</td>
                  <td className="px-0 py-0">Laptop</td>
                  <td className="px-0 py-0">Laptop</td>
                  <td className="px-0 py-0">Laptop</td>
                </tr>
                <tr className=" dark:bg-gray-800 dark:border-gray-700  text-theme-text-tertiary">
                  <th
                    scope="row"
                    className="px-1 py-0 font-medium whitespace-nowrap dark:text-white"
                  >
                    HNX30
                  </th>
                  <td className="px-1 py-2">White</td>
                  <td className="px-1 py-1">Laptop PC</td>
                  <td className="px-1 py-1">$1999</td>
                  <td className="px-1 py-1">$1999</td>
                  <td className="px-0 py-0">Laptop</td>
                </tr>
                <tr className=" dark:bg-gray-800 theme-sell-highlight bg-theme-price-table-col-highlight">
                  <th
                    scope="row"
                    className="px-1 py-1 font-medium  whitespace-nowrap dark:text-white "
                  >
                    VNXALL
                  </th>
                  <td className="px-1 py-2">Black</td>
                  <td className="px-1 py-1">Accessories</td>
                  <td className="px-1 py-1">$99</td>
                  <td className="px-1 py-1">$99</td>
                  <td className="px-0 py-0">Laptop</td>
                </tr>
                <tr className=" dark:bg-gray-800  text-theme-text-tertiary">
                  <th
                    scope="row"
                    className="px-1 py-1 font-medium  whitespace-nowrap dark:text-white"
                  >
                    HNX
                  </th>
                  <td className="px-1 py-2">Black</td>
                  <td className="px-1 py-1">Accessories</td>
                  <td className="px-1 py-1">$99</td>
                  <td className="px-1 py-1">$99</td>
                  <td className="px-0 py-0">Laptop</td>
                </tr>
                <tr className=" dark:bg-gray-800 theme-sell-highlight bg-theme-price-table-col-highlight">
                  <th
                    scope="row"
                    className="px-1 py-1 font-medium  whitespace-nowrap dark:text-white "
                  >
                    UPCOM
                  </th>
                  <td className="px-1 py-2">Black</td>
                  <td className="px-1 py-1">Accessories</td>
                  <td className="px-1 py-1">$99</td>
                  <td className="px-1 py-1">$99</td>
                  <td className="px-1 py-1">Laptop</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxChart;
//git add .