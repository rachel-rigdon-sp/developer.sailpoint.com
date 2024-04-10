import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

export default function AmbassadorBanner() {
  return (
    <div>

      <div className={styles.imageContainer}>
        
      <img className={styles.headerImage} src={useBaseUrl('/ambassador/ambassador_banner_template.png')}></img>
        <div className={styles.ambassadorHeaderText}>
          Ambassadors
        </div>
      </div >
    </div>
  );
}
