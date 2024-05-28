import { useState } from 'react';
import './App.css';
import Signup from "./components/signup/signup";
import Home from "./components/home/home";
import Footer from './components/footer/footer';
import Header from './components/header/headerFile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from './components/signin/signin';
import Review from './components/review/Review';
import AboutPage from './components/about/about';


function App() {
  return (
    <>
       
      <Router>
        <Header/>
				<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/review" element={<Review/>}/>
            <Route path="/about" element={<AboutPage/>}/>
				</Routes>
        <Footer/>
			</Router>
      
      

      

    </>
  );
};

export default App;
