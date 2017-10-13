import * as React from "react";
import * as renderer from "react-test-renderer";

import Status from "../Status";

describe("Status", () => {
  test("will render", () => {
    const component = renderer.create(<Status />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
