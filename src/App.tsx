import { Route, Routes } from "react-router-dom";
import { Navigtion } from "./components/Navigtion";
import { AboutPage } from "./pages/AboutPage";
import { Cart } from "./pages/cart/Cart";
import Login from "./components/login/Login";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProductsPage } from "./pages/ProductsPage";
import { useState } from "react";
import { EmptyCart } from "./components/emptyCart/EmptyCart";
import { ICart } from "./models";



function App() {
    const [cart, setCart] = useState<ICart[]>([]);

    const addToCart = ({ id, title, price, image }: ICart) => {
        setCart(prev => {
            return [...prev, {
                id,
                title,
                price,
                image,
            }]
        })
    }
    return (
        <>
            <Navigtion cart={cart}/>
            <Routes>
                <Route path="/" element={<ProductsPage addToCart={addToCart}/>} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/cart" element={cart.length > 0 ? <Cart cart={cart} /> : <EmptyCart />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    )
}

export default App;
