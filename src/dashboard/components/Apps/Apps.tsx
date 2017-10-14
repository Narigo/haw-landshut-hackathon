import * as React from "react";
import PresentationComponent, {PresentationComponentProps} from "../PresentationComponent/PresentationComponent";
import * as classnames from "classnames";
import * as styles from "./Apps.pcss";

interface AppsProps extends PresentationComponentProps {
  backgroundImageClass: string;
}

export default class Apps extends PresentationComponent<AppsProps, {}> {
  public render() {
    const {backgroundImageClass, children} = this.props;
    return (
      <div className={classnames(styles.apps, styles[backgroundImageClass])}>{children}</div>
    );
  }
}
