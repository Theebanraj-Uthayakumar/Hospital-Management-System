const asyncHandler = require('express-async-handler');
const Camping = require("../models/camping.model");
const cloudinary = require("../utils/cloudinary");


// @desc    Create new Camping
// @route   POST /api/v1/doctor
// @access  Public
const addCamping = asyncHandler(async (req, res) => {
  try {
      // Upload image to cloudinary
      // const result = await cloudinary.uploader.upload(req?.file?.path);

      let category = new Camping({
        HName: req.body.HName,
        Time: req.body.Time,
        VENUE: req.body.VENUE,
        CNumber: req.body.CNumber,
        Gender: req.body.Gender,
        Date: req.body.Date,
        Description: req.body.Description,
        // avatar: result?.secure_url,
        // cloudinary_id: result?.public_id,
      });

      const savedCategory = await category.save();
      res.status(201).json(savedCategory);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
})

// @desc    Get docotrs by ID
// @route   GET /api/v1/docotrs/:id
// @access  Public
const getCampingById = asyncHandler(async (req, res) => {
  const camping = await Camping.findById(req.params.id);

  if (camping) {
    res.json(camping)
  } else {
    res.status(404)
    throw new Error('Camping not found')
  }
})

// @desc    Update camping
// @route   PUT /api/v1/camping/:id
// @access  Public
const updateCamping = asyncHandler(async (req, res) => {
  try {
    let camping = await Camping.findById(req.params.id);
    // Delete image from cloudinary
    // await cloudinary.uploader.destroy(camping.cloudinary_id);
    // Upload image to cloudinary
    // let result;
    // if (req.file) {
    //   result = await cloudinary.uploader.upload(req.file.path);
    // }
    const data = {
        HName: req.body.HName,
        Time: req.body.Time,
        VENUE: req.body.VENUE,
        CNumber: req.body.CNumber,
        Gender: req.body.Gender,
        Date: req.body.Date,
        Description: req.body.Description,
        // avatar: result.secure_url,
        // cloudinary_id: result.public_id,
    };
    camping = await Camping.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(camping);
  } catch (err) {
    console.log(err);
  }
})

// @desc    Get all Camping
// @route   GET /api/v1/camping
// @access  Public
const getAllCamping = asyncHandler(async (req, res) => {
    try {
        const camping = await Camping.find()
        res.status(200).json(camping)
    } catch (err) {
        res.json({ message: err });
    }
})

// @desc    Delete doctor
// @route   DELETE /api/v1/doctor/:id
// @access  Public
const deleteCamping = asyncHandler(async (req, res) => {
    const camping = await Camping.findById(req.params.id)
  
    if (camping) {
      // Delete image from cloudinary
      // await cloudinary.uploader.destroy(camping.cloudinary_id);

      await camping.remove()
      res.json({ message: 'Camping removed' })
    } else {
      res.status(404)
      throw new Error('Camping not found')
    }
})

module.exports = {
    addCamping,
    getCampingById,
    updateCamping,
    getAllCamping,
    deleteCamping
}
