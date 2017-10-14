const express = require("express");
const drivingDistanceCalculator = require("./drivingDistanceCalculator");
const weatherData = require("./weatherData");
const apiServers = require("./../shared/apiServers");

const app = express();

app.use(apiServers.distanceCalculatorApi, drivingDistanceCalculator);
// app.use(apiServers.weatherApi, weatherData);

app.listen(apiServers.port, () => {
  console.log("server is listening on port", apiServers.port);
});
