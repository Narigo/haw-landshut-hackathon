import * as React from "react";
import PresentationComponent, { PresentationComponentProps } from "../PresentationComponent/PresentationComponent";
import Appointment, { AppointmentType } from "./../Appointment/Appointment";
import * as styles from "./Appointments.pcss";
import moment = require("moment");

interface AppointmentsProps extends PresentationComponentProps {
  appointments: AppointmentType[];
}

export default class Appointments extends PresentationComponent<AppointmentsProps, {}> {
  public render() {
    const { appointments } = this.props;
    return (
      <div className={styles.appointments}>
        <h2>Termine</h2>
        <ul>{appointments.sort((a, b) => moment(a.time).diff(b.time)).map((appointment, idx) => <Appointment key={idx} appointment={appointment} />)}</ul>
      </div>
    );
  }
}
