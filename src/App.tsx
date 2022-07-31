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
        if (cart.findIndex(el => el.id === id) !== -1) {
            let newCart = [...cart];
            newCart = newCart.map(el => {
                if (el.id === id) {
                    el.quantity = el.quantity + 1;
                }
                return el;
            });
            return setCart(newCart);
        }

        setCart(prev => {
            return [...prev, {
                id,
                title,
                price,
                image,
                quantity: 1,
            }]
        });
    }

    const plusQuantity = (id: number) => {
        setCart(prev => prev.map(el => {
            if (el.id === id) {
                el.quantity = el.quantity + 1;
            }
            return el;
        }))
    };
    
    const minusQuantity = (id: number) => {
        setCart(prev => prev.map(el => {
            if (el.id === id) {
                el.quantity = el.quantity - 1 <0 ? 0: el.quantity - 1;
            }
            return el;
        }))
    };

    const removeItemFromCart = (id: number) => {
        return setCart(prev => prev.filter(el => el.id !== id));
    }

    const removeAllItems = () => setCart([]);



    return (
        <>
            <Navigtion cart={cart} />
            <Routes>
                <Route path="/" element={<ProductsPage addToCart={addToCart} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/cart" element={cart.length > 0
                    ?
                    <Cart cart={cart}
                        removeItemFromCart={removeItemFromCart}
                        removeAllItems={removeAllItems}
                        plusQuantity={plusQuantity}
                        minusQuantity={minusQuantity}
                    />
                    : <EmptyCart />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    )
}

export default App;
