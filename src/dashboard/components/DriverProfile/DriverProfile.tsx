import * as React from "react";
import PresentationComponent from "../PresentationComponent/PresentationComponent";
import * as driverProfileStyles from "./DriverProfile.pcss";

export default class Status extends PresentationComponent<{}, { imgSrc: String, position: String }> {
  public render() {
    const {imgSrc, position} = this.props;

    const statusStyles = {
      float: position
    };

    return <div style={statusStyles} className={driverProfileStyles.driverProfile}>
      <img src={imgSrc} alt="Driver Profile" />
    </div>;
  }
}
