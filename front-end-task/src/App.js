import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewUser from "./pages/NewUser";
import NewCategory from "./pages/NewCategory";
import { useState, createContext } from "react";

export const CategoryContext = createContext();

function App() {
  const [categoryList, setCategoryList] = useState(["Black", "White"]);
  return (
    <CategoryContext.Provider value={{ categoryList, setCategoryList }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/new-user" element={<NewUser />} />
            <Route path="/new-category" element={<NewCategory />} />
            <Route path="/*" element={<NewUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CategoryContext.Provider>
  );
}

export default App;
