import * as React from "react";
import {
  PresentationComponentProps
} from "../../components/PresentationComponent/PresentationComponent";

export default class Layout extends React.Component<PresentationComponentProps, {}> {
  public render() {
    const {children} = this.props;
    return <div>{children}</div>;
  }
}
