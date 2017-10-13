import * as React from "react";

import {storiesOf} from "@storybook/react";

import {action} from "@storybook/addon-actions";

import Layout from "../Layout";
import BatteryStatus from "../../BatteryStatus/BatteryStatus";
import Status from "../../Status/Status";
import DriverProfile from "../../DriverProfile/DriverProfile";
import * as portraitImage from "../../../../resources/images/portrait.jpg";

storiesOf("Layout", module)
  .add("layout", () => (
    <Layout>
      <Status statusText="Du hast alles im Griff." positive>
        <DriverProfile position="right" imgSrc={portraitImage} />
      </Status>
      <BatteryStatus
        batteryState="error"
        chargeStatus={10}
        range="Reichweite ca 220 km"
        airConditioning="Klimaanlage vorraussichtlich an."
        puffer="50 km"
        charging="Ich lade langsam weil schonend"
      />
    </Layout>
  ));
