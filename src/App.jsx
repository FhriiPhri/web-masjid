import { BrowserRouter, Routes, Route } from "react-router-dom";
import MasjidNurulHuda from "./main/MasjidNurulHuda";
import GalleryPage from "./main/GalleryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MasjidNurulHuda />} />={" "}
        <Route path="/gallery" element={<GalleryPage />} />={" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;