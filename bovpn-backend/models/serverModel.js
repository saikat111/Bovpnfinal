const mongoose = require('mongoose');

const serverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    capacity: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const Server = mongoose.model('Server', serverSchema);

module.exports = Server;
