import * as React from "react";
import {
  PresentationComponentProps
} from "../../components/PresentationComponent/PresentationComponent";

import * as styles from "./Layout.pcss";

export default class Layout extends React.Component<PresentationComponentProps, {}> {
  public render() {
    const {children} = this.props;
    return <div className={styles.layout}>{children}</div>;
  }
}
