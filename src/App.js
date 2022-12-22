import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import PrivateComponent from "./component/PrivateComponent";
import AddProduct from "./component/AddProduct";
import ProductList from "./component/ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<h1> Update Product</h1>} />
            <Route path="/profile" element={<h1> Profile</h1>} />
            <Route path="/home" element={<h1> Home</h1>} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
