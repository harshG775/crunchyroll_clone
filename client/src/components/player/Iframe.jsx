export default function Iframe(props) {
	return (
		<iframe
			src={props.src}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full aspect-video"
			allowFullScreen
            ></iframe>
	);
}
