import * as React from "react";

export interface PresentationComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export default class PresentationComponent<
  P extends PresentationComponentProps = {},
  S = {}
> extends React.PureComponent<P, S> {}
