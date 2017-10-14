import * as React from "react";

import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import LevelBadge from "./../LevelBadge";

import * as portraitImage from "./../../../../resources/images/portrait.jpg";

storiesOf("LevelBadge", module).add("without image", 
() => <LevelBadge radius={60} borderWidth={4} level={5} color={"#2ecc71"} />)
