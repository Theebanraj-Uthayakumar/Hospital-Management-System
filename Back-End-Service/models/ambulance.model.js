const mongoose = require('mongoose')

const ambulanceSchema = new mongoose.Schema(
  {
    VNo: {
        type: String,
        require: true
    },
    VChassisno: {
        type: String,
        default: Date.now
    },
    DName: {
        type: String,
        require: true
    },
    DLicence: {
        type: String,
        require: true
    },
    DContactno: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    CTime: {
        type: String,
        require: true
    },
    CDate: {
        type: String,
        require: true
    }
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

const Ambulance = mongoose.model('Ambulance_Details', ambulanceSchema)

module.exports = Ambulance;