import { configure } from "@storybook/react";

function loadStories() {
  const context = require.context("../../src", true, /\.story\.(j|t)sx?$/);
  context.keys().forEach(context);
}

configure(loadStories, module);
