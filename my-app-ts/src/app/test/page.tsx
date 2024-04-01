// export default async function page({
//     searchParams,
// }: {
//     searchParams: { sidebar: boolean };
// }) {
//     return <div>Test:{searchParams.sidebar ? "true" : "false"}</div>;
// }

// "use client";

// import { useStore } from "@/store/StoreProvider";
// import storeAction from "@/store/storeAction";

// export default function Test() {
//     const [state, dispatch] = useStore();
//     console.log(state);
//     return (
//         <div
//             onClick={() => {
//                 dispatch({
//                     type: storeAction.TOGGLE_SIDEBAR,
//                     payload: !state.isSidebarOpen,
//                 });
//             }}
//         >
//             Test:{state.isSidebarOpen ? "true" : "false"}
//         </div>
//     );
// }


import React from 'react'

export default function page() {
  return (
    <div>
            <iframe src="https://vidsrc.xyz/embed/movie?tmdb=823464" className="w-full h-full aspect-video" frameBorder="0" referrerPolicy="origin" allowFullScreen></iframe>
            
      
    </div>
  )
}
