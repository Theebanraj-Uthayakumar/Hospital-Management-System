const express = require('express');
const router = express.Router();
const upload = require("../utils/multer");
const {
    addDoctor,
    getDoctorsById,
    updateDoctors,
    getAllDoctors,
    deleteDoctors
} = require('../controller/doctor.controller')

router.route('/').post(upload.single("avatar"), addDoctor)
router.route('/').get(getAllDoctors)
router.route('/:id').get(getDoctorsById)
router.route('/:id').put(upload.single("avatar"), updateDoctors)
router.route('/:id').delete(deleteDoctors)

module.exports = router;

