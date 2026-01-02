import { BrowserRouter, Routes, Route } from "react-router-dom";
import MasjidNurulHuda from "./main/MasjidNurulHuda";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MasjidNurulHuda />} />={" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;