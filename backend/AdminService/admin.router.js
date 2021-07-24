const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../UserService/user.model.js");
const Admin = require("./admin.model.js");
const auth = require("./Middlewares/auth.js");

router.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(400).json({ errorMessage: "Please enter all fields" });
        if (password.length < 6)
            return res.status(400).json({ errorMessage: "Please enter password of length more than 6 chars" });

        const existingAdmin = await Admin.findOne({ email: email });

        if (existingAdmin)
            return res.status(400).json({ errorMessage: "User already exists" });

        //password hashing
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newAdmin = new Admin({
            email: email,
            password: password,
            passwordHash: passwordHash
        });

        const savedAdmin = await newAdmin.save();

        const token = jwt.sign({
            user: savedAdmin._id,
            email: savedAdmin.email
        }, process.env.JWT_SECRET)

        res.cookie("AdminToken", token, {
            httpOnly: true
        }).send();
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }
})

router.post("/register/user", auth, async (req, res) => {
    try {
        const { email, password } = req.body;
        const adminInfo = req.adminInfo;

        const existingAdmin = await Admin.findOne({ email: adminInfo.email });
        existingAdmin.userInfo.push(email)
        const newUserDetail = {
            count: existingAdmin.userCount + 1,
            users: existingAdmin.userInfo
        }

        //password hashing
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            email: email,
            password: password,
            passwordHash: passwordHash,
            createdBy: adminInfo.email
        });

        const savedUser = await newUser.save();
        const updateAdmin = await Admin.updateOne({ email: adminInfo.email }, { userCount: newUserDetail.count, userInfo: newUserDetail.users })

        res.json({ message: "Success" });
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }
})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(400).json({ errorMessage: "Please enter all fields" });

        const existingAdmin = await Admin.findOne({ email: email });

        if (!existingAdmin)
            return res.status(401).json({ errorMessage: "Invalid email or password" });

        const isPasswordValid = bcrypt.compare(password, existingAdmin.passwordHash);

        if (!isPasswordValid)
            return res.status(401).json({ errorMessage: "Invalid email or password" });

        const token = jwt.sign({
            user: existingAdmin._id,
            email: existingAdmin.email
        }, process.env.JWT_SECRET);

        res.cookie("AdminToken", token, {
            httpOnly: true
        }).send();

    } catch (e) {
        console.error(e);
        res.status(500).send();
    }
});

router.get("/userList", auth, async (req, res) => {
    try {
        const adminInfo = req.adminInfo;
        const admin = await Admin.findOne({ email: adminInfo.email });
        // console.log(adminInfo)
        // console.log(admin);
        res.json(admin.userInfo);
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

router.get("/logout", (req, res) => {
    res.cookie("AdminToken", "", {
        httpOnly: true,
        expires: new Date(0)
    }).send();
});

router.get("/loggedIn", (req, res) => {
    try {
        const token = req.cookies.AdminToken;
        if (!token) return res.json(false);
        jwt.verify(token, process.env.JWT_SECRET);

        res.send(true);
    } catch (err) {
        res.json(false);
    }
});

module.exports = router;