import * as React from "react";
import PresentationComponent from "../../../PresentationComponent/PresentationComponent";
import * as batteryStyles from "./Battery.pcss";

export default class Battery extends PresentationComponent<{}, {width: String, height: String}> {
  public render() {

    const {height, width} = this.props;

    const batteryInlineStyles = {
      width: width,
      height: height
    };

    return <div style={batteryInlineStyles} className={batteryStyles.battery} />;
  }
}
