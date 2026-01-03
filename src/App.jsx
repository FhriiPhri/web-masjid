import { BrowserRouter, Routes, Route } from "react-router-dom";
import MasjidNurulHuda from "./main/MasjidNurulHuda";
import GalleryPage from "./main/GalleryPage";
import KajianRutin from "./main/Kajian";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MasjidNurulHuda />} />={" "}
        <Route path="/gallery" element={<GalleryPage />} />={" "}
        <Route path="/kajian" element={<KajianRutin />} />={" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;