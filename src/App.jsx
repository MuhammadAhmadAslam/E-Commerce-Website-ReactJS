import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Importing styles and scripts
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "boxicons/css/boxicons.min.css";
import "./App.css";

// Importing pages and components
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";


// Importing hooks and animations
import { useContext, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SearchBar from "./components/SearchBar";
import { ShopContext } from "./context/ShopContext";
import Dashboard from "./pages/Dashboard";
import AllProducts from "./pages/AllProducts";
import PendingOrders from "./pages/PendingOrders";
import CompletedOrders from "./pages/CompletedOrders";
import LatestProduct from "./pages/LatestProduct";
import TrendingProducts from "./pages/TrendingProducts";
import Header from "./components/Header";
import SingleCategoryDetail from "./pages/SingleCategoryDetails";


function App() {
	// Get current location
	const location = useLocation();
	const { pathname } = location;
	const {activeSearch} = useContext(ShopContext);

	// Scroll to top on route change
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);


	return (
		<div className="App">
		<Header />
			<Navbar />
			{activeSearch && <SearchBar />}
			
			<AnimatePresence>
				{/* Render routes with animations */}
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/collection" element={<Collection />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/admin-panel" element={<AdminPanel />} />
					<Route path="dashboard/admin" element={<Dashboard />} />
					<Route path="/cart" element={<ShoppingCart />} />
					<Route path="/products/:productId" element={<ProductDetails />} />
					<Route path="/product/:productName" element={<SingleCategoryDetail />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/dashboard/admin/products" element={<AllProducts />} />
					<Route path="/dashboard/admin/pending-orders" element={<PendingOrders />} />
					<Route path="/dashboard/admin/completed-orders" element={<CompletedOrders />} />
					<Route path="dashboard/admin/latest-products" element={<LatestProduct />} />
					<Route path="dashboard/admin/trending-products" element={<TrendingProducts />} />
				</Routes>
			</AnimatePresence>

			<Footer />
		</div>
	);
}

export default App;
