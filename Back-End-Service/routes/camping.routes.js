const express = require('express');
const router = express.Router();
const upload = require("../utils/multer");
const {
    addCamping,
    getCampingById,
    updateCamping,
    getAllCamping,
    deleteCamping
} = require('../controller/camping.controller')

router.route('/').post(upload.single("avatar"), addCamping)
router.route('/').get(getAllCamping)
router.route('/:id').get(getCampingById)
router.route('/:id').put(upload.single("avatar"), updateCamping)
router.route('/:id').delete(deleteCamping)

module.exports = router;

