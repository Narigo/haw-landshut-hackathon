import * as React from "react";
import PresentationComponent, { PresentationComponentProps } from "../PresentationComponent/PresentationComponent";
import * as driverProfileStyles from "./DriverProfile.pcss";

interface Props extends PresentationComponentProps {
  imgSrc: string;
  position?: string;
}

export default class Status extends PresentationComponent<Props, {}> {
  public render() {
    const { imgSrc, position } = this.props;

    const statusStyles = {
      top: 10,
      [position]: 10
    };

    return (
      <div style={statusStyles} className={driverProfileStyles.driverProfile}>
        <img src={imgSrc} alt="Driver Profile" />
      </div>
    );
  }
}
