import AddProduct from "./Components/AddProduct";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
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
    </div>
  );
}

export default App;
