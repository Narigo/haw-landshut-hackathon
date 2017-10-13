const fetch = require("node-fetch");
const httpError = require("http-errors");
const Router = require("express").Router;

const API_URL = "https://maps.googleapis.com/maps/api/directions/json";
const API_KEY = process.env.GOOGLE_API_KEY;

router = new Router();

router.get("/", (req, res, next) => {
  if (!req.query.start || !req.query.end) {
    return next(httpError(406, "required start and end parameters are missing"));
  }

  const start = req.query.start.split(",");
  const end = req.query.end.split(",");

  const url = API_URL + "?origin=" + start.join() + "&destination=" + end.join() + "&key=" + API_KEY;

  return fetch(url)
    .then(res => res.json())
    .then(json => {
      const distance = {
        value: json.routes[0].legs[0].distance.value,
        unit: "m"
      };

      res.json({
        start: start,
        end: end,
        distance: distance
      });
    })
    .catch(err => {
      err.statusCode = 500;

      next(err);
    });
});

module.exports = router;
