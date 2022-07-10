import React from "react"

import styles from "./slider.module.css"

interface Props {
    min: number;
    max: number;
    step?: number;
    style?: React.CSSProperties;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default class Slider extends React.Component<Props, {}> {
    render(): JSX.Element {
        return <input className={styles.defaultSlider + " " + styles.sliderProgress} type="range" min={this.props.min}
                      max={this.props.max} step={this.props.step}
                      style={this.props.style} onChange={this.props.onChange}/>;
    }
}