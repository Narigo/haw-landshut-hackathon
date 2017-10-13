import * as React from "react";
import PresentationComponent from "../PresentationComponent/PresentationComponent";
import * as styles from "./Loader.pcss";

export default class Loader extends PresentationComponent<{}, {}> {
  public render() {
    return <div className={styles.loader}>Loading...</div>;
  }
}
