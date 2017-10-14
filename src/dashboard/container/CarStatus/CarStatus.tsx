import * as React from "react";

import BatteryStatus, { BatteryProps } from "../../components/BatteryStatus/BatteryStatus";

export default class CarStatus extends React.Component<{}, BatteryProps> {
  constructor() {
    super();
    this.state = {
      range: "Du kannst beruhigt mit über 300km Reichweite zu Deinem nächsten Termin fahren.",
      airConditioning: "Die Klimaanlage kann genutzt werden.",
      puffer: "Es sind 75km Puffer für die nächsten Fahrten eingeplant.",
      charging: "Das Auto lädt gerade batterieschonend.",
      chargeStatus: 75,
      batteryChargeStatus: 75,
      batteryState: "ok"
    };
  }

  public render() {
    return <BatteryStatus {...this.state} />;
  }
}
