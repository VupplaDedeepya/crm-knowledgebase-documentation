import styles from '../pages/index.module.css';

const stages = [
  {label: 'LEAD', cards: 2},
  {label: 'CONTACT', cards: 2},
  {label: 'DEAL', cards: 2},
  {label: 'WON', cards: 2},
];

export default function HeroRightLottie() {
  return (
    <div className={styles.heroRight} aria-hidden="true">
      <div className={styles.pipelineScene}>
        <div className={styles.pipelineColumns}>
          {stages.map((stage) => (
            <div key={stage.label} className={styles.pipelineCol}>
              <span className={styles.pipelineLabel}>{stage.label}</span>
              {Array.from({length: stage.cards}).map((_, index) => (
                <div key={`${stage.label}-${index}`} className={styles.pipelineCard}>
                  <span className={styles.pipelineAvatar} />
                  <span className={styles.pipelineLines}>
                    <i />
                    <i />
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <svg className={styles.pipelineGraph} viewBox="0 0 360 140" fill="none">
          <path
            className={styles.pipelineGraphLine}
            d="M18 96 L78 66 L138 80 L198 40 L258 52 L318 16"
            stroke="#fff"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle className={styles.pipelineGraphDot} cx="18" cy="96" r="4" fill="#fff" />
          <circle className={styles.pipelineGraphDot} cx="78" cy="66" r="4" fill="#fff" />
          <circle className={styles.pipelineGraphDot} cx="138" cy="80" r="4" fill="#fff" />
          <circle className={styles.pipelineGraphDot} cx="198" cy="40" r="4" fill="#fff" />
          <circle className={styles.pipelineGraphDot} cx="258" cy="52" r="4" fill="#fff" />
          <circle className={styles.pipelineGraphDot} cx="318" cy="16" r="4" fill="#fff" />
          <path
            className={styles.pipelineGraphArrow}
            d="M312 6 L332 2 L322 22 Z"
            fill="#fff"
          />
        </svg>
      </div>
    </div>
  );
}
