import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Obrigado from "./Obrigado/Obrigado";

import SvgFilters from "./components/SvgFilters";

function App() {
  return (
    <>
      <SvgFilters />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/obrigado" element={<Obrigado />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
