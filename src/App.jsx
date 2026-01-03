import { BrowserRouter, Routes, Route } from "react-router-dom";
import MasjidNurulHuda from "./main/MasjidNurulHuda";
import GalleryPage from "./main/GalleryPage";
import KajianRutin from "./main/Kajian";
import PengurusPage from "./main/PengurusPage";
import KontakPage from "./main/KontakPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MasjidNurulHuda />} />={" "}
        <Route path="/gallery" element={<GalleryPage />} />={" "}
        <Route path="/kajian" element={<KajianRutin />} />={" "}
        <Route path="/pengurus" element={<PengurusPage />} />={" "}
        <Route path="/kontak" element={<KontakPage />} />={" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;