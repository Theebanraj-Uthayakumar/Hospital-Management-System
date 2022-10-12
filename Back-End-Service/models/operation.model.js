const mongoose = require('mongoose')

const operationSchema = new mongoose.Schema(
  {
    OName: {
        type: String,
        require: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
    Time: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    DName: {
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

const Operation = mongoose.model('Operation_Details', operationSchema)

module.exports = Operation;