import React from 'react';
import { SiteMenu } from '../components';

import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.root}>
      <SiteMenu />
      Hello
    </div>
  );
}
