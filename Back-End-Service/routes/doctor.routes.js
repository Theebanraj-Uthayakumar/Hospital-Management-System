const express = require('express');
const router = express.Router();
const Doctors = require('../models/doctor');
const multer = require('multer');
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

//GET ALL THE DOCTORS' DETAILS
router.get('/', async (req, res) => {
    try {
        const doctors = await Doctors.find();
        res.json(doctors);
    } catch (err) {
        res.json({ message: err });
    }
});

//POST DOCTORS INFORMATION
router.post('/', upload.single('image'), async (req, res) => {
    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);

        const doctors = new Doctors({
            DName: req.body.DName,
            Speci: req.body.Speci,
            SLNC: req.body.SLNC,
            Exper: req.body.Exper,
            Gender: req.body.Gender,
            CPosistion: req.body.CPosistion,
            WHospital: req.body.WHospital,
            WHistory: req.body.WHistory,
            selectedFile: result.secure_url,
            cloudinary_id: result.public_id,
        });

        const savedDoctors = await doctors.save();
        res.json(savedDoctors);
    } catch (err) {
        res.json({ message: err });
    }
});

//GET doctors details by ID
router.get('/:doctorsId', async (req, res) => {
    try {
        // Find user by id
        let doctor = await Doctors.findById(req.params.doctorsId);
        res.json(doctor);
      } catch (err) {
        console.log(err);
      }
});

//DELETE SPECIFIC POST
router.delete('/:doctorsId', async (req, res) => {
    try {
        let doctor = await Doctors.findById(req.params.doctorsId);
        await cloudinary.uploader.destroy(doctor.cloudinary_id);

        await doctor.remove();
        res.json(doctor);
    } catch (err) {
        res.json({ message: err });
    }
});


//UPDATE doctors details
router.put("/:doctorsId", upload.single("image"), async (req, res) => {
    try {
      let doctor = await Doctors.findById(req.params.doctorsId);
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(doctor.cloudinary_id);
      // Upload image to cloudinary
      let result;
      if (req.file) {
        result = await cloudinary.uploader.upload(req.file.path);
      }
      const data = {
        DName: req.body.DName || doctor.DName,
        Speci: req.body.Speci || doctor.Speci,
        SLNC: req.body.SLNC || doctor.SLNC,
        Exper: req.body.Exper || doctor.Exper,
        Gender: req.body.Gender || doctor.Gender,
        CPosistion: req.body.CPosistion || doctor.CPosistion,
        WHospital: req.body.WHospital || doctor.WHospital,
        WHistory: req.body.WHistory || doctor.WHistory,
        selectedFile: result?.secure_url || doctor.selectedFile,
        cloudinary_id: result?.public_id || doctor.cloudinary_id,
      };
      doctor = await Doctors.findByIdAndUpdate(req.params.doctorsId, data, { new: true });
      res.json(doctor);
    } catch (err) {
      console.log(err);
    }
  });

module.exports = router;
