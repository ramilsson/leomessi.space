import React from 'react';
import { useClassName } from 'hooks';
import styles from './Button.module.scss';

export default function Button({ children, styleProps }) {
  const className = useClassName('button', styles, styleProps);
  return <button className={className}>{children}</button>;
}
