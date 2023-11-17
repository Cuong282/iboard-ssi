import React from "react";
import { DownOutlined } from "@ant-design/icons";
import "./Menu.css";
import { useState } from "react";

const Menu = () => {
  const [unitValue, setUnitValue] = React.useState<number>(1000000);

  return (
    <div className="nav w-full">
      <div className="w-full flex items-center border-t border-theme-invert bg-theme-secondary px-3" id="data-menu-list">
        <ul className="w-full flex text-sm desktop-menu-overflow desktop-menu desktop-menu-root desktop-menu-horizontal ">
          <li className=" flex items-center text-theme-text-tertiary px-1 cursor-pointer text-sm select-none bg-theme-dropdown-active">
            <div className="dropdown  ">
              <button className="dropbtn text-theme-text-tertiary">
                BẢNG GIÁ
              </button>
              <div
                className="dropdown-content bg-theme-dropdown-active"
                style={{ minWidth: 190 }}
              >
                <a href="" className="text-theme-text-tertiary">Link 1</a>
                <a href="#" className="text-theme-text-tertiary">Link 2</a>
                <a href="#" className="text-theme-text-tertiary">Link 3</a>
              </div>
            </div>
            <DownOutlined style={{ fontSize: "12px", marginLeft: "5px" }} />
          </li>
          <li className=" flex items-center text-theme-text-tertiary px-1 cursor-pointer text-sm select-none hover:bg-theme-dropdown-active ">
            <div className="dropdown  ">
              <button className="dropbtn text-theme-text-tertiary text-theme-text-tertiary ">
                CÔNG CỤ PHÂN TÍCH
              </button>
              <div
                className="dropdown-content bg-theme-dropdown-active"
                style={{ minWidth: 214 }}
              >
                <a href="" className="text-theme-text-tertiary">Link 1</a>
                <a href="#" className="text-theme-text-tertiary">Link 2</a>
                <a href="#" className="text-theme-text-tertiary">Link 3</a>
              </div>
            </div>
            <DownOutlined style={{ fontSize: "12px", marginLeft: "5px" }} />
          </li>
          <li className=" flex items-center text-theme-text-tertiary px-1 cursor-pointer text-sm select-none hover:bg-theme-dropdown-active ">
            <div className="dropdown  ">
              <button className="dropbtn text-theme-text-tertiary text-theme-text-tertiary ">
                GIAO DỊCH CHỨNG KHOÁN
              </button>
              <div
                className="dropdown-content bg-theme-dropdown-active"
                style={{ minWidth: 214 }}
              >
                <a href="" className="text-theme-text-tertiary">Link 1</a>
                <a href="#" className="text-theme-text-tertiary">Link 2</a>
                <a href="#" className="text-theme-text-tertiary">Link 3</a>
              </div>
            </div>
            <DownOutlined style={{ fontSize: "12px", marginLeft: "5px" }} />
          </li>
          <li className=" flex items-center text-theme-text-tertiary px-1 cursor-pointer text-sm select-none hover:bg-theme-dropdown-active  ">
            <div className="dropdown  ">
              <button className="dropbtn text-theme-text-tertiary ">
                <div className="dropdown  ">
                  <button className="dropbtn text-theme-text-tertiary ">
                    GIAO DỊCH TIỀN
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
                className="dropdown-content"
                style={{ minWidth: 196, backgroundColor: "#6c697b" }}
              >
                <a href="" className="text-theme-text-tertiary">Link 1</a>
                <a href="#" className="text-theme-text-tertiary">Link 2</a>
                <a href="#" className="text-theme-text-tertiary">Link 3</a>
              </div>
            </div>
            <DownOutlined style={{ fontSize: "12px", marginLeft: "5px" }} />
          </li>
          <li className=" flex items-center text-theme-text-tertiary px-1 cursor-pointer text-sm select-none hover:bg-theme-dropdown-active ">
            <div className="dropdown  ">
              <button className="dropbtn text-theme-text-tertiary ">
                <div className="dropdown  ">
                  <button className="dropbtn text-theme-text-tertiary ">
                    QUẢN LÝ TÀI KHOẢN
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
          <li className="flex items-center text-theme-text-tertiary px-1 cursor-pointer text-sm select-none hover:bg-theme-dropdown-active ">
            <div className="dropdown  ">
              <button className="dropbtn text-theme-text-tertiary ">
                <div className="dropdown  ">
                  <button className="dropbtn text-theme-text-tertiary ">
                    S-PRODUCTS
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
          <li className="flex items-center px-1  "
            style={{ color: "gray" }}>
            CHỨNG CHỈ QUỸ MỞ
          </li>
          <li className="flex items-center text-theme-text-tertiary px-1 cursor-pointer text-sm select-none hover:bg-theme-dropdown-active ">
            <div className="dropdown  ">
              <button className="dropbtn text-theme-text-tertiary ">
                <div className="dropdown  ">
                  <button className="dropbtn text-theme-text-tertiary ">
                    DỊCH VỤ HỖ TRỢ
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
          <li className="flex items-center px-1 py-1  "
            style={{ color: "gray" }}
          >
            GIAO DIỆN CỦA TÔI
          </li>
          <li className="flex items-center px-1 py-1  "
            style={{ color: "gray" }}
          >
            QUÀ TẶNG SSI
          </li>
        </ul>
        <div className="flex items-center text-10 min-w-max hidden lg:flex">
          <div className="flex items-center justify-center text-theme-text-up space-x-1">
            <h1 className=" text-4xl" style={{ marginTop: '-26px' }} >.</h1>
            <span> Connected</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
