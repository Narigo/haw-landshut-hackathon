import * as React from "react";
import PresentationComponent, {PresentationComponentProps} from "../PresentationComponent/PresentationComponent";
import * as batteryStatusStyles from "./BatteryStatus.pcss";
import Battery from "./components/Battery/Battery";

export interface BatteryProps extends PresentationComponentProps {
  range: string;
  airConditioning: string;
  puffer: string;
  charging: string;
  chargeStatus: number,
  batteryChargeStatus?: number;
  batteryState: string;
}

export default class BatteryStatus extends PresentationComponent<BatteryProps, {}> {
  public render() {
    const {batteryState, chargeStatus, range, airConditioning, puffer, charging} = this.props;

    const colorRange = {
      error: ["#750900", "#c6462b", "#b74424", "#df0a00", "#590700"],
      warning: ["#754f00", "#f2bb00", "#dbb300", "#df8f00", "#593c00"],
      ok: ["#316d08", "#60b939", "#51aa31", "#64ce11", "#255405"]
    };

    return (
      <div className={batteryStatusStyles.batteryStatus}>
        <h1>Aktueller Batteriestatus</h1>
        <div className={batteryStatusStyles.statusWrapper}>
          <Battery width="100px" height="50px" charge={chargeStatus} colorRange={colorRange[batteryState]} />
          <div className={batteryStatusStyles.infos}>
            <p>{range}</p>
            <p>{airConditioning}</p>
            <p>{puffer}</p>
            <p>{charging}</p>
          </div>
        </div>
      </div>
    );
  }
}
