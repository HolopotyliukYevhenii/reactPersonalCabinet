import React from 'react';
import styles from './TopPanel.module.less';
import { ButtonLink } from '../ButtonLink/ButtonLink';
export const TopPanel: React.FC = () => {
  return (
    <div className={styles.topPanel}>
      <ButtonLink> Servicetermin vereinbaren </ButtonLink>
      <ButtonLink> Contact </ButtonLink>
    </div>
  );
};


