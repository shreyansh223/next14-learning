import Image from 'next/image';
import styles from './about.module.css';

export const metadata = {
  title: ' About Page',
  description: 'About description',
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h4 className={styles.h4}>About Agency.</h4>
        <p className={styles.des}>
          We create digital ideas that are bigger, bolder, braver and better.
        </p>
        <div className={styles.paraContainer}>
          <p className={styles.para}>
            {' '}
            We create digital ideas that are bigger, bolder,braver and better.We
            believe in good ideas, flexibility and precission. We're world's Our
            Special Team best consulting and finance solution provider. Wide
            range of web and software development services.
          </p>
        </div>
        <div className={styles.numbers}>
          <div className={styles.num}>
            10 K+
            <div className={styles.text}>years or experience</div>
          </div>
          <div className={styles.num}>
            234 K+
            <div className={styles.text}>People reached</div>
          </div>
          <div className={styles.num}>
            5 K+
            <div className={styles.text}>Services and plugins</div>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/about.png" className={styles.aboutImg} fill />
      </div>
    </div>
  );
};

export default AboutPage;
