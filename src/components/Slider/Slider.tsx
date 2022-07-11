import React from "react"

import styles from "./Slider.module.css"

type SliderProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Slider = (props: SliderProps): JSX.Element => {
    return <input type="range" className={styles.defaultSlider} {...props}/>
}