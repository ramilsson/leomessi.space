import React from 'react';
import { useClassName } from 'hooks';
import styles from './Tag.module.scss';

export default function Tag({ children, ...styleProps }) {
  const className = useClassName('tag', styles, styleProps);
  return <span className={className}>{children}</span>;
}
