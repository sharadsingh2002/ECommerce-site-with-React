import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import Carousel from "./components/Slider/Carousel2"
import Category from "./components/AllCategory/Category"
import NewProducts from "./components/New arrivals/NewProducts"
import Cart from "./components/Cart/Cart"
import ProductsDetails from "./components/ProductDetails/ProductsDetails"
import { CartProvider } from "./components/CartContext/CartContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {


  return (
    <CartProvider>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Carousel />
              <Category />
            </>
          } />
          <Route path="/new-products" element={<NewProducts />} />
          <Route path="/product/:id" element={<ProductsDetails />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App
