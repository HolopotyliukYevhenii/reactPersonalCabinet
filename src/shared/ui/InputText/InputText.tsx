import React from 'react';
import { motion } from 'framer-motion';
import styles from './InputText.module.less';
import type { HTMLMotionProps } from 'framer-motion';

type InputTextProps = HTMLMotionProps<'input'> & {
  className?: string;
  label?: string;
  id: string; // важно для связи <label htmlFor="...">
};

export const InputText: React.FC<InputTextProps> = ({
  className = '',
  label,
  id,
  ...rest
}) => {
  const combinedClass = `${styles.input} ${className}`.trim();

  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <motion.input
        id={id}
        {...rest}
        className={combinedClass}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};