import styles from './home.module.css';
import Image from 'next/image';
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 h1 className={styles.h1}>
          Creative Thoughts Agency.
        </h1>
        <p className={styles.des}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,{' '}
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brand}>
          <Image src="/brands.png" fill />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" className={styles.heroImg} fill />
      </div>
    </div>
  );
};

export default Home;
