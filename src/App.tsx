import { Route, Routes } from "react-router-dom";
import {Navigtion} from "./components/Navigtion";
import { AboutPage } from "./pages/AboutPage";
import { Cart } from "./pages/Cart";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProductsPage } from "./pages/ProductsPage";



function App() {
    return(
        <>
            <Navigtion />
            <Routes>
                <Route path="/" element={<ProductsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    )
}

export default App;
