"use client";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { useState } from "react";
import Icon from "@/components/icons/lucide";
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
                <Icon name="user" />
            )}
        </div>
    );
}
