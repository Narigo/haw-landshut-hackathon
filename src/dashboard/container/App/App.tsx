import * as React from "react";
import Layout from "../../components/Layout/Layout";
import Status from "../../components/Status/Status";
import Directions from "../Directions/Directions";
import CarStatus from "../CarStatus/CarStatus";
import DriverProfile from "./../../components/DriverProfile/DriverProfile";

import * as portraitImage from "./../../../resources/images/portrait.jpg";

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Layout>
        <Status status={"ok"} statusText={"Du hast alles im Griff. Dein Auto ist in bestem Zustand!"}>
          <DriverProfile position="right" imgSrc={portraitImage} />
        </Status>
        <Directions />
        <CarStatus />
      </Layout>
    );
  }
}
