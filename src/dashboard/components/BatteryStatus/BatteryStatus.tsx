import * as React from "react";
import PresentationComponent from "../PresentationComponent/PresentationComponent";
import * as batteryStatusStyles from "./BatteryStatus.pcss";
import Battery from "./components/Battery/Battery";

export default class BatteryStatus extends PresentationComponent<{}, { range: String, airConditioning: String, puffer: String, charging: String, batteryChargeStatus: number }> {
  public render() {
    const {range, airConditioning, puffer, charging} = this.props;

    return <div className={batteryStatusStyles.batteryStatus}>
      <Battery width="100px" height="50px" />
      <div className={batteryStatusStyles.infos}>
        <p>{range}</p>
        <p>{airConditioning}</p>
        <p>{puffer}</p>
        <p>{charging}</p>
      </div>
    </div>;
  }
}
