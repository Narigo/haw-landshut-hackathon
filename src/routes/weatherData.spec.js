/* global describe, it */

const assert = require("assert");
const weatherData = require("./weatherData");
const express = require("express");
const request = require("supertest");

describe("weatherData", () => {
  it("should have a Router interface", () => {
    assert.equal(typeof weatherData, "function");
    assert.equal(typeof weatherData.get, "function");
    assert.equal(typeof weatherData.use, "function");
  });

  it("should return an error if parameters are missing", () => {
    const app = express();

    app.use(weatherData);

    return request(app)
      .get("/")
      .expect(406);
  });

  it("should accept a comma separated lat/long value for location", () => {
    const location = [48.5597873, 12.2007026].join();

    const app = express();

    app.use(weatherData);

    return request(app)
      .get(`/?location=${location}`)
      .expect(200);
  });

  it("should return a json when complete", () => {
    const lat = 48.5597873;
    const lng = 12.2007026;
    const location = [lat, lng].join();

    const app = express();

    app.use(weatherData);

    return request(app)
      .get(`/?location=${location}`)
      .then(res => {
        const json = JSON.parse(res.text);

        assert.equal(json.location.lat, lat);
        assert.equal(json.location.lng, lng);
        assert.equal(typeof json.temperature, "object");
        assert.equal(typeof json.temperature.celcius, "number");
      });
  });

  // it("should return a response with start, end and distance", () => {
  //   const start = [48.5597873, 12.2007026].join();
  //   const end = [48.5831643, 12.1925889].join();
  //
  //   const app = express();
  //
  //   app.use(drivingDistanceCalculator);
  //
  //   return request(app)
  //     .get("/?start=" + start + "&end=" + end)
  //     .then(res => {
  //       const json = JSON.parse(res.text);
  //
  //       assert(Array.isArray(json.start));
  //       assert(Array.isArray(json.start));
  //       assert.equal(typeof json.distance, "object");
  //     });
  // });
  //
  // it("should return the actual driving distance in m", () => {
  //   const start = [48.5597873, 12.2007026].join();
  //   const end = [48.5831643, 12.1925889].join();
  //
  //   const app = express();
  //
  //   app.use(drivingDistanceCalculator);
  //
  //   return request(app)
  //     .get("/?start=" + start + "&end=" + end)
  //     .then(res => {
  //       const json = JSON.parse(res.text);
  //
  //       assert(Math.abs(json.distance.value - 8600) < 500);
  //       assert(json.distance.unit, "m");
  //     });
  // });
});
