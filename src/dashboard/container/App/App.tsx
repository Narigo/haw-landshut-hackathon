import * as React from "react";
import Layout from "../../components/Layout/Layout";
import Status from "../../components/Status/Status";
import Directions from "../Directions/Directions";
import CarStatus from "../CarStatus/CarStatus";
import DriverProfile from "./../../components/DriverProfile/DriverProfile";

import * as portraitImage from "./../../../resources/images/portrait.jpg";
import Apps from "../../components/Apps/Apps";
import WidgetList from "../../components/WidgetList/WidgetList";
import WeatherWidget from "../../components/WeatherWidget/WeatherWidget";

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Layout>
        <Status status={"ok"} statusText={"Du hast alles im Griff. Dein Auto ist in bestem Zustand!"}>
          <DriverProfile position="right" imgSrc={portraitImage} />
        </Status>
        <div>
          <WidgetList>
            <Directions />
            <CarStatus />
          </WidgetList>
          <Apps backgroundImageClass={"streetImage"}>
            <WeatherWidget temperature={"19° C"} weather={"cloudy"} />
          </Apps>
        </div>
      </Layout>
    );
  }
}
