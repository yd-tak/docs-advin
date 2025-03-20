import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Automate Your Recruitment Process',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Streamline your hiring process with Advin AI-powered automation. 
        From CV screening to interview scheduling and scoring – reduce time-to-hire and increase efficiency.
      </>
    ),
  },
  {
    title: 'Smart AI Interview',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Advin conducts AI-based interviews with real-time evaluation and scoring, ensuring consistent and unbiased candidate assessment.

      </>
    ),
  },
  {
    title: 'Open API',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Integrate Advin with your existing HR tools using our Open API. 
        Seamlessly connect with your ATS, CRM, and other recruitment platforms.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
