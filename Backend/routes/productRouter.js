const express = require('express');
const router = express.Router();
const ROLES_LIST = require('../config/roles_list.js');
const productController = require('../controllers/productController.js')
const verifyRoles = require('../middleware/verifyRoles');

router.route('/fetch-pdf').get(productController.fetchPdf)

router.route('/create-pdf').post(productController.createPdf)

router.route('/').get(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor, ROLES_LIST.User), productController.getAllProducts).post(verifyRoles(ROLES_LIST.Admin), productController.createProduct);

router.route('/:id').get(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor, ROLES_LIST.User), productController.getProductById).delete(verifyRoles(ROLES_LIST.Admin), productController.deleteProduct).put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), productController.updateProduct)



module.exports = router;
