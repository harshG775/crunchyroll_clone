import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./layouts/AppLayout.jsx";
import Home from "./pages/home/Home.jsx";
import Overview from "./pages/overview/Overview.jsx";
export default function AppRoutes() {
	const Routes = createBrowserRouter([
		{
			path: "/",
			element: <AppLayout />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "/about",
					element: "<About />",
				},
				{
					path: "/overview/:media_type/:id",
					element: <Overview />,
				}
			],
		},
	]);
	return <RouterProvider router={Routes} />;
}
