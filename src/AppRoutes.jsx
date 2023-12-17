import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./layouts/AppLayout.jsx";
import PageNotFound from "./components/pages/notFound/PageNotFound.jsx";
import Home from "./pages/home/Home.jsx";
import SearchResult from "./pages/search/SearchResult.jsx";
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
					path: "about",
					element: "<About />",
				},
				{
					path: "search/q/:query",
					element: <SearchResult />,
				},
				{
					path: "overview/:media_type/:id",
					element: <Overview />,
				}
			],
		},
		{
			path: "*",
			element: <PageNotFound />,
		}
	]);
	return <RouterProvider router={Routes} />;
}
