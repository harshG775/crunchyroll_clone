"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { Icon } from "@iconify/react";
export default function SearchBox() {
	const [QInput, setQInput] = useState("");
	const router = useRouter();

	const searchSubmitHandle = (e) => {
		e.preventDefault();
		if (QInput.trim() !== "") {
			router.push(`search/q/${QInput.replace(" ", "+").toLowerCase()}`);
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
				className="flex items-center justify-end relative p-1 px-2 ">
				<input
					className=" transition-[width] duration-300 ease-out w-[50%] focus:w-[85%] px-4 py-1 rounded-l-full border-2 border-gray-400 "
					type="search"
					placeholder="Search"
					value={QInput}
					onChange={(e) => setQInput(e.target.value)}
				/>
				<button
					className="space-x-4 text-2xl p-1 rounded-r-full bg-gray-300 text-white border-2 border-l-0 border-gray-400"
					type="submit">
					<Icon icon="material-symbols:search" />
				</button>
			</form>
		</>
	);
}
