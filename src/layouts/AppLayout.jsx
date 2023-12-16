import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
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
		<div className="grid grid-cols-[8rem_1fr]">
			<Suspense fallback={"<LoadingScreen />"}>
				<header>Header</header>
				<main className="w-[calc(100vw-8rem)]">
					<Outlet />
				</main>
			</Suspense>
		</div>
	);
}
