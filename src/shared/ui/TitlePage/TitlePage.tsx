import React from "react";
import styles from "./TitlePage.module.less";


export interface TitlePageProps {
  title?: string;
}

export const TitlePage: React.FC<TitlePageProps> = ({title}) => {
  return (
    <div className={styles.titlePage}>
      <h2>{title}</h2>
    </div>
  );
}