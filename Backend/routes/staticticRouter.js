const express = require('express');
const router = express.Router();
const verifyRoles = require('../middleware/verifyRoles');
const ROLES_LIST = require('../config/roles_list.js');

const statisticController = require('../controllers/statisticController.js')


//router.param("id", productController.checkProductId);

router.route('/').get(statisticController.getOrderCountsByMonth);
router.route('/employee').get(statisticController.getTopSellingEmployee);
router.route('/lastMonth').get(statisticController.getTotalSalesForLastMonth);
router.route('/mostPopular').get(statisticController.getMostPurchasedProduct);
router.route('/moneyPerMonth').get(statisticController.GetPriceTotalAmountByMonth);


module.exports = router;
