const mongoose = require('mongoose')

const doctorsSchema = new mongoose.Schema(
  {
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
    // avatar: {
    //   type: String,
    //   require: false
    // },
    // cloudinary_id: {
    //   type: String,
    //   require: false
    // },
  },
  {
    timestamps: false,
    versionKey: false,
  }
)

const Doctors = mongoose.model('Doctors_Details', doctorsSchema)

module.exports = Doctors;