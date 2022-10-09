const asyncHandler = require('express-async-handler');
const Doctor = require("../models/doctor.model");
const cloudinary = require("../utils/cloudinary");


// @desc    Create new Doctor
// @route   POST /api/v1/doctor
// @access  Public
const addDoctor = asyncHandler(async (req, res) => {
  try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      let category = new Doctor({
        DName: req.body.DName,
        Speci: req.body.Speci,
        SLNC: req.body.SLNC,
        Exper: req.body.Exper,
        Gender: req.body.Gender,
        CPosistion: req.body.CPosistion,
        WHospital: req.body.WHospital,
        WHistory: req.body.WHistory,
        avatar: result.secure_url,
        cloudinary_id: result.public_id,
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
const getDoctorsById = asyncHandler(async (req, res) => {
  const doctors = await Doctor.findById(req.params.id);

  if (doctors) {
    res.json(doctors)
  } else {
    res.status(404)
    throw new Error('Doctor not found')
  }
})

// @desc    Update doctors
// @route   PUT /api/v1/doctors/:id
// @access  Public
const updateDoctors = asyncHandler(async (req, res) => {
  try {
    let doctors = await Doctor.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(doctors.cloudinary_id);
    // Upload image to cloudinary
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }
    const data = {
        DName: req.body.DName,
        Speci: req.body.Speci,
        SLNC: req.body.SLNC,
        Exper: req.body.Exper,
        Gender: req.body.Gender,
        CPosistion: req.body.CPosistion,
        WHospital: req.body.WHospital,
        WHistory: req.body.WHistory,
        avatar: result.secure_url,
        cloudinary_id: result.public_id,
    };
    doctors = await Doctor.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(doctors);
  } catch (err) {
    console.log(err);
  }
})

// @desc    Get all Doctor
// @route   GET /api/v1/doctors
// @access  Public
const getAllDoctors = asyncHandler(async (req, res) => {
    try {
        const doctors = await Doctor.find()
        res.status(200).json(doctors)
    } catch (err) {
        res.json({ message: err });
    }
})

// @desc    Delete doctor
// @route   DELETE /api/v1/doctor/:id
// @access  Public
const deleteDoctors = asyncHandler(async (req, res) => {
    const doctors = await Doctor.findById(req.params.id)
  
    if (doctors) {
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(doctors.cloudinary_id);

      await doctors.remove()
      res.json({ message: 'Doctor removed' })
    } else {
      res.status(404)
      throw new Error('Doctor not found')
    }
})

module.exports = {
    addDoctor,
    getDoctorsById,
    updateDoctors,
    getAllDoctors,
    deleteDoctors
}
