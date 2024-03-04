import React, { useEffect, useState } from "react";
// import { getIndexmuntichart } from "../../services/apis";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import HightCharts from "./hightCharts";
import "./BoxIndex.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import BoxIndex from "./BoxIndex";
// import BoxIndex from "./BoxIndex";
interface History {
  indexId: string;
  indexValue: number;
  time: number;
  vol: number;
  totalQtty: number;
}

interface IIndexChart {
  exchange: string;
  indexId: string;
  indexValue: number;
  prevIndexValue: number;
  time: number;
  latestValue: any[];
  advances: number;
  allQty: number;
  allValue: number;
  ceiling: number;
  change: number;
  changePercent: number;
  chartHigh: number;
  chartLow: number;
  chartOpen: number;
  declines: number;
  floor: number;
  nochanges: number;
  timeMaker: number;
  totalQtty: number;
  totalValue: number;
  history: History[];
  totalValuePT: number;
  totalQttyPT: number;
  totalBuyForeignQtty: number;
  totalSellForeignQtty: number;
  label: string;
  exchangeLabel: string;
}

const BoxChart = () => {
  const [data, setData] = useState<IIndexChart[] | []>([]);

  async function getdata() {
    // const data: any = await getIndexmuntichart();
    // setData(data.data.data);
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className=" items-center w-full h-50 p-1 bg-theme-primary grid grid-cols-12 gap-1">
      <div className="text-xs col-span-7 xl:col-span-8 flex space-x-1 h-full overflow-x-auto rounded scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-scroll">
        {data.map((e, i) => {
          if (i < 4) {
            return (
              <>
                <div className=" flex-1 p-2 bg-theme-secondary rounded" key={i}>
                  <div className="index-value h-full" key={i}>
                    {
                      <HightCharts index={i} />
                      }
                    <div className="flex justify-between py-1">
                      <p className="flex items-center">
                        {e.label}
                        <BiChevronDown />
                      </p>
                      <p
                        className="theme-text-down py-1"
                        style={{ color: "#0bdf39" }}
                      >
                        <ArrowUpOutlined className="text-xs" />
                        {e.indexValue}({e.change} {e.changePercent}%)
                      </p>
                    </div>
                    <div className="flex justify-between whitespace-nowrap py-px">
                      <p>{new Intl.NumberFormat().format(e.allQty)} CP</p>
                      <p>
                        {new Intl.NumberFormat("de-DE").format(
                          e.allValue / 1000000000
                        )}{" "}
                        Tỷ{" "}
                      </p>
                    </div>
                    <div className="flex justify-between ">
                      <div className="flex-1 flex items-center space-x-0.5">
                        <p
                          className="text-color-up"
                          style={{ color: "#0bdf39" }}
                        >
                          <ArrowUpOutlined className="text-xs" />
                        </p>
                        <p
                          className="text-color-up"
                          style={{ color: "#0bdf39" }}
                        >
                          {" "}
                          {e.advances}
                        </p>
                        <p
                          className="ellipsis-wrap whitespace-nowrap "
                          style={{ color: "#f23aff" }}
                        >
                          ({e.ceiling})
                        </p>
                      </div>
                      <div className="flex-1 text-color-ref flex items-center justify-center space-x-0.5">
                        <p
                          className="pt-1.5 pl-2 "
                          style={{ color: "#fdff12" }}
                        >
                          <MinusOutlined className="text-" />
                        </p>
                        <p
                          className="ellipsis-wrap whitespace-nowrap mr-2px"
                          style={{ color: "#fdff12" }}
                        >
                          {e.nochanges}
                        </p>
                      </div>
                      <div className="flex-1 flex items-center justify-center space-x-0.5">
                        <p
                          className="text-color-up"
                          style={{ color: "#ff0017" }}
                        >
                          <ArrowDownOutlined className="text-xs" />
                        </p>
                        <p
                          className="ellipsis-wrap whitespace-nowrap"
                          style={{ color: "#ff0017" }}
                        >
                          {e.declines}
                        </p>
                        <p
                          className="ellipsis-wrap whitespace-nowrap"
                          style={{ color: "#00c9ff" }}
                        >
                          ({e.floor})
                        </p>
                      </div>
                      <p className=" ellipsis-wrap whitespace-nowrap pt-1 pr-px">
                        Đóng cửa
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
      <BoxIndex />
    </div>
  );
};

export default BoxChart;
//git add .
