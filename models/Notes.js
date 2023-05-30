const mongoose = require('mongoose');

const notesSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
    },
    tag: {
        type: String,
        default: "General"
    },
    Date: {
        type: Date,
        dafault: Date.now
    }
})
module.exports = mongoose.model("notes", userSchema)
