"use client";
import Link from "next/link";
const getFormValue = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let fieldDataValue = {};
    for (let pair of formData.entries()) {
        fieldDataValue[pair[0]] = pair[1]; 
    }
    return fieldDataValue;
}
const register = ()=> {

}
export default function LoginForm() {
    const handleLogin = async (e) => {
        const data = getFormValue(e);
        // console.log(data);
    }

	return (
		<form onSubmit={handleLogin}>
			<ul className="p-4">
				<li>
					<label htmlFor="email">Email :</label>
					<input type="text" name="email" id="email" />
				</li>
				<li>
					<label htmlFor="password">Password :</label>
					<input type="password" name="password" id="password" />
				</li>
			</ul>
			<ul>
				<li>
					Forget Password{" "}
					<Link className="text-blue-500" href="/forget-password">Reset Password</Link>
				</li>
				<li>
					<button className="bg-blue-500 text-white px-4 py-1 rounded-md">Login</button>
				</li>
				<li>
					{"Don't"} have an account?{" "}
					<Link className="text-blue-500" href="/signup">Signup</Link>
				</li>
			</ul>
		</form>
	);
}
