import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes.jsx";
import "./global.css";

import ContextProvider_db from "./store/ContextProvider_db.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider_db>
			<AppRoutes />
		</ContextProvider_db>
	</React.StrictMode>
);
