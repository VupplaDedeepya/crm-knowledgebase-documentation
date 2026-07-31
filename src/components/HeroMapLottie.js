import BrowserOnly from '@docusaurus/BrowserOnly';
import Lottie from 'lottie-react';

import animationData from '@site/src/data/heroWorldMap.json';
import styles from '../pages/index.module.css';

function HeroMapLottiePlayer() {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      className={styles.worldMapLottie}
      rendererSettings={{preserveAspectRatio: 'xMidYMid meet'}}
    />
  );
}

export default function HeroMapLottie() {
  return (
    <div className={styles.worldMap} aria-hidden="true">
      <BrowserOnly fallback={<div className={styles.worldMapLottie} />}>
        {() => <HeroMapLottiePlayer />}
      </BrowserOnly>
    </div>
  );
}
