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
            element={<Home />} 
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/news"
            element={<News />}
          />
          <Route
            path="/news/:id"
            element={<NewsArticle />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/help"
            element={<Help />}
          />
          <Route  
            path="/courses"
            element={<Courses />}
          />
          <Route
            path="/courses/:id"
            element={<Course />}
          />
          <Route
            path="/blog"
            element={<Blog />}
          />
          <Route
            path="/blog/:id"
            element={<BlogArticle />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
