import * as React from "react";

import PresentationComponent, {PresentationComponentProps} from "../PresentationComponent/PresentationComponent";

import * as statusStyles from "./Status.pcss";

interface StatusProps extends PresentationComponentProps {
  statusText: string;
  status: string;
}

export default class Status extends PresentationComponent<StatusProps, {}> {
  public render() {
    const {statusText, children, status} = this.props;

    const statusHexcodes = {
      ok: "#55b00f",
      error: "#df0a00",
      warning: "#df8f00"
    };

    const statusInlineStyles = {
      background: statusHexcodes[status]
    };

    return (
      <div style={statusInlineStyles} className={statusStyles.status}>
        <div className={statusStyles.text}>{statusText}</div>
        {children}
      </div>
    );
  }
}
