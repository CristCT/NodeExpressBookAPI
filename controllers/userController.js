import userModel from '../models/userModel.js';
const { users } = userModel;

// Task 6: Register New user
function registerUser(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send('Username and Password are required');
    }

    if (users.find(u => u.username === username)) {
        return res.status(400).send('Username already taken');
    }

    const newUser = { id: users.length + 1, username, password };
    users.push(newUser);

    res.status(201).json({ message: "User registered successfully!", userId: newUser.id });
}

// Task 7: Login as a Registered user
function loginUser(req, res) {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ message: "Logged in successfully!" });
    } else {
        res.status(401).send('Invalid credentials');
    }
}

export {
    registerUser,
    loginUser
};