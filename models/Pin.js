const mongoose = require("mongoose")

const PinSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String,
    lalitude: Number,
    longitude: Number,
    author: { type: mongoose.Schema.ObjectId, ref: "User" },
    comments: [
        {
            text: String,
            createdAt: { type: Date, dafault: Date.now},
            author: { type: mongoose.Schema.ObjectId, ref: "User" }
        }
    ],
}, {timestamps: true})

module.exports = mongoose.model("Pin", PinSchema)
