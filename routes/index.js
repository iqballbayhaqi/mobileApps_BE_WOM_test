const router = require("express").Router();
const branch = require("./branch");
const product = require("./product");
const customer = require("./customer");

router.use("/", branch);
router.use("/", product);
router.use("/", customer);

module.exports = router;