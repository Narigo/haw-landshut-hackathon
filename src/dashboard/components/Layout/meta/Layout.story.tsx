import * as React from "react";

import {storiesOf} from "@storybook/react";

import {action} from "@storybook/addon-actions";

import Layout from "../Layout";
import BatteryStatus from "../../BatteryStatus/BatteryStatus";
import Status from "../../Status/Status";
import DriverProfile from "../../DriverProfile/DriverProfile";
import * as portraitImage from "../../../../resources/images/portrait.jpg";

storiesOf("Layout", module)
  .add("positive layout", () => (
    <Layout>
      <Status statusText="Du hast alles im Griff." status="ok">
        <DriverProfile position="right" imgSrc={portraitImage} />
      </Status>
      <BatteryStatus
        batteryState="ok"
        chargeStatus={76}
        range="Sie haben eine Reichweite von 400 km."
        airConditioning="Die Klimaautomatik ist vorrübergehend inaktiv."
        puffer="Puffer 75 km."
        charging="Smart Charging ist aktiv."
      />
    </Layout>
  ))
  .add("warning layout", () => (
    <Layout>
      <Status statusText="Der Verbrauch neigt sich dem Ende." status="warning">
        <DriverProfile position="right" imgSrc={portraitImage} />
      </Status>
      <BatteryStatus
        batteryState="warning"
        chargeStatus={37}
        range="Sie haben eine maximale Reichweite von 185 km."
        airConditioning="Die Klimaautomatik ist vorrübergehend inaktiv."
        puffer="Puffer 75 km."
        charging="Smart Charging ist aktiv."
      />
    </Layout>
  ))
  .add("error layout", () => (
    <Layout>
      <Status statusText="Suchen Sie demnächst dringend eine SmartStation auf." status="error">
        <DriverProfile position="right" imgSrc={portraitImage} />
      </Status>
      <BatteryStatus
        batteryState="error"
        chargeStatus={18}
        range="Ihre Reichweite ist aufgebraucht. Ihr Fahrzeug nutzt den Puffer."
        airConditioning="Die Klimaautomatik ist vorrübergehend inaktiv."
        puffer="Puffer 65 km."
        charging="Smart Charging ist aktiv."
      />
    </Layout>
  ));
