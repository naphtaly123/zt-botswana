import Footer from "./components/footer";
import Nav from "./components/nav";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from "./components/scroll-to-top";


function App() {
  return (
    <Router> 
      <Nav />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
