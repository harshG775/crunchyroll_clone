export default function Title_MediaType({ media_type }) {
	return (
		<div className="p-4">
			<h1 className="text-right text-lg leading-6 font-medium text-gray-100">
				{media_type === "movie" ? "Movies" : "Tv Shows"}
			</h1>
		</div>
	);
}
