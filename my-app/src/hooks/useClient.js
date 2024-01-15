"use client";
import { useState, useEffect } from "react";
export default function useClient(callback) {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);
	if (isClient) {
		callback();
	}
}
