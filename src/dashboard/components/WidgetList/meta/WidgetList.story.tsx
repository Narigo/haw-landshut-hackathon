import * as React from "react";

import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import WidgetList from "./../WidgetList";
import BatteryStatus from "../../BatteryStatus/BatteryStatus";

storiesOf("WidgetList", module).add("default", () => (
  <WidgetList>
    <BatteryStatus
      range={"Ungefähr 260km verbleibend"}
      airConditioning={"Klima an"}
      charging={"Lade."}
      chargeStatus={77}
      batteryState={"Gesund!"}
      puffer={"50km Puffer"}
    />
  </WidgetList>
));
