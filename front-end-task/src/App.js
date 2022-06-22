import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewUser from "./pages/NewUser";
import NewCategory from "./pages/NewCategory";
import { useState, createContext } from "react";
import { categories, usersList } from "./data";
import UsersByCategory from "./pages/UsersByCategory";

export const CategoryContext = createContext();
export const UserContext = createContext();

function App() {
  const [categoryList, setCategoryList] = useState(categories);
  const [users, setUsers] = useState(usersList);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <CategoryContext.Provider value={{ categoryList, setCategoryList }}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/new-user" element={<NewUser />} />
              <Route path="/new-category" element={<NewCategory />} />
              {categoryList.map((category, index) => (
                <Route
                  key={index}
                  path={`/${category.categoryName}`}
                  element={
                    <UsersByCategory categoryName={category.categoryName} />
                  }
                />
              ))}

              <Route path="/*" element={<NewUser />} />
            </Routes>
          </BrowserRouter>
        </div>
      </CategoryContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
