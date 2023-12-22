import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
export default function LogIn() {
	const { register, handleSubmit } = useForm();
    const handleLogin = () => {
        
    }
	return (
        <section className="grid place-content-center min-h-screen">
            <div>
                <Link to="/"> LOGO </Link>
                <div className=" bg-white">
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <ul>
                            <li>
                                <label htmlFor="username">username</label>
                                <input type="text" placeholder="username" {...register("username")} />
                            </li>
                            <li>
                                <label htmlFor="password">password</label>
                                <input type="password" placeholder="password" {...register("password")} />
                            </li>
                            <li>
                                <button className="bg-gray-800 text-white px-4 py-2">login</button>
                            </li>
                            <li>
                                <label htmlFor="remember">remember</label>
                                <input type="checkbox" name="remember" id="remember" />
                            </li>
                        </ul>
                        <div>
                            <p>
                                create an account 
                                <Link className="text-blue-500" to="/sign-up">sign Up</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
	);
}
