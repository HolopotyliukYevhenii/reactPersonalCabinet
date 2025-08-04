import React from 'react';
import { motion } from 'framer-motion';

import styles from './Logo.module.less'; 
import type { HTMLMotionProps } from 'framer-motion';

// ======================== Assets =========================
import logoImage from './ra_logo.svg';

type LogoProps = HTMLMotionProps<'a'> & {
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  ...rest
}) => {
  const combinedClass = `${styles.button} ${className}`.trim();

  return (
    <motion.a
      {...rest}
      href='/'
      className={combinedClass}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <img src={logoImage} alt="Logo" className={styles.logo} />
    </motion.a>
  );
};