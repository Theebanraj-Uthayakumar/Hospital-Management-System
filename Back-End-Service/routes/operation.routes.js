const express = require('express');
const router = express.Router();
const upload = require("../utils/multer");
const {
    addOperation,
    getOperationsById,
    updateOperations,
    getAllOperations,
    deleteOperations
} = require('../controller/operation.controller')

router.route('/').post(upload.single("avatar"), addOperation)
router.route('/').get(getAllOperations)
router.route('/:id').get(getOperationsById)
router.route('/:id').put(upload.single("avatar"), updateOperations)
router.route('/:id').delete(deleteOperations)

module.exports = router;

