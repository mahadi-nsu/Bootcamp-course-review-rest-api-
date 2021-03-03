const express = require("express");
const dotenv = require("dotenv");
const bootcamps = require("./routes/bootcamps.js");
const connectDB = require("./config/db");
var colors = require("colors");
var morgan = require("morgan");

// mounting the routes
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000;
const app = express();

// json parsing
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}
// connect to database
connectDB();

// chaining to the to controller
app.use("/api/v1/bootcamps", bootcamps);

const server = app.listen(
  PORT,
  console.log(`server running at ${process.env.PORT}`.yellow.bold)
);

//handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);
  // close and exit
  server.close(() => process.exit(1));
});
