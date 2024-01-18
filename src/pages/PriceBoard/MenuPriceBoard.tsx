
import { Button, Input, Popover, Select, Switch } from "antd";
import React from "react";

import { useState } from "react";
import { HiOutlineSearch, } from "react-icons/hi";
import { AiTwotoneSetting, AiOutlineArrowUp, AiFillSnippets } from "react-icons/ai";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import {
  SnippetsFilled,
  UpSquareFilled,
  DownOutlined,
} from "@ant-design/icons";
import history from "../../untils/history";
import { color } from "highcharts";
const valueOption = [
  {
    label: "1,000,000",
    value: 1000000,
  },
  {
    label: "1,000,000,000",
    value: 1000000000,
  },
];

const volumeOptions = [
  {
    label: 1,
    value: 1,
  },
  {
    label: 10,
    value: 10,
  },
];

const Menu = () => {
  const [active, setActive] = React.useState(0);
  const [unitVolume, setUnitVolume] = React.useState<number>(1);
  const [unitValue, setUnitValue] = React.useState<number>(1000000);





  return (
  <>
  <div className="w-full  bg-theme-secondary px-3 bg-theme-price-table-col-highlight">
      <div className="flex items-center justify-between  text-theme-text-tertiary   ">
        <div>
          <ul className="flex items-center text-theme-text-tertiary ">

            <li className="px-2 py-1 ">
              <Input
                size="small"
                className="bg-theme-secondary"
                addonBefore={
                  <HiOutlineSearch className="text-theme-text-tertiary" />
                }
                placeholder=" thanh kiếm ck"

              />
            </li>

          </ul>

        </div>
        <div className="w-full  border-theme-invert bg-theme-secondary px-2 bg-theme-price-table-col-highlight">
          <ul className="w-full flex text-sm text-gray-700 dark:text-gray-200 ">
            <li className=" flex items-center text-theme-text-tertiary px-3 py-1 cursor-pointer text-sm select-none hover:bg-theme-dropdown-active border-t-[3px] ">
              <div className="dropdown  ">
                <button
                  className="dropbtn text-theme-text-tertiary text-xl"
                >
                  DANH MỤC CỦA TÔI
                </button>
                <div className="dropdown-content bg-theme-dropdown-active"
                  style={{ minWidth: 196 }}>
                  <a href="" className="text-theme-text-tertiary">Link 1</a>
                  <a href="#" className="text-theme-text-tertiary">Link 2</a>
                  <a href="#" className="text-theme-text-tertiary">Link 3</a>
                </div>
              </div>
              <DownOutlined
                style={{ fontSize: "14px", marginLeft: "5px", marginTop: 2 }}
              />
            </li>
            <li className=" flex items-center  text-theme-text-tertiary px-3 py-1 cursor-pointer text-sm select-none hover:bg-theme-dropdown-active ">
              <div className="dropdown  ">
                <button className="dropbtn text-theme-text-tertiary text-xl">
                  VN30
                </button>

                <div
                  className="dropdown-content bg-theme-dropdown-active"
                  style={{ minWidth: 196 }}
                >
                  <a href="" className="text-theme-text-tertiary">Link 1</a>
                  <a href="#" className="text-theme-text-tertiary">Link 2</a>
                  <a href="#" className="text-theme-text-tertiary">Link 3</a>
                </div>
              </div>
              <DownOutlined style={{ fontSize: "12px", marginLeft: "5px" }} />
            </li>
            <li className=" flex items-center text-theme-text-tertiary px-3 py-1 cursor-pointer text-sm select-none hover:bg-theme-dropdown-active">
              <div className="dropdown  ">
                <button className="dropbtn text-theme-text-tertiary text-xl">
                  HNX30
                </button>

              </div>

            </li>
            <li className=" flex items-center text-theme-text-tertiary px-3 py-1 cursor-pointer text-sm select-none hover:bg-theme-dropdown-active ">
              <div className="dropdown  ">
                <button className="dropbtn text-theme-text-tertiary ">
                  <div className="dropdown  ">
                    <button className="dropbtn text-theme-text-tertiary ">
                      HOSE
                    </button>



                  </div>
                </button>

              </div>

            </li>
            <li className=" flex items-center text-theme-text-tertiary px-3 py-1 cursor-pointer text-sm select-none hover:bg-theme-dropdown-active">
              <div className="dropdown  ">
                <button className="dropbtn text-theme-text-tertiary ">
                  <div className="dropdown  ">
                    <button className="dropbtn text-theme-text-tertiary ">
                      HNX
                    </button>
                  </div>
                </button>

                <div
                  className="dropdown-content bg-theme-dropdown-active"
                  style={{ minWidth: 196 }}
                >
                  <a href="" className="text-theme-text-tertiary">Link 1</a>
                  <a href="#" className="text-theme-text-tertiary">Link 2</a>
                  <a href="#" className="text-theme-text-tertiary">Link 3</a>
                </div>
              </div>
              <DownOutlined style={{ fontSize: "12px", marginLeft: "5px" }} />
            </li>
            <li className="flex items-center text-theme-text-tertiary px-3 py-1 cursor-pointer text-sm select-none hover:bg-theme-dropdown-active">
              <div className="dropdown  ">
                <button className="dropbtn text-theme-text-tertiary ">
                  <div className="dropdown  ">
                    <button className="dropbtn text-theme-text-tertiary ">
                      UPCOM
                    </button>


                  </div>
                </button>


              </div>

            </li>
            <li className=" flex items-center text-theme-text-tertiary px-3 py-1 cursor-pointer text-sm select-none hover:bg-theme-dropdown-active">
              <div className="dropdown  ">
                <button className="dropbtn text-theme-text-tertiary ">
                  <div className="dropdown  ">
                    <button className="dropbtn text-theme-text-tertiary ">
                      CỔ PHIẾU NGÀNH
                    </button>
                  </div>
                </button>

                <div
                  className="dropdown-content bg-theme-dropdown-active"
                  style={{ minWidth: 196 }}
                >
                  <a href="" className="text-theme-text-tertiary">Link 1</a>
                  <a href="#" className="text-theme-text-tertiary">Link 2</a>
                  <a href="#" className="text-theme-text-tertiary">Link 3</a>
                </div>
              </div>
              <DownOutlined style={{ fontSize: "12px", marginLeft: "5px" }} />
            </li>
            <li className="flex items-center text-theme-text-tertiary px-3 py-1 cursor-pointer text-sm select-none hover:bg-theme-dropdown-active">
              <div className="dropdown  ">
                <button className="dropbtn text-theme-text-tertiary ">
                  <div className="dropdown  ">
                    <button className="dropbtn text-theme-text-tertiary ">
                      THỎA THUẬN
                    </button>
                    <div
                      className="dropdown-content bg-theme-dropdown-active"
                      style={{ minWidth: 196 }}
                    >
                      <a href="" className="text-theme-text-tertiary">Link 1</a>
                      <a href="#" className="text-theme-text-tertiary">Link 2</a>
                      <a href="#" className="text-theme-text-tertiary">Link 3</a>
                    </div>
                  </div>
                </button>
                <div
                  className="dropdown-content bg-theme-dropdown-active"
                  style={{ minWidth: 196 }}
                >
                  <a href="" className="text-theme-text-tertiary">Link 1</a>
                  <a href="#" className="text-theme-text-tertiary">Link 2</a>
                  <a href="#" className="text-theme-text-tertiary">Link 3</a>
                </div>
              </div>
              <DownOutlined style={{ fontSize: "12px", marginLeft: "5px" }} />
            </li>
            <li className=" flex items-center text-theme-text-tertiary px-3 py-1 cursor-pointer text-sm select-none hover:bg-theme-dropdown-active">
              <div className="dropdown  ">
                <button className="dropbtn text-theme-text-tertiary ">
                  <div className="dropdown  ">
                    <button className="dropbtn text-theme-text-tertiary ">
                      PHÁI SINH
                    </button>
                  </div>
                </button>

                <div
                  className="dropdown-content bg-theme-dropdown-active"
                  style={{ minWidth: 196 }}
                >
                  <a href="" className="text-theme-text-tertiary">Link 1</a>
                  <a href="#" className="text-theme-text-tertiary">Link 2</a>
                  <a href="#" className="text-theme-text-tertiary">Link 3</a>
                </div>
              </div>
              <DownOutlined style={{ fontSize: "12px", marginLeft: "5px" }} />
            </li>
            <li className=" flex items-center text-theme-text-tertiary px-3 py-1 cursor-pointer text-sm select-none hover:bg-theme-dropdown-active">
              <div className="dropdown  ">
                <button className="dropbtn text-theme-text-tertiary ">
                  <div className="dropdown  ">
                    <button className="dropbtn text-theme-text-tertiary ">
                      CHỨNG QUYỀN
                    </button>
                  </div>
                </button>

                <div
                  className="dropdown-content bg-theme-dropdown-active"
                  style={{ minWidth: 196 }}
                >
                  <a href="" className="text-theme-text-tertiary">Link 1</a>
                  <a href="#" className="text-theme-text-tertiary">Link 2</a>
                  <a href="#" className="text-theme-text-tertiary">Link 3</a>
                </div>
              </div>
              <DownOutlined style={{ fontSize: "12px", marginLeft: "5px" }} />
            </li>
            <li className="flex items-center  px-3 py-1 "
              style={{ color: "gray" }}
            >
              ETF
            </li>
            <li className=" flex items-center text-theme-text-tertiary px-3 py-1 cursor-pointer text-sm select-none hover:bg-theme-dropdown-active">
              <div className="dropdown  ">
                <button className="dropbtn text-theme-text-tertiary ">
                  <div className="dropdown  ">
                    <button className="dropbtn text-theme-text-tertiary ml-5 text-theme-text-tertiary">
                      lô lẻ HOSE
                    </button>
                  </div>
                </button>

                <div
                  className="dropdown-content bg-theme-dropdown-active"
                  style={{ minWidth: 196 }}
                >
                  <a href="" className="text-theme-text-tertiary">Link 1</a>
                  <a href="#" className="text-theme-text-tertiary">Link 2</a>
                  <a href="#" className="text-theme-text-tertiary">Link 3</a>
                </div>
              </div>
              <DownOutlined style={{ fontSize: "12px", marginLeft: "5px" }} />
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center">
            <li className="cursor-pointer mr-1">
              <AiOutlineArrowUp />
            </li>
            <li className="cursor-pointer"><AiFillSnippets /></li>
            <li className="cursor-pointer">
              <Popover
                placement="bottom"
                content={<div className="p-2">
                  <div className="flex items-center justify-between mb-2">
                    <p>Đơn vị KL</p>
                    <Select
                      style={{ width: 120 }}
                      value={unitVolume}
                      className="ml-2"
                      onChange={(selected) => {
                        setUnitVolume(selected);
                      }}
                      options={volumeOptions} />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <p>Đơn vị Giá trị</p>
                    <Select
                      style={{ width: 120 }}
                      value={unitValue}
                      className="ml-2"
                      onChange={(selected) => {
                        setUnitValue(selected);
                      }}
                      options={valueOption} />
                  </div>
                  <div className="flex items-center justify-between">
                    <p>Sắp xếp realtime</p>

                  </div>
                </div>}
                trigger="click"
                className="mr-2 ml-2 cursor-pointer"
              >
                <AiTwotoneSetting />
              </Popover>
            </li>
            <li className="px-2 py-1">
              <Button size="small" className="bg-green-600 text-sm text-white">
                Đặt lệnh
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div></>
  );

};

export default Menu;
