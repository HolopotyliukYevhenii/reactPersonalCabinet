// src/pages/MainPage/ui/MainPage.tsx
import React, { useEffect, useState } from 'react';
// =====================================================================
// =========================== Styles ==================================
import styles from './LoginPage.module.less';
// =====================================================================
// =========================== UI Components ===========================
import { Logo } from 'src/shared/ui/Logo/Logo';
import { ButtonLink } from 'src/shared/ui/ButtonLink/ButtonLink';
import { InputText } from 'src/shared/ui/InputText/InputText';

// =====================================================================
// =========================== Assets ==================================

import bannerPhoto  from '../assets/banner.webp'; // Adjust the import path as necessary

export const LoginPage: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [userName, userPassword] = useState<string>('');


  

  return (
    <div className={styles.loginPage}>
      <div className={`${styles.loginPage__block} ${styles.loginPage__form}`}>
        <div className={styles.loginPage__formBlock}>
          
          <div className={styles.loginPage__logoBlock}>
            <Logo/>
          </div>
          
          <div className={styles.loginPage__formTitle}>
            <h1>Login to your account </h1>
            <p> Welcome back ,please enter your account</p>
          </div>
          
          <form className={styles.loginPage__formInputs}>
            
            <InputText
              id='username'
              type="text"
              placeholder="Username"
              value={userName}
              label="Email adress *"
            />

            <InputText
              id='password'
              type="password"
              placeholder="Password"
              onChange={(e) => userPassword(e.target.value)}
              label="Password"
            />

            <ButtonLink href="/dashboard" className={styles.loginPage__button}>
              Login
            </ButtonLink>
          </form>
          
          <p>Not registered yet? <a href=''>Register now</a></p>

        </div>
        
        <div>
          
          <ButtonLink href='/adminPanel' >Administrator-Panel</ButtonLink>
          <ButtonLink href='/userPanel' > Benutzer-Panel </ButtonLink>
        </div>
      </div>

      <div className={`${styles.loginPage__block} ${styles.loginPage__banner}`}> 
        <div className={styles.loginPage__maskImg}>
          <img src={bannerPhoto} alt="Login Banner" />
        </div>
      </div>
      
    </div>
  );
};
