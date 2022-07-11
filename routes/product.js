const router = require("express").Router();
const { ProductController } = require("../controllers");

router.get("/GetMasterProduct", ProductController.getMasterProduct)

module.exports = router;