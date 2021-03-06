import * as React from "react";
import PresentationComponent, { PresentationComponentProps } from "../PresentationComponent/PresentationComponent";
import * as moment from "moment";
import * as styles from "./Appointment.pcss";

export interface AppointmentType {
  text: string;
  location: Location;
  distance: number;
  time: moment.Moment;
}

export interface Location {
  lat: number;
  lng: number;
}

interface AppointmentProps extends PresentationComponentProps {
  appointment: AppointmentType;
}

export default class Appointment extends PresentationComponent<AppointmentProps, {}> {
  public render() {
    const { appointment } = this.props;
    const timeDiff = moment(appointment.time).fromNow();
    return (
      <li className={styles.appointment}>
        <span className={styles.text}>{appointment.text}</span>
        <span className={styles.distance}>{appointment.distance / 1000} km</span>
        <span className={styles.time}>{timeDiff}</span>
      </li>
    );
  }
}
