import * as React from "react";

import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import * as moment from "moment";

import Appointment from "./../Appointment";

storiesOf("Appointment", module).add("today", () => (
  <Appointment
    appointment={{
      text: "Hackathon @ HAW Landshut",
      location: { lat: 48.5560425, lng: 12.1975011 },
      distance: 25,
      time: moment(moment.now())
    }}
  />
));
