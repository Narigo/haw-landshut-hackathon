import * as React from "react";
import PresentationComponent, { PresentationComponentProps } from "../PresentationComponent/PresentationComponent";
import * as classnames from "classnames";
import * as styles from "./WeatherWidget.pcss";

interface WeatherWidgetProps extends PresentationComponentProps {
  temperature: string;
  weather: "cloudy" | "rainy" | "sunny" | "snow" | "windy";
}

export default class WeatherWidget extends PresentationComponent<WeatherWidgetProps, {}> {
  public render() {
    const { temperature, weather } = this.props;
    return (
      <div className={classnames(styles.weatherWidget, styles[weather])}>
        <span className={styles.temperature}>{temperature}</span>
      </div>
    );
  }
}
