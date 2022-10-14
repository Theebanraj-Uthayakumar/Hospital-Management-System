const express = require('express');
const router = express.Router();
const upload = require("../utils/multer");
const {
    addAmbulance,
    getAmbulanceById,
    updateAmbulance,
    getAllAmbulance,
    deleteAmbulance
} = require('../controller/ambulance.controller')

router.route('/').post(upload.single("avatar"), addAmbulance)
router.route('/').get(getAllAmbulance)
router.route('/:id').get(getAmbulanceById)
router.route('/:id').put(upload.single("avatar"), updateAmbulance)
router.route('/:id').delete(deleteAmbulance)

module.exports = router;

