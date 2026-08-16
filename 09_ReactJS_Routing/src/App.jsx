import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Cohort from "./pages/Cohort";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import WebDevelopment from "./pages/WebDevelopment";
import DSA from "./pages/DSA";
import AI_ML from "./pages/AI_ML";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07070b] text-white selection:bg-fuchsia-500 selection:text-white">
      <NavBar />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productID" element={<ProductDetails />} />
        <Route path="/cohort" element={<Cohort />}>
          <Route path="webdevelopment" element={<WebDevelopment />}/>
          <Route path="dsa" element={<DSA />}/>
          <Route path="aiml" element={<AI_ML />}/>
        </Route>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      <Footer />
    </div>
  )
}
export default App;
