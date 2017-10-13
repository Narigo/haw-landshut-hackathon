import * as React from "react";

import {storiesOf} from "@storybook/react";

import {action} from "@storybook/addon-actions";

import App from "./../../../container/App/App";
import BatteryStatus from "./../BatteryStatus";

storiesOf("BatteryStatus", App)
  .add("BatteryStatus View", () => (
    <BatteryStatus
      range="Reichweite ca 220 km"
      airConditioning="Klimaanlage vorraussichtlich an."
      puffer="50 km"
      charging="Ich lade langsam weil schonend"
    />
  ));
