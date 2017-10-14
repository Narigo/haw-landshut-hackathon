import { Location } from "../components/Appointment/Appointment";

import { apiPath, distanceCalculatorApi } from "./../../shared/apiServers.js";

export async function loadDistance(fromLocation: Location, toLocation: Location) {
  return fetch(
    `${apiPath}${distanceCalculatorApi}/?start=${fromLocation.lat},${fromLocation.lng}&end=${toLocation.lat},${toLocation.lng}`
  );
}
