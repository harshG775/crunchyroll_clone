import express from "express";
const app = express();
app.use(express.json());

const users = [
	{
		id: 1,
		username: "john_doe",
		email: "john.doe@example.com",
		password: "securepassword1",
	},
	{
		id: 2,
		username: "jane_smith",
		email: "jane.smith@example.com",
		password: "securepassword2",
	},
	{
		id: 3,
		username: "alice_jones",
		email: "alice.jones@example.com",
		password: "securepassword3",
	},
	{
		id: 4,
		username: "bob_jackson",
		email: "bob.jackson@example.com",
		password: "securepassword4",
	},
	{
		id: 5,
		username: "emma_white",
		email: "emma.white@example.com",
		password: "securepassword5",
	},
];

app.post("/api/v1/signup", (req, res) => {
	const { username, email, password } = req.body;

	// Check if username or email already exists
	const existingUser = users.find(
		(user) => user.username === username || user.email === email
	);

	if (existingUser) {
		return res.status(400).json({
			success: false,
			message: "Username or email already exists",
		});
	}

	// Create a new user
	const newUser = {
		id: users.length + 1,
		username,
		email,
		password, // Note: In a real application, you should hash the password before storing it
	};

	users.push(newUser);

	res.status(201).json({
		success: true,
		message: "User successfully registered",
		user: {
			id: newUser.id,
			username: newUser.username,
			email: newUser.email,
		},
	});
});

app.post("/api/v1/login", (req, res) => {
	const { username, password } = req.body;

	// Find the user by username
	const user = users.find((user) => user.username === username);

	if (!user) {
		return res.status(404).json({
			success: false,
			message: "User not found",
		});
	}

	// Check if the password matches (In a real application, you should compare hashed passwords)
	if (user.password !== password) {
		return res.status(401).json({
			success: false,
			message: "Invalid username or password",
		});
	}

	res.status(200).json({
		success: true,
		message: "Login successful",
		user: {
			id: user.id,
			username: user.username,
			email: user.email,
		},
		token: "your_jwt_token_here", // In a real application, generate a JWT token here
	});
});

const port = 4001;
app.listen(port, () => {
	console.log(`Listening on port http://localhost:${port}`);
});
