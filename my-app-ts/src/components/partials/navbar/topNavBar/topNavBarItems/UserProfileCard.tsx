"use client";
import Link from "next/link";
import { I } from "@/components/icons/iconify/I";
import Button from "@/components/ui/Button";
import { useState } from "react";
export default function UserProfileCard() {
    const [token, setToken] = useState("");
    // useEffect(()=>{
    //     setToken(getCookies("token") || )
    // })
    return (
        <div className="flex gap-2 px-2">
            {!token ? (
                <Link href={"/sign-up"}>
                    <Button>SignUp</Button>
                </Link>
            ) : (
                <I icon="mingcute:user-4-fill" />
            )}
        </div>
    );
}
