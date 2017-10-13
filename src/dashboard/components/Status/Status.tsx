import * as React from "react";
import PresentationComponent from "../PresentationComponent/PresentationComponent";
import * as statusStyles from "./Status.pcss";

export default class Status extends PresentationComponent<{ children: PresentationComponent }, { statusText: String, positive: Boolean }> {
  public render() {
    const {statusText, children, positive} = this.props;

    const positiveHexCode = "#28a745";
    const negativeHexCode = "red";

    const statusInlineStyles = {
      background: positive ? positiveHexCode : negativeHexCode
    };

    return <div style={statusInlineStyles} className={statusStyles.status}>
      <p>{statusText}</p>
      {children}
    </div>;
  }
}
