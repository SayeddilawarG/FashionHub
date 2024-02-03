import AddProduct from "./Components/AddProduct/AddProduct";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ProductList from "./Components/ProductList/ProductList";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
        <Route path="/AddProduct" element = {<AddProduct/>}/>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/AddProduct/:id" element={<AddProduct/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
