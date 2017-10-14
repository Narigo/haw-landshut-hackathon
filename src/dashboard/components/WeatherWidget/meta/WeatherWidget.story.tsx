import * as React from "react";

import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import WeatherWidget from "./../WeatherWidget";

storiesOf("WeatherWidget", module).add("default", () => <WeatherWidget temperature={"19° C"} weather={"cloudy"} />);
