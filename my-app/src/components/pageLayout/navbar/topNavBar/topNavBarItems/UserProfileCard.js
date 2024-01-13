import Link from "next/link";
import { I } from "@/components/iconify/I";
import { cookies } from "next/headers";

export default async function UserProfileCard() {
    const cookiesStore = cookies()
    const token = cookiesStore.get("token")
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
