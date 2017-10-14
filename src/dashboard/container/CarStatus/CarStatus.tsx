import * as React from "react";

import Appointments from "../../components/Appointments/Appointments";
import { AppointmentType } from "../../components/Appointment/Appointment";

import * as appointmentsLoader from "./../../services/appointmentsLoader";
import * as currentPositionLoader from "./../../services/currentPositionLoader";
import Loader from "../../components/Loader/Loader";
import BatteryStatus, { BatteryProps } from "../../components/BatteryStatus/BatteryStatus";

interface CarStatusState extends BatteryProps {}

export default class CarStatus extends React.Component<{}, CarStatusState> {
  constructor() {
    super();
    this.state = {
      range: "Du kannst beruhigt zu Deinem nächsten Termin fahren. Du kannst mir über 300km Reichweite rechnen.",
      airConditioning: "Die Klimaanlage kann genutzt werden.",
      puffer: "Es sind 75km Puffer für die nächsten Fahrten eingeplant.",
      charging: "Das Auto lädt gerade batterieschonend.",
      chargeStatus: 75,
      batteryChargeStatus: 75,
      batteryState: "ok"
    };
  }

  public render() {
    return <BatteryStatus {...this.state} />;
  }
}
