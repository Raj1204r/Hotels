const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/db';

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => console.log('🟢 MongoDB connected'));
db.on('error', (err) => console.log('🔴 MongoDB error:', err));
db.on('disconnected', () => console.log('🟡 MongoDB disconnected'));

module.exports = db;
