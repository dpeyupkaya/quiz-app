const express = require('express');
const User = require('../models/User.js');
const bcrypt = require('bcryptjs')
const jwt  = require('jsonwebtoken')    
const middleware = require('../middleware/Middleware.js')

const router = express.Router()



router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body; 
        const user = await User.findOne({ email }); 
        if (user) {
            return res.status(401).json({ success: false, message: "User already exists" }); 
        }

        const hashPassword = await bcrypt.hash(password, 10); 
        const newUser = new User({
            name,
            email,
            password: hashPassword
        });

        await newUser.save(); 
        return res.status(201).json({ success: true, message: "Account created successfully" }); 
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ success: false, message: "Error in adding user" });
    }
});



router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ success: false, message: "User does not exist" });
      }
  
      const checkPassword = await bcrypt.compare(password, user.password);
      if (!checkPassword) {
        return res.status(401).json({ success: false, message: "Wrong credentials" });
      }
  
      const token = jwt.sign({ id: user._id }, "secretkeyofquizapp123@#", { expiresIn: "5h" });
      return res.status(200).json({
        success: true,
        token,
        user: { name: user.name },
        message: "Login successfully"
      });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ success: false, message: "Error in login server" });
    }

    
  });
  router.get('/verify', middleware, async (req, res) => {
    try {
      const userName = req.user.name; 
      return res.status(200).json({ success: true, user: userName });
    } catch (error) {
      return res.status(500).json({ success: false, message: "Error fetching user" });
    }
});




module.exports = router;
