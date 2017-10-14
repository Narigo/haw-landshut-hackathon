import * as React from "react";
import PresentationComponent, { PresentationComponentProps } from "../PresentationComponent/PresentationComponent";
import * as driverProfileStyles from "./DriverProfileWithGame.pcss";

interface Props extends PresentationComponentProps {
  imgSrc: string;
  position?: string;
}

export default class Status extends PresentationComponent<Props, {}> {
  public render() {
    const { imgSrc, position } = this.props;

    const statusStyles = {
      float: position
    };

    return (
      <div className={driverProfileStyles.driverProfile}>
        <div className={driverProfileStyles.c100}>
          <img src={imgSrc} alt="Driver Profile" />
          <span>25%</span>
          <div className={driverProfileStyles.bar} />
          <div className={driverProfileStyles.fill} />
        </div>
        <p>.big</p>
      </div>
    );
  }
}
