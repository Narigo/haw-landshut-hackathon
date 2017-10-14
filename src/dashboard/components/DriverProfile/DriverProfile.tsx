import * as React from "react";
import PresentationComponent, { PresentationComponentProps } from "../PresentationComponent/PresentationComponent";
import * as driverProfileStyles from "./DriverProfile.pcss";

interface Props extends PresentationComponentProps {
  imgSrc: string;
}

export default class Status extends PresentationComponent<Props, {}> {
  public render() {
    const { imgSrc } = this.props;

    return (
      <div className={driverProfileStyles.driverProfile}>
        <img className={driverProfileStyles.image} src={imgSrc} alt="Driver Profile" />
      </div>
    );
  }
}
