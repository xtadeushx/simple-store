import { Route, Routes } from "react-router-dom";
import Navigtion from "./components/Navigtion";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from "./pages/ProductsPage";



function App() {
    return(
        <>
            <Navigtion />
            <Routes>
                <Route path="/" element={<ProductsPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </>
    )
}

export default App;
