const mongoose = require('mongoose')

const campingsSchema = new mongoose.Schema(
  {
    HName: {
        type: String,
        require: true
    },
    Time: {
        type: String,
        require: true
    },
    Venue: {
        type: String,
        require: true
    },
    CNumber: {
        type: String,
        require: true
    },
    Date: {
        type: Date,
        require: true
    },
    Description: {
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

const Camping = mongoose.model('Campings_Details', campingsSchema)

module.exports = Camping;