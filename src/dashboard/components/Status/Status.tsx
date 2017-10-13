import * as React from "react";

import PresentationComponent, { PresentationComponentProps } from "../PresentationComponent/PresentationComponent";

import * as statusStyles from "./Status.pcss";

interface StatusProps extends PresentationComponentProps {
  statusText: String;
  positive: Boolean;
}

export default class Status extends PresentationComponent<StatusProps, {}> {
  public render() {
    const { statusText, children, positive } = this.props;

    const positiveHexCode = "#28a745";
    const negativeHexCode = "red";

    const statusInlineStyles = {
      background: positive ? positiveHexCode : negativeHexCode
    };

    return (
      <div style={statusInlineStyles} className={statusStyles.status}>
        <p>{statusText}</p>
        {children}
      </div>
    );
  }
}
