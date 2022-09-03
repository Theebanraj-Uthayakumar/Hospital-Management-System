const mongoose = require('mongoose');

const DoctorsSchema = mongoose.Schema({
    DName: {
        type: String,
        require: true
    },
    Speci: {
        type: String,
        require: true
    },
    SLNC: {
        type: String,
        require: true
    },
    Exper: {
        type: String,
        require: true
    },
    Gender: {
        type: String,
        require: true
    },
    CPosistion: {
        type: String,
        require: true
    },
    WHospital: {
        type: String,
        require: true
    },
    WHistory: {
        type: String,
        require: true
    },
    selectedFile: String,
    // likeCont: {
    //     type: Number,
    //     default: 0
    // },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Doctors_Details', DoctorsSchema);