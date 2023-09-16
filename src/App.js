import React from "react";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

//Import of pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import News from "./Pages/News";
import NewsArticle from "./Pages/NewsArticle";
import Login from "./Pages/Login";
import Help from "./Pages/Help";
import Courses from "./Pages/Courses";
import Course from "./Pages/Course";
import Blog from "./Pages/Blog";
import BlogArticle from "./Pages/BlogArticle";
import NotFound from "./Pages/NotFound";



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
            element={<About />} // Done
          />
          <Route
            path="/contact"
            element={<Contact />} // Done
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
            path="/help"
            element={<Help />} // Done
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
