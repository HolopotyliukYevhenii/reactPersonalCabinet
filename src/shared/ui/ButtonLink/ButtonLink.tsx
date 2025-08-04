import React from 'react';
import { motion } from 'framer-motion';

import styles from './ButtonLink.module.less'; 
import type { HTMLMotionProps } from 'framer-motion';


type ButtonLinkProps = HTMLMotionProps<'a'> & {
  children: React.ReactNode;
  className?: string;
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  className = '',
  ...rest
}) => {
  const combinedClass = `${styles.button} ${className}`.trim();

  return (
    <motion.a
      {...rest}
      className={combinedClass}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.a>
  );
};