import { Popover, Button } from "antd";
import { useState, useEffect, useRef } from "react";
import { ITheme } from "../interfaces/interfaces";
import { renderIconTheam, renderMenuTheme } from "../commons/menutheme";
import Time from "../commons/Time";
import SlideFade from "../commons/SlideFade";
import { BellOutlined } from "@ant-design/icons";

const Header = () => {

  const data = JSON.parse(localStorage.getItem("cusor") || "1");
  const [state, setState] = useState<ITheme>(data || 1);
  const themeClass = ["theme-light", "theme-dark", "theme-oled"];

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.className = "";
    body.classList.add(themeClass[state - 1]);
  }, [state]);

  return (
    <div className="flex align-middle w-full items-center p-1 bg-theme-secondary">
      <p className="font-medium text-sm text-theme-text-tertiary px-2 whitespace-nowrap">
        Live Board
      </p>
      <SlideFade />
      <Time />
      <div className="notify flex items-center text-theme-text-tertiary">
        <BellOutlined />
        <Popover
          placement="bottom"
          content={renderMenuTheme(state, setState)}
          trigger="click"
          className="mr-2 ml-2 cursor-pointer"
        >
          {renderIconTheam(state)}
        </Popover>
      </div>
      <Button
        size="small"
      
        className="ml-2 bg-theme-neutral text-theme-text-tertiary"
      >
        Mở tài khoản
      </Button>
      <Button danger size="small" type="primary" className="ml-2">
        Đăng nhập
      </Button>
    </div>
  );
};

export default Header;
