const asyncHandler = require('express-async-handler');
const Ambulance = require("../models/ambulance.model");
const cloudinary = require("../utils/cloudinary");


// @desc    Create new Ambulance
// @route   POST /api/v1/Ambulance
// @access  Public
const addAmbulance = asyncHandler(async (req, res) => {
  try {
      // Upload image to cloudinary
      // const result = await cloudinary.uploader.upload(req?.file?.path);

      let category = new Ambulance({
        VNo: req.body.VNo,
        VChassisno: req.body.VChassisno,
        DName: req.body.DName,
        DLicence: req.body.DLicence,
        DContactno: req.body.DContactno,
        Description: req.body.Description,
        CTime: req.body.CTime,
        CDate: req.body.CDate,
        
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
const getAmbulanceById = asyncHandler(async (req, res) => {
  const ambulance = await Ambulance.findById(req.params.id);

  if (ambulance) {
    res.json(ambulance)
  } else {
    res.status(404)
    throw new Error('Ambulance not found')
  }
})

// @desc    Update ambulance
// @route   PUT /api/v1/ambulance/:id
// @access  Public
const updateAmbulance = asyncHandler(async (req, res) => {
  try {
    let ambulance = await Ambulance.findById(req.params.id);
    // Delete image from cloudinary
    // await cloudinary.uploader.destroy(ambulance.cloudinary_id);
    // Upload image to cloudinary
    // let result;
    // if (req.file) {
    //   result = await cloudinary.uploader.upload(req.file.path);
    // }
    const data = {
        VNo: req.body.VNo,
        VChassisno: req.body.VChassisno,
        DName: req.body.DName,
        DLicence: req.body.DLicence,
        DContactno: req.body.DContactno,
        Description: req.body.Description,
        CTime: req.body.CTime,
        CDate: req.body.CDate,
        
        // avatar: result.secure_url,
        // cloudinary_id: result.public_id,
    };
    ambulance = await Ambulance.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(ambulance);
  } catch (err) {
    console.log(err);
  }
})

// @desc    Get all Ambulance
// @route   GET /api/v1/ambulance
// @access  Public
const getAllAmbulance = asyncHandler(async (req, res) => {
    try {
        const ambulance = await Ambulance.find()
        res.status(200).json(ambulance)
    } catch (err) {
        res.json({ message: err });
    }
})

// @desc    Delete Ambulance
// @route   DELETE /api/v1/Ambulance/:id
// @access  Public
const deleteAmbulance = asyncHandler(async (req, res) => {
    const ambulance = await Ambulance.findById(req.params.id)
  
    if (ambulance) {
      // Delete image from cloudinary
      // await cloudinary.uploader.destroy(ambulance.cloudinary_id);

      await ambulance.remove()
      res.json({ message: 'Ambulance removed' })
    } else {
      res.status(404)
      throw new Error('Ambulance not found')
    }
})

module.exports = {
    addAmbulance,
    getAmbulanceById,
    updateAmbulance,
    getAllAmbulance,
    deleteAmbulance
}
