// export default async function page({
//     searchParams,
// }: {
//     searchParams: { sidebar: boolean };
// }) {
//     return <div>Test:{searchParams.sidebar ? "true" : "false"}</div>;
// }

"use client";

import { useStore } from "@/store/StoreProvider";
import storeAction from "@/store/storeAction";

export default function Test() {
    const [state, dispatch] = useStore();
    console.log(state);
    return (
        <div
            onClick={() => {
                dispatch({
                    type: storeAction.TOGGLE_SIDEBAR,
                    payload: !state.isSidebarOpen,
                });
            }}
        >
            Test:{state.isSidebarOpen ? "true" : "false"}
        </div>
    );
}
