const Router = require("express").Router;
const httpError = require("http-errors");

const router = new Router();

router.get("/", (req, res, next) => {
  if (!req.query.location) {
    return next(httpError(406, "required start and end parameters are missing"));
  }

  const [lat, lng] = req.query.location.split(",").map(parseFloat);
  const result = { location: { lat, lng }, temperature: { celcius: 19.2 } };
  res.end(JSON.stringify(result));
});

module.exports = router;
