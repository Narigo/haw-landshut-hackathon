import * as React from "react";
import PresentationComponent, { PresentationComponentProps } from "../PresentationComponent/PresentationComponent";
import * as batteryStatusStyles from "./BatteryStatus.pcss";
import Battery from "./components/Battery/Battery";

interface BatteryProps extends PresentationComponentProps {
  range: string;
  airConditioning: string;
  puffer: string;
  charging: string;
  batteryChargeStatus?: number;
}

export default class BatteryStatus extends PresentationComponent<BatteryProps, {}> {
  public render() {
    const { range, airConditioning, puffer, charging } = this.props;

    return (
      <div className={batteryStatusStyles.batteryStatus}>
        <Battery width="100px" height="50px" />
        <div className={batteryStatusStyles.infos}>
          <p>{range}</p>
          <p>{airConditioning}</p>
          <p>{puffer}</p>
          <p>{charging}</p>
        </div>
      </div>
    );
  }
}
