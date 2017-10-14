import * as React from "react";

import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import Apps from "./../Apps";

storiesOf("Apps", module).add("default", () => <Apps backgroundImageClass={"streetImage"}>Guten morgen!</Apps>);
