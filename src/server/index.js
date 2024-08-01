const express = require('express');
const mongoose = require("mongoose")
const cors = require("cors");
const PasteModel = require("./models/PasteModel")
const port = 3001;
const database = "mongodb://localhost:27017/paste";


const app = express();
app.use(cors({origin: "*"}));
app.use(express.json());
mongoose.connect(`${database}`).then(res => {console.log("database connected successfully")})

app.post('/Paste', (req, res) => {
	//console.log(req.body);
	if (!req.body.paste) {
		return res.status(400).json({message: "Paste content is required"})
	}
	console.log(req.body.delay);
	const delay = parseInt(req.body.delay);
	if (delay === 3) {
		req.body.expiresAt = new Date(Date.now() + 60000)
	}else if (delay === 1) {
		req.body.expiresAt = new Date(Date.now() + 3600000)
	} else if (delay === 2) {
		req.body.expiresAt = new Date(Date.now() + 7200000)
	} else if (delay=== 24) {
			req.body.expiresAt = new Date(Date.now() + 86400000)
		} else if (delay === 168) {
			req.body.expiresAt = new Date(Date.now() + 604800000)
		} else {
			req.body.expiresAt = null
		}
	PasteModel.create(req.body)
		.then(paste => {
			console.log(paste);
			res.json(paste)
		})
		.catch(err => res.json(err))
})

app.get('/paste/:id', (req, res) => {
	PasteModel.findById(req.params.id)
		.then(paste => {
			if(paste.expiresAt === null) {
				res.json(paste)
			}
			else if (paste.expiresAt > Date.now()) {
				res.json(paste)
			}
			else {
				PasteModel.findByIdAndDelete(req.params.id);
				res.json(null)
			}
		})
})
app.delete('/paste/:id', (req, res) => {
	PasteModel.findByIdAndDelete(req.params.id)
		.then(paste => res.json(paste))
		.catch(err => res.status(404).json(err))
})
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})