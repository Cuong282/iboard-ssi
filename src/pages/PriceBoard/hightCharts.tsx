import React, { useEffect, useState } from "react";
// import {
//   getIndexData,
//   getIndexData1,
//   getIndexData2,
//   getIndexData3,
// } from "../../services/apis";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { configChartIndex } from "../../untils/bindDataHighcharts";
import "./BoxIndex.css";

const HightCharts = ({ index }: any) => {
  const listCharts: any = [
    // getIndexData,
    // getIndexData1,
    // getIndexData2,
    // getIndexData3,
  ];

  const sevenHoursInMilliseconds = 3600 * 7 * 1000;

  const [dataChart, setDataChart] = useState<any>({});

  async function getdataChart() {
    const result: any = await listCharts[index]();
    const volume: any = [];
    const value: any = [];
    const time: any = [];

    result.data.data.history.forEach((e: any) => {

      volume.push([
        Number(e.time) * 1000 + sevenHoursInMilliseconds,
        Number(e.vol),
      ]);
      value.push([
        Number(e.time) * 1000 + sevenHoursInMilliseconds,
        Number(e.indexValue),
      ]);
    });

    const dataUpdate = {
      volume: volume,
      value: value,
      prevIndexValue: result.data.data.prevIndexValue,
      time: time
    };
    setDataChart(dataUpdate);
  }
  useEffect(() => {
    getdataChart();
  }, []);

  return (
    <>
      <div className="highcharts-background relative" style={{ height: 105 }}>
        <div className="absolute left-0 top-0 w-full h-[85px] bg-theme-primary"></div>
        <div>
          {dataChart.value && dataChart.volume && dataChart.prevIndexValue && (
            <HighchartsReact
              highcharts={Highcharts}
              options={configChartIndex(dataChart.value, dataChart.volume, dataChart.prevIndexValue)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default HightCharts;