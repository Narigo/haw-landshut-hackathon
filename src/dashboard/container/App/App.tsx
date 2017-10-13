import * as React from "react";
import * as appStyles from "./App.pcss";

export default class App extends React.Component<{children: any}, {}> {
  public render() {
    const {children} = this.props;
    return <div className={appStyles.app}>{children}</div>;
  }
}
