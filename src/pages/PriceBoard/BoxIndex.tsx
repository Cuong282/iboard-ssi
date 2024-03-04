import { useEffect, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
// import { getIndexmuntichart } from "../../services/apis";
import "./BoxIndex.css";
// import { ColDef } from "ag-grid-community";
import { AiTwotoneSetting } from "react-icons/ai";

interface IIndexCharts {
  Chỉsố: number;
  Điểm: number;
  "<+/->": number;
  "KLGD(Triệu)": number;
  "GTGD(Tỷ)": number;
  "CKTăng/Giảm": number;
}

function BoxIndex() {
  const [data, setData] = useState<IIndexCharts[] | []>([]);
  async function getdata() {
    // const data: any = await getIndexmuntichart();
    // setData(convertDatas(data.data.data));
  }

  useEffect(() => {
    getdata();
  }, []);

  function convertDatas(data: any) {
    return (
      data?.length > 0 &&
      data?.map((data: any) => {
        return {
          Chỉsố: data.label,
          Điểm:new Intl.NumberFormat().format(data.indexValue),
          "<+/->": data.change,
          "KLGD(Triệu)": new Intl.NumberFormat().format(data.allQty / 1000000),
          "GTGD(Tỷ)": new Intl.NumberFormat("de-DE").format(data.totalValue / 1000000),
          "CK Tăng/Giảm": data.advances,
        };
      })
    );
  }

  const columnDefs = [
    {
      field: "Chỉsố",
      sortable: true,
      width: 100,
     
      cellStyle: {
        color: "var(--color-theme-text-tertiary)",
      },
    },
    {
      field: "Điểm",
      width: 90,
      sortable: true,
      cellStyle: {
        color: "rgb(11, 223, 57)",
      },
    },
    { field: "<+/->", width: 90, sortable: true },
    {
      field: "KLGD(Triệu)",
      width: 100,
      sortable: true,
      cellStyle: {
        color: "var(--color-theme-text-tertiary)",
      },
    },
    {
      field: "GTGD(Tỷ)",
      width: 100,
      sortable: true,
      cellStyle: {
        color: "var(--color-theme-text-tertiary)",
      },
    },
    {
      field: "CK Tăng/Giảm",
      width: 150,
      sortable: true,
    },
  ];

  return (
    <>
      <div
        className="col-span-5 xl:col-span-4 bg-theme-secondary overscroll-x-none h-full flex flex-col ag-theme-alpine"
        style={{ borderRadius: 5 }}
      >
        <div className="index-table h-full w-full flex flex-col bg-secondary rounded relative">
          <div className="main " style={{ height: 195, width: "100%" }}>
            <button className="absolute top-1 z-10 p-1 text-theme-text-tertiary hover:text-color-highlight"><AiTwotoneSetting /></button>
            <AgGridReact
              rowData={data}
              // columnDefs={columnDefs}
              rowDragManaged={true}
              rowDragEntireRow={true}
              rowDragMultiRow={true}
              rowSelection={"multiple"}
              animateRows={true}
            ></AgGridReact>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxIndex;
