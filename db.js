const mongoose = require('mongoose');
require("dotenv").config(); 

const mongoURl = process.env.MONGO_URI;
const mongoURL = process.env.MONGO_URI_LOCAL;


mongoose.connect(mongoURl);

const db = mongoose.connection;

db.on('connected', () => console.log('🟢 MongoDB connected'));
db.on('error', (err) => console.log('🔴 MongoDB error:', err));
db.on('disconnected', () => console.log('🟡 MongoDB disconnected'));

module.exports = db;
