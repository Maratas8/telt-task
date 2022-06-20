import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewUser from "./pages/NewUser";
import NewCategory from "./pages/NewCategory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/new-user" element={<NewUser />} />
          <Route path="/new-category" element={<NewCategory />} />
          <Route path="/*" element={<NewUser />} />
        </Routes>        
      </BrowserRouter>
    </div>
  );
}

export default App;
