import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "../styles/AppLayout.css";
import TopNavbar from "../components/pagelayout/navbar/TopNavbar";
export default function AppLayout() {
	const location = useLocation();
	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, [location]);
	return (
		<div className="dashboard-wrapper">
			<Suspense fallback={"<LoadingScreen />"}>
				<header className="dashboard-top-navbar">
					<TopNavbar />
				</header>
				<section className="dashboard-side-navbar hidden-sidebar">
					<nav>
						<ul>
							<li>
								<a href="/home">Home</a>
							</li>
							<li>
								<a href="/movies">Movies</a>
							</li>
							<li>
								<a href="/tv">Tv</a>
							</li>
							<li>
								<a href="/search">Search</a>
							</li>
						</ul>
					</nav>
				</section>
				<div className="dashboard-main-body bg-neutral-900 text-neutral-50  grid grid-rows-[1fr_auto]">
					<main>
						<Outlet />
					</main>
					<footer>footer</footer>
				</div>
			</Suspense>
		</div>
	);
}
