import * as React from "react";

import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import * as moment from "moment";

import Layout from "../Layout";
import BatteryStatus from "../../BatteryStatus/BatteryStatus";
import Status from "../../Status/Status";
import DriverProfile from "../../DriverProfile/DriverProfile";
import Appointments from "../../Appointments/Appointments";
import * as portraitImage from "../../../../resources/images/portrait.jpg";
import Apps from "../../Apps/Apps";
import WeatherWidget from "../../WeatherWidget/WeatherWidget";
import WidgetList from "../../WidgetList/WidgetList";

storiesOf("Layout", module)
  .add("positive layout", () => (
    <Layout>
      <Status statusText="Du hast alles im Griff." status="ok">
        <DriverProfile position="right" imgSrc={portraitImage} />
      </Status>
      <div>
        <WidgetList>
          <Appointments
            appointments={[randomAppointment(), randomAppointment(), randomAppointment()].sort((a, b) =>
              a.time.diff(b.time)
            )}
          />
          <BatteryStatus
            batteryState="ok"
            chargeStatus={76}
            range="Sie haben eine Reichweite von 400 km."
            airConditioning="Die Klimaautomatik ist vorrübergehend inaktiv."
            puffer="Puffer 75 km."
            charging="Smart Charging ist aktiv."
          />
        </WidgetList>
        <Apps backgroundImageClass={"streetImage"}>
          <WeatherWidget temperature={"19° C"} weather={"cloudy"} />
        </Apps>
      </div>
    </Layout>
  ))
  .add("warning layout", () => (
    <Layout>
      <Status statusText="Der Verbrauch neigt sich dem Ende." status="warning">
        <DriverProfile position="right" imgSrc={portraitImage} />
      </Status>
      <div>
        <WidgetList>
          <Appointments
            appointments={[randomAppointment(), randomAppointment(), randomAppointment()].sort((a, b) =>
              a.time.diff(b.time)
            )}
          />
          <BatteryStatus
            batteryState="warning"
            chargeStatus={37}
            range="Sie haben eine maximale Reichweite von 185 km."
            airConditioning="Die Klimaautomatik ist vorrübergehend inaktiv."
            puffer="Puffer 75 km."
            charging="Smart Charging ist aktiv."
          />
        </WidgetList>
        <Apps backgroundImageClass={"streetImage"}>
          <WeatherWidget temperature={"19° C"} weather={"cloudy"} />
        </Apps>
      </div>
    </Layout>
  ))
  .add("error layout", () => (
    <Layout>
      <Status statusText="Suchen Sie demnächst dringend eine SmartStation auf." status="error">
        <DriverProfile position="right" imgSrc={portraitImage} />
      </Status>
      <div>
        <WidgetList>
          <Appointments
            appointments={[randomAppointment(), randomAppointment(), randomAppointment()].sort((a, b) =>
              a.time.diff(b.time)
            )}
          />
          <BatteryStatus
            batteryState="error"
            chargeStatus={18}
            range="Die Reichweite ist aufgebraucht! Wir nutzen den Puffer."
            airConditioning="Die Klimaautomatik ist vorrübergehend inaktiv."
            puffer="Puffer 65 km."
            charging="Smart Charging ist aktiv."
          />
        </WidgetList>
        <Apps backgroundImageClass={"streetImage"}>
          <WeatherWidget temperature={"19° C"} weather={"cloudy"} />
        </Apps>
      </div>
    </Layout>
  ));

const startLat = 48.5560425;
const startLng = 12.1975011;
function randomAppointment() {
  return {
    text: texts[Math.floor(Math.random() * texts.length)],
    location: { lat: startLat + (Math.random() * 0.01 - 0.05), lng: startLng + (Math.random() * 0.01 - 0.05) },
    distance: Math.round(Math.random() * 15000),
    time: moment(moment.now()).add(Math.random() * 60 * 60 * 24 * 3, "seconds")
  };
}

const texts = ["Zahnarzt", "Banktermin", "Café", "Versicherungstermin"];
