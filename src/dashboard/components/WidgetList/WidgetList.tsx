import * as React from "react";
import PresentationComponent from "../PresentationComponent/PresentationComponent";
import * as styles from "./WidgetList.pcss";

export default class WidgetList extends PresentationComponent<{}, {}> {
  public render() {
    const { children } = this.props;
    return <div className={styles.widgetList}>{children}</div>;
  }
}
