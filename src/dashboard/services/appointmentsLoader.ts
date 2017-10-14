import * as drivingDistanceCalculator from "./../services/drivingDistanceCalculator";
import { AppointmentType, Location } from "../components/Appointment/Appointment";
import * as moment from "moment";

export function loadAppointmentsWithDirections(fromLocation: Location): Promise<AppointmentType[]> {
  return Promise.all(
    [randomAppointment(), randomAppointment(), randomAppointment(), randomAppointment()].map(async appointment => {
      const distance = await drivingDistanceCalculator
        .loadDistance(fromLocation, appointment.location)
        .then(res => res.json())
        .then(res => res.distance.value);
      return {
        ...appointment,
        distance
      };
    })
  );
}

const startLat = 48.5560425;
const startLng = 12.1975011;
function randomAppointment() {
  return {
    text: texts[Math.floor(Math.random() * texts.length)],
    location: { lat: startLat + (Math.random() * 0.01 - 0.05), lng: startLng + (Math.random() * 0.01 - 0.05) },
    time: moment(moment.now()).add(Math.random() * 60 * 60 * 24 * 3, "seconds")
  };
}

const texts = ["Zahnarzt", "Banktermin", "Café", "Versicherungstermin"];
