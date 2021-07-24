const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./user.model.js");


router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(400).json({ errorMessage: "Please enter all fields" });

        const existingUser = await User.findOne({ email: email });

        if (!existingUser)
            return res.status(401).json({ errorMessage: "Invalid email or password" });

        const isPasswordValid = bcrypt.compare(password, existingUser.passwordHash);

        if (!isPasswordValid)
            return res.status(401).json({ errorMessage: "Invalid email or password" });

        const token = jwt.sign({
            user: existingUser._id,
            email: existingUser.email
        }, process.env.JWT_SECRET);

        res.cookie("UserToken", token, {
            httpOnly: true
        }).send();

    } catch (e) {
        console.error(e);
        res.status(500).send();
    }
});

router.get("/logout", (req, res) => {
    res.cookie("UserToken", "", {
        httpOnly: true,
        expires: new Date(0)
    }).send();
});

router.get("/loggedIn", (req, res) => {
    try {
        const token = req.cookies.UserToken;
        if (!token) return res.json(false);

        jwt.verify(token, process.env.JWT_SECRET);

        res.send(true);
    } catch (err) {
        res.json(false);
    }
});

module.exports = router;