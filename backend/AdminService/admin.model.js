const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    passwordHash:{
        type: String,
        required: true,
    },
    userCount:{
        type: Number,
        default: 0
    },
    userInfo:{
        type: Array,
        default: []
    }
})

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;