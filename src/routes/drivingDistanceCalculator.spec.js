/* global describe, it */

const assert = require("assert");
const drivingDistanceCalculator = require("./drivingDistanceCalculator");
const express = require("express");
const request = require("supertest");

describe("drivingDistanceCalculator", () => {
  it("should have a Router interface", () => {
    assert.equal(typeof drivingDistanceCalculator, "function");
    assert.equal(typeof drivingDistanceCalculator.get, "function");
    assert.equal(typeof drivingDistanceCalculator.use, "function");
  });

  it("should return an error if parameters are missing", () => {
    const app = express();

    app.use(drivingDistanceCalculator);

    return request(app)
      .get("/")
      .expect(406);
  });

  it("should accept comma separated lat/long values", () => {
    const start = [48.5597873, 12.2007026].join();
    const end = [48.5831643, 12.1925889].join();

    const app = express();

    app.use(drivingDistanceCalculator);

    return request(app)
      .get("/?start=" + start + "&end=" + end)
      .expect(200);
  });

  it("should return a response with start, end and distance", () => {
    const start = [48.5597873, 12.2007026].join();
    const end = [48.5831643, 12.1925889].join();

    const app = express();

    app.use(drivingDistanceCalculator);

    return request(app)
      .get("/?start=" + start + "&end=" + end)
      .then(res => {
        const json = JSON.parse(res.text);

        assert(Array.isArray(json.start));
        assert(Array.isArray(json.start));
        assert.equal(typeof json.distance, "object");
      });
  });

  it("should return the actual driving distance in m", () => {
    const start = [48.5597873, 12.2007026].join();
    const end = [48.5831643, 12.1925889].join();

    const app = express();

    app.use(drivingDistanceCalculator);

    return request(app)
      .get("/?start=" + start + "&end=" + end)
      .then(res => {
        const json = JSON.parse(res.text);

        assert(Math.abs(json.distance.value - 8600) < 500);
        assert(json.distance.unit, "m");
      });
  });
});
