import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      <Footer />
    </div>
  )
}
export default App;