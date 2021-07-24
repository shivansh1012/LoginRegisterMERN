const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());

//cors
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));

//Links
app.use("/api/v1/admin", require("./AdminService/admin.router.js"));
app.use("/api/v1/user", require("./UserService/user.router.js"));
app.use("*", (req, res) => res.status(404).json({ error: "not found"}));

module.exports = app;