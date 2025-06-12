"use client";

import styles from "./input.module.scss";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return <input className={styles.input} {...props} />;
}
