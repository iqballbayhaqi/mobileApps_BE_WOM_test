const router = require("express").Router();
const { CustomerController } = require("../controllers");

router.get("/GetAllDataCust", CustomerController.getAllDataCust);
router.get("/GetDataCustomer", CustomerController.getDataCustomer);
router.post("/SaveDataCust", CustomerController.saveDataCust);
router.put("/UpdateDataCust", CustomerController.updateDataCust);
router.delete("/UpdateDataCust", CustomerController.deleteDataCust);

module.exports = router;
