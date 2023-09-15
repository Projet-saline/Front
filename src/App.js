import React from "react";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

//Import of pages
import Home from "./Pages/Home";
import * as router from "react-router-dom";
import "./Style/Index.scss";
import About from "../src/Pages/About";
import {ContactUs} from "../src/Pages/ContactUs";
import News from "./Components/NewsSection";
import NewsArticle from "../src/Pages/NewsArticle";
import Login from "../src/Pages/Login";
import Courses from "../src/Pages/Courses";
import Course from "../src/Pages/Course";
import Blog from "../src/Pages/Blog";
import BlogArticle from "../src/Pages/BlogArticle";
import NotFound from "../src/Pages/NotFound";
import Frequentlyquestions from "./Pages/Frequentlyquestions";
  


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            exact path="/" 
            element={<Home />} // Done
          />
          <Route
            path="/about"
            element={<About />} // Maedeh
          />
          <Route
            path="/contact"
            element={<ContactUs />} // Maedeh
          />
          <Route
            path="/news"
            element={<News />} // Maedeh
          />
          <Route
            path="/news/:id"
            element={<NewsArticle />} // A faire
          />
          <Route
            path="/login"
            element={<Login />} // Done
          />
          <Route
            path="/faq"
            element={<Frequentlyquestions />} //Maedeh
          />
          <Route  
            path="/courses"
            element={<Courses />} //A faire
          />
          <Route
            path="/courses/:id"
            element={<Course />} // A faire
          />
          <Route
            path="/blog"
            element={<Blog />} // A faire
          />
          <Route
            path="/blog/:id"
            element={<BlogArticle />} // A faire
          />
          <Route
            path="*"
            element={<NotFound />} // Done
          />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
