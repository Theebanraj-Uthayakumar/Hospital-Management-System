const asyncHandler = require('express-async-handler');
const Operation = require("../models/operation.model");
const cloudinary = require("../utils/cloudinary");


// @desc    Create new Operation
// @route   POST /api/v1/Operation
// @access  Public
const addOperation = asyncHandler(async (req, res) => {
  try {
      // Upload image to cloudinary
      // const result = await cloudinary.uploader.upload(req?.file?.path);

      let category = new Operation({
        OName: req.body.OName,
        Date: req.body.Date,
        Time: req.body.Time,
        Description: req.body.Description,
        DName: req.body.DName,
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
const getOperationsById = asyncHandler(async (req, res) => {
  const operations = await Operation.findById(req.params.id);

  if (operations) {
    res.json(operations)
  } else {
    res.status(404)
    throw new Error('Operation not found')
  }
})

// @desc    Update operations
// @route   PUT /api/v1/operations/:id
// @access  Public
const updateOperations = asyncHandler(async (req, res) => {
  try {
    let operations = await Operation.findById(req.params.id);
    // Delete image from cloudinary
    // await cloudinary.uploader.destroy(operations.cloudinary_id);
    // Upload image to cloudinary
    // let result;
    // if (req.file) {
    //   result = await cloudinary.uploader.upload(req.file.path);
    // }
    const data = {
        OName: req.body.OName,
        Date: req.body.Date,
        Time: req.body.Time,
        Description: req.body.Description,
        DName: req.body.DName,
        // avatar: result.secure_url,
        // cloudinary_id: result.public_id,
    };
    operations = await Operation.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(operations);
  } catch (err) {
    console.log(err);
  }
})

// @desc    Get all Operation
// @route   GET /api/v1/operations
// @access  Public
const getAllOperations = asyncHandler(async (req, res) => {
    try {
        const operations = await Operation.find()
        res.status(200).json(operations)
    } catch (err) {
        res.json({ message: err });
    }
})

// @desc    Delete Operation
// @route   DELETE /api/v1/Operation/:id
// @access  Public
const deleteOperations = asyncHandler(async (req, res) => {
    const operations = await Operation.findById(req.params.id)
  
    if (operations) {
      // Delete image from cloudinary
      // await cloudinary.uploader.destroy(operations.cloudinary_id);

      await operations.remove()
      res.json({ message: 'Operation removed' })
    } else {
      res.status(404)
      throw new Error('Operation not found')
    }
})

module.exports = {
    addOperation,
    getOperationsById,
    updateOperations,
    getAllOperations,
    deleteOperations
}
