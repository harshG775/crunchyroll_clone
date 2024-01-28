import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./PrivateRoute.jsx";
import AppLayout from "./layouts/AppLayout.jsx";
import PageNotFound from "./components/pages/notFound/PageNotFound.jsx";
import Home from "./pages/home/Home.jsx";
import SearchResult from "./pages/search/SearchResult.jsx";
import Overview from "./pages/overview/Overview.jsx";

// *login
import SignUp from "./pages/signUp/SignUp.jsx";
import LogIn from "./pages/logIn/LogIn.jsx";
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
				},
				{
					path: "overview/:media_type/:id/player",
					element: <PrivateRoute components={{ superAdmin: "SuperAdmin_component", admin: "Admin_component", user: "User_component", }} />,
				},

				{
					path: "sign-up",
					element: <SignUp/>,
				},
				{
					path: "login",
					element: <LogIn/>,
				},
			],
		},
		{
			path: "*",
			element: <PageNotFound />,
		}
	]);
	return <RouterProvider router={Routes} />;
}
