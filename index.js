const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");
const t_log_apirequest = require("./middleware/log_api_request");
const log_api_response = require("./middleware/log_api_response");
const error_handler = require("./middleware/errorHandler");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(t_log_apirequest, routes, error_handler, log_api_response);

app.listen(port, () => {
  console.log(`Mobile_App listening on port ${port}`);
});
