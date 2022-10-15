const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const { notFound, errorHandler } = require("./middlewares/error.Middleware");
const connectDB = require("./config/db");
const colors = require("colors");
const bodyParser = require("body-parser");
const cors = require("cors");

//Import Routes
const usermanagement = require("./routes/doctor.routes");
const operationmanagement = require("./routes/operation.routes");
const ambulancemanagement = require("./routes/ambulance.routes");
const authRoute = require("./controller/auth.controller");

const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(cors());

connectDB();

//Route Middlewares
app.use("/api/v1/doctor", usermanagement);
app.use("/api/v1/operation", operationmanagement);
app.use("/api/v1/ambulance", ambulancemanagement);
app.use("/api/v1/auth", authRoute);



if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue
      .underline.bold
  )
);
