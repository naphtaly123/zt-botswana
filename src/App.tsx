import Footer from "./components/footer";
import Nav from "./components/nav";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from "./components/scroll-to-top";
import JoinUs from "./pages/JoinUs";


function App() {
  return (
    <Router> 
      <Nav />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/join-us" element={<JoinUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
