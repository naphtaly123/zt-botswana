import Footer from "./components/footer";
import Nav from "./components/nav";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scroll-to-top";
import JoinUs from "./pages/JoinUs";

import ReactLenis from "lenis/react";
import { Toaster } from 'react-hot-toast';
import Services from "./pages/Services";
import NotFound from "./components/not-found";

function App() {
  return (
    <ReactLenis root>
      <Router>
        <Toaster position="top-center" toastOptions={{duration: 3000}}/>
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/join-us" element={<JoinUs />} />
          {/*If not found*/}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </Router>
    </ReactLenis>
  );
}

export default App;
