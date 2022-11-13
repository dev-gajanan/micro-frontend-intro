import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import "./index.scss";
import Header from "home/Header";
import Footer from "home/Footer"; 
import ProductDetails from "./components/ProductDetails/ProductDetails";

const App = () => (
  <Router>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
