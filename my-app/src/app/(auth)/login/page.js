import LoginForm from "@/components/pages/auth/login/LoginForm";
export default function page() {
    return (
        <div className="container mx-auto grid lg:grid-cols-2 lg:place-items-center lg:min-h-screen">
            <div className="p-4">Form brand</div>
            <div className="p-4 grid place-items-start mx-auto"><LoginForm/></div>
        </div>
    );
}