import Link from "next/link";

export default function NotFoundPage() {
	return (
		<div className="grid place-content-center min-h-screen">
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href="/">Return Home</Link>
		</div>
	);
}
