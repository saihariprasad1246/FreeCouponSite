//import { useState } from 'react'
/*import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Coupondescription from './Pages/Coupondescription'
import PageNotFound from './Pages/PageNotFound'
import CategoryCoupons from './Pages/CategoryCoupons'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      <Navbar />
        <Routes>
       
          <Route path="/" element={<Home />} />
          <Route exact path="/:category/:couponname" element={<Coupondescription />} />
          <Route exact path="/category/:categoryname" element={<CategoryCoupons />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        
        </div>
        
         
    </>
  )
}

export default App */


import React from "react";
import { Routes, Route } from "react-router-dom";
import Coupondescription from "./Pages/Coupondescription";
import PageNotFound from "./Pages/PageNotFound";
import CategoryCoupons from "./Pages/CategoryCoupons";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="relative min-h-screen bg-white-900 text-white">
      {/* Navbar Hovering Over Content */}
      <div className="absolute w-full z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="pt-20"> {/* Adjusted padding to prevent content from hiding behind navbar */}
        <Routes>
          <Route exact  path="/" element={<Home />} />
          <Route exact path="/description/:id" element={<Coupondescription />} />
          <Route exact path="/category/:category" element={<CategoryCoupons />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

