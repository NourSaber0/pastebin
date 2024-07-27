const mongoose = require("mongoose");
const PasteSchema = new mongoose.Schema({
	paste: String,
	delay: Number,
	expiresAt: Date
})

const PasteModel = mongoose.model("Paste", PasteSchema)

module.exports = PasteModel;