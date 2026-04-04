// src/App.js
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";
import CoursePage from "./CoursePage";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Layout from "./components/Layout";
import { HelmetProvider } from "react-helmet-async";
import NavbarComp from "./components/NavbarComp";
import Footer from "./components/Footer/Footer";
import GraphicsPage from "./GraphicsPage";
import ContactNew from "./components/Contact/ContentNew";
import ThankYou from "./components/ThnakYou/ThankYou";
import BlogPage from "./components/Blog/BlogPage";

function App() {
  const location = useLocation();

  return (
    <HelmetProvider>
      <Layout>
        {/* <NavbarComp /> */}
        
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/courses" exact element={<CoursePage />} />
  
          <Route path="/contact-us" exact element={<ContactNew />} />
          <Route path="/graphics-design-course" exact element={<GraphicsPage />} />
          <Route path="/blog" exact element={<BlogPage/>} />
          
          <Route path="/thankyou" exact element={<ThankYou/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer/> */}
        
      </Layout>
    </HelmetProvider>
  );
}

export default App;
