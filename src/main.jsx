import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
	<CartContextProvider>
		<ShopContextProvider>
			<App />
		</ShopContextProvider>
	</CartContextProvider>
	</BrowserRouter>
);
