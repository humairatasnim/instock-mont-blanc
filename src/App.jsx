import { BrowserRouter, Route, Routes } from "react-router-dom";
import UILibrary from "./pages/UILibrary/UILibrary";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* TEMPORARY: UI Library Route */}
        <Route path="/ui" element={<UILibrary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
