import React, { useState, useEffect } from "react";

import styles from "./SideBar.module.less";

// ===============================================================
// ============================ Components =======================
import { Logo } from 'src/shared/ui/Logo/Logo';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import PaymentIcon from '@mui/icons-material/Payment';

function SideBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(!isMobile);

  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(true);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <button
          className={styles.sidebarToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle sidebar"
        >
          ☰
        </button>
      )}

      <nav className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>

        <Logo />
        <ul className="">
          <li><HomeIcon />Dashboard</li>
          <li>
            <a href="/panel/orders" ><PaymentIcon />Orders</a></li>
          <li><SettingsIcon/>Profile</li>
          <li>
            <a href='/'><LogoutIcon />Logout</a>
            </li>
        </ul>
      </nav>
    </>
  );
}

export default SideBar;
