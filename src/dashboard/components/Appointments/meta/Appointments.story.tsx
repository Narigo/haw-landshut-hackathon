import * as React from "react";

import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import Appointments from "./../Appointments";

import * as moment from "moment";

storiesOf("Appointments", module)
  .add("single appointment", () => <Appointments appointments={[randomAppointment()]} />)
  .add("multiple appointments", () => (
    <Appointments
      appointments={[randomAppointment(), randomAppointment(), randomAppointment()].sort((a, b) => a.time.diff(b.time))}
    />
  ));

const startLat = 48.5560425;
const startLng = 12.1975011;
function randomAppointment() {
  return {
    text: texts[Math.floor(Math.random() * texts.length)],
    location: { lat: startLat + (Math.random() * 0.01 - 0.05), lng: startLng + (Math.random() * 0.01 - 0.05) },
    distance: Math.random() * 50,
    time: moment(moment.now()).add(Math.random() * 60 * 60 * 24 * 3, "seconds")
  };
}

const texts = ["Zahnarzt", "Banktermin", "Café", "Versicherungstermin"];
