export default function Iframe({key=0,src}) {
	return (
		<iframe
            key={key}
			src={src}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full aspect-video"
			allowFullScreen
            ></iframe>
	);
}
