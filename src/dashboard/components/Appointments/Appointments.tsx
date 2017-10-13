import * as React from "react";
import PresentationComponent, { PresentationComponentProps } from "../PresentationComponent/PresentationComponent";
import Appointment, { AppointmentType } from "./../Appointment/Appointment";
import * as styles from "./Appointments.pcss";

interface AppointmentsProps extends PresentationComponentProps {
  appointments: Array<AppointmentType>;
}

export default class Appointments extends PresentationComponent<AppointmentsProps, {}> {
  public render() {
    const { appointments } = this.props;
    return (
      <div className={styles.appointments}>
        <ul>{appointments.map(appointment => <Appointment appointment={appointment} />)}</ul>
      </div>
    );
  }
}
