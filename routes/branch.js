const router = require("express").Router();
const { BranchController } = require("../controllers");

router.get("/GetMasterBranch", BranchController.getMasterBranch)

module.exports = router;