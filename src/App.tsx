import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Restrants from "./Pages/Restrants/Restrants";
import FoodList from "./Pages/FoodList/FoodList";


const App:FC = () => {
  


  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/service/:category' element={<Restrants/>}/>
      <Route path='/service/:category/:subcategory' element={<Restrants/>}/>
      <Route path='/service/:category/:subcategory/:twosubcategory' element={<Restrants/>}/>
      <Route path='/menu/:restrantId' element={<FoodList/>}/>
      <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
  );
};

export default App;