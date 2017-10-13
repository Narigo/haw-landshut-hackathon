import * as React from "react";
import PresentationComponent, {
  PresentationComponentProps
} from "../../../PresentationComponent/PresentationComponent";
import * as batteryStyles from "./Battery.pcss";

export interface BatteryProps extends PresentationComponentProps {
  width: string;
  height: string;
  colorRange?: any[];
  charge?: number;
}

export default class Battery extends PresentationComponent<BatteryProps, {}> {
  public render() {
    const { height, width, colorRange = [], charge = 0 } = this.props;

    const batteryInlineStyles = {
      width,
      height,
      transform: "rotate(-90deg)",
      backgroundImage: `linear-gradient(to right, transparent 5%, ${colorRange[0]} 5%, ${colorRange[0]} 7%, ${colorRange[1]} 8%, ${colorRange[1]} 10%, ${colorRange[2]} 11%, ${colorRange[2]} ${charge -
        3}%, ${colorRange[3]} ${charge - 2}%, ${colorRange[3]} ${charge}%, ${colorRange[4]} ${charge}%, black ${charge +
        5}%, black 95%, transparent 95%), linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.4) 4%, rgba(255,255,255,0.2) 7%, rgba(255,255,255,0.2) 14%, rgba(255,255,255,0.8) 14%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0) 41%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.2) 80%, rgba(255,255,255,0.4) 86%, rgba(255,255,255,0.6) 90%, rgba(255,255,255,0.1) 92%, rgba(255,255,255,0.1) 95%, rgba(255,255,255,0.5) 98%)`
    };

    return <div style={batteryInlineStyles} className={batteryStyles.battery} />;
  }
}
