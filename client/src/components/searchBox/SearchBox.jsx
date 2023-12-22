import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchBox() {
	const [QInput, setQInput] = useState("");
	const navigate = useNavigate();

	const searchSubmitHandle = (e) => {
		e.preventDefault();
		if (QInput.trim() !== "") {
			navigate(`search/q/${QInput.replace(" ", "+").toLowerCase()}`);
		} else {
			console.log("Input is empty. Search not allowed.");
		}
		setQInput("");
	};
	return (
		<>
			<form
				action="/"
				onSubmit={searchSubmitHandle}
			>
				<input
					type="text"
					placeholder="Search"
					value={QInput}
					onChange={(e) => setQInput(e.target.value)}
				/>
				<button type="submit">search</button>
			</form>
		</>
	);
}
