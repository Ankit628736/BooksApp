import React from 'react';
import Home from './Components/Home';
import Courses from './Components/Courses';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import Details from './Components/Details';
import Search from './Components/Search';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail" element={<Details />} />
        <Route path="/search/:term" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
