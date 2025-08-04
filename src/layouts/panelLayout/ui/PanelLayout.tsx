import React from 'react';
import { Outlet } from 'react-router-dom'; // <-- Import Outlet
import styles from './PanelLayout.module.less';
import SideBar from 'src/shared/ui/SideBar/SideBar';
import bannerPhoto from '../assets/banner.webp';
import { TopPanel } from 'src/shared/ui/TopPanel/TopPanel';
export const PanelLayout: React.FC = () => {
  return (
    <div className={styles.panelLayout}>
      
      <SideBar />
      <div className={styles.panelLayout__blockContent}>
        <TopPanel />
        <div className={styles.panelLayout__content}>
            <Outlet />
        </div>
      </div>
    </div>
  );
};


