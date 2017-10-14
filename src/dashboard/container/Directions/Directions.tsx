import * as React from "react";

import Appointments from "../../components/Appointments/Appointments";
import { AppointmentType } from "../../components/Appointment/Appointment";

import * as appointmentsLoader from "./../../services/appointmentsLoader";
import * as currentPositionLoader from "./../../services/currentPositionLoader";
import Loader from "../../components/Loader/Loader";

interface DirectionsProps {
  appointmentsPromise: Promise<void> | null;
  appointments: AppointmentType[];
}

export default class Directions extends React.Component<{}, DirectionsProps> {
  constructor() {
    super();
    this.state = {
      appointmentsPromise: null,
      appointments: []
    };
  }

  public render() {
    const isResolved = this.state.appointmentsPromise === null;
    const appointments: AppointmentType[] = this.state.appointments;
    return isResolved ? <Appointments appointments={appointments} /> : <Loader />;
  }

  public componentWillUnmount() {
    this.setState({ appointmentsPromise: null });
  }

  public componentWillMount() {
    const promise = currentPositionLoader
      .loadCurrentPosition()
      .then(appointmentsLoader.loadAppointmentsWithDirections)
      .then(appointments => {
        this.setState({ appointments, appointmentsPromise: null });
      });

    this.setState({ appointmentsPromise: promise });
  }
}
