const express = require('express');
const controllers = require('../controllers').fruits;
const middlewares = require('../middleware').fruits;

var router = express.Router();

var BASE_URL = '/fruits/'

router.get(BASE_URL, middlewares.retrieveFruits, controllers.retrieveFruits);
router.post(BASE_URL, middlewares.createFruits, controllers.createFruits);
router.put(BASE_URL, middlewares.updateFruits, controllers.updateFruits);
router.delete(BASE_URL, middlewares.deleteFruits, controllers.deleteFruits);

module.exports = router;
