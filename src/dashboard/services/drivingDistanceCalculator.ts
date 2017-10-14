import { Location } from "../components/Appointment/Appointment";

const { apiPath, distanceCalculatorApi } = require("./../../shared/apiServers");

export async function loadDistance(fromLocation: Location, toLocation: Location) {
  return fetch(
    `${apiPath}${distanceCalculatorApi}/?start=${fromLocation.lat},${fromLocation.lng}&end=${toLocation.lat},${toLocation.lng}`
  );
}
