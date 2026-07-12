import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Wongkoesan from "../pages/Wongkoesan";
import SeblakSemar from "../pages/SeblakSemar";
import SyifaEco from "../pages/SyifaEco";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/won-dimsum" element={<Wongkoesan />} />
        <Route path="/seblak-semar" element={<SeblakSemar />} />
        <Route path="/syifa-eco" element={<SyifaEco />} />
      </Routes>
    </BrowserRouter>
  );
}