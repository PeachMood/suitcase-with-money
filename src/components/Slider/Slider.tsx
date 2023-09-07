import React, { FC, InputHTMLAttributes } from "react"

import styles from "./Slider.module.css"

type SliderProps = InputHTMLAttributes<HTMLInputElement>;

export const Slider: FC<SliderProps> = (props: SliderProps) => {
  return <input type="range" className={styles.defaultSlider} {...props} />
}
