
import "./App.css";
import React from "react";
import Banner from './Banner';
import HomePage from './component/HomePage';
import AboutPage from './component/AboutPage';
import ProductPage from './component/ProductPage';
import RedirectedPage from './component/RedirectedPage';
import Footer from "./Footer";
import Count from './component/Count';
import Todolist from './Todolist';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Banner />
        <ul className="header">
          <li className="header-item">
            <NavLink to="/" activeClassName="active-header-item">
              Home
            </NavLink>
          </li>
          <li className="header-item">
            <NavLink to="/about" activeClassName="active-header item">About</NavLink>
          </li>
          <li className="header-item">
            <NavLink to="/product" activeClassName="active-header item">
              Product
            </NavLink>
          </li>
          <li className="header-item">
            <NavLink
              to="/redirected"
              activeClassName="active-header-item"
            >
              Redirected
            </NavLink>
          </li>
          <li className="header-item">
            <NavLink
              to="/count"
              activeClassName="active-header-item"
            >
              CountDown
            </NavLink>
          </li>
          <li className="header-item">
            <NavLink
              to="/todo"
              activeClassName="active-header-item"
            >
              TodoList
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path="/redirected" element={<RedirectedPage />} />
          <Route path="/count" element={<Count />} />
          <Route path="/todo" element={<Todolist />} />
        </Routes >
      </div >
      <Footer />
    </BrowserRouter>
  );
}
export default App;

