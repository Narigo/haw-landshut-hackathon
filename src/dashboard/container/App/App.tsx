import * as React from "react";
import Layout from "../../components/Layout/Layout";
import Status from "../../components/Status/Status";
import Directions from "../Directions/Directions";

export default class App extends React.Component<{}, {}> {
  public render() {
    return <Layout>
      <Status status={"ok"} statusText={"Alles gut."} />
      <Directions/>
    </Layout>;
  }
}
