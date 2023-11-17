import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PriceBoard from "./pages/PriceBoard";
import Nopage from "./pages/Nopage";
import Layout from "./Layouts/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PriceBoard />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
