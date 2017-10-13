import * as React from "react";

import {storiesOf} from "@storybook/react";

import {action} from "@storybook/addon-actions";

import BatteryStatus from "./../BatteryStatus";

storiesOf("BatteryStatus", module)
  .add("BatteryStatus ok", () => (
    <BatteryStatus
      batteryState="ok"
      chargeStatus={90}
      range="Reichweite ca 220 km"
      airConditioning="Klimaanlage vorraussichtlich an."
      puffer="50 km"
      charging="Ich lade langsam weil schonend"
    />
  )).add("BatteryStatus warning", () => (
  <BatteryStatus
    batteryState="warning"
    chargeStatus={40}
    range="Reichweite ca 220 km"
    airConditioning="Klimaanlage vorraussichtlich an."
    puffer="50 km"
    charging="Ich lade langsam weil schonend"
  />
)).add("BatteryStatus error", () => (
  <BatteryStatus
    batteryState="error"
    chargeStatus={10}
    range="Reichweite ca 220 km"
    airConditioning="Klimaanlage vorraussichtlich an."
    puffer="50 km"
    charging="Ich lade langsam weil schonend"
  />
));
