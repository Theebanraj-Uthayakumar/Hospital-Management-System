// const express = require('express');
// const router = express.Router();
// const Doctors = require('../models/doctor');
// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cd) {
//         cd(null, './uploads/');
//     },
//     filename: function (req, file, cd) {
//         cd(null, new Date().toISOString() + file.originalname);
//     }
// })

// const fileFilter = (req, file, cd) => {
//     //reject a file
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
//         cd(null, true);
//     } else {
//         cd(null, false);
//     }
// }

// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 5
//     },
//     fileFilter: fileFilter
// });

// //GET ALL THE DOCTORS' DETAILS
// const getAllDoctors = async(req, res) => {
//     try {
//         const doctors = await Doctors.find();
//         res.json(doctors);
//     } catch (err) {
//         res.json({ message: err });
//     }
// }

// //SUBMIT DOCTORS INFORMATION
// const postDoctorsDetails = (upload.single('selectedFile'), async(req, res) => {
//     console.log(req.file);
//     const doctors = new Doctors({
//         DName: req.body.DName,
//         Speci: req.body.Speci,
//         SLNC: req.body.SLNC,
//         Exper: req.body.Exper,
//         Gender: req.body.Gender,
//         CPosistion: req.body.CPosistion,
//         WHospital: req.body.WHospital,
//         WHistory: req.body.WHistory,
//         selectedFile: req.file.path
//     });

//     try {
//         const savedDoctors = await doctors.save();
//         res.json(savedDoctors);
//     } catch (err) {
//         res.json({ message: err });
//     }
// });

// //SPECIFIC POST
// router.get('/:doctorsId', async (req, res) => {
//     try {
//         const doctors = await Doctors.findById(req.params.doctorsId);
//         res.json(doctors);
//     } catch (err) {
//         res.json({ message: err });
//     }
// });

// //DELETE SPECIFIC POST
// router.delete('/:doctorsId', async (req, res) => {
//     // Doctors.remove({_id:req.params.doctorsId})
//     try {
//         const removeDoctors = await Doctors.remove({ _id: req.params.doctorsId });
//         res.json(removeDoctors);
//     } catch (err) {
//         res.json({ message: err });
//     }
// });


// //UPDATE A DOCTORS DETAILS
// router.patch('/:doctorsId', upload.single('selectedFile'), async (req, res) => {
//     try {
//         const updateDoctor = await Doctors.updateOne(
//             { _id: req.params.doctorsId },
//             {
//                 $set: {
//                     DName: req.body.DName, Speci: req.body.Speci, SLNC: req.body.SLNC, Exper: req.body.Exper, Gender: req.body.Gender,
//                     CPosistion: req.body.CPosistion, WHospital: req.body.WHospital, WHistory: req.body.WHistory, selectedFile: req.file.path
//                 }
//             }
//         );
//         res.json(updateDoctor);
//     } catch (err) {
//         res.json({ message: err });
//     }
// });

// module.exports = router;
