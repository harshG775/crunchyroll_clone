"use client";
import Link from "next/link";
import { I } from "@/components/iconify/I";
import { getCookies } from "cookies-next";
import useClient from "@/hooks/useClient";

export default function UserProfileCard() {
    const token =useClient(() => getCookies("token"))
	return (
		<div className="flex gap-2 px-2">
			{!token ? (
				<>
					<Link
						className="px-4 py-2 rounded-lg bg-indigo-500 text-white font-semibold"
						href={"/sign-up"}>
						SignUp
					</Link>
				</>
			) : (
				<I icon="mingcute:user-4-fill" />
			)}
		</div>
	);
}
