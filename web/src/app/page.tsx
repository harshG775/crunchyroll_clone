import Link from "next/link";
export default function Root() {
  return (
    <main className="min-h-screen grid place-content-center text-center">
        <h1>Movix</h1>
        <Link className="text-2xl text-primary" href="/home">Home</Link>      
    </main>
  );
}
