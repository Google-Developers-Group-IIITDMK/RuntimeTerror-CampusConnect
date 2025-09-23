const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// --- MIDDLEWARE SETUP ---
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// --- 1. CONNECT TO MONGODB ---
const mongoURI = "mongodb+srv://divyanshthakur594_db_user:3ArFKkn0yF7eWRmG@cluster1.ih2n0bg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

mongoose.connect(mongoURI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// --- 2. UPDATE THE USER SCHEMA AND MODEL ---
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Email should be unique
  password: { type: String, required: true },
  college: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// --- 3. UPDATE THE SIGNUP ENDPOINT ---
app.post('/signup', async (req, res) => {
  try {
    // Get all the new fields from the request body
    const { fullName, email, password, college } = req.body;

    // Check if a user with that email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('An account with this email already exists.');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the new user with all fields
    const newUser = new User({ 
        fullName, 
        email, 
        password: hashedPassword, 
        college 
    });
    await newUser.save();

    res.status(201).send('User created successfully!');
  } catch (error) {
    console.error(error); // Log the actual error on the server
    res.status(500).send('Server error.');
  }
});

// UPDATE YOUR LOGIN ENDPOINT TO USE EMAIL INSTEAD OF USERNAME
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body; // Changed from username to email
        const user = await User.findOne({ email }); // Find by email
        if (!user) {
            return res.status(400).send('Invalid credentials.');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid credentials.');
        }
        res.status(200).send('Login successful!');
    } catch (error) {
        res.status(500).send('Server error.');
    }
});


// --- START THE SERVER ---
app.listen(port, () => {
  console.log(`👂 Server is listening on http://localhost:${port}`);
});
