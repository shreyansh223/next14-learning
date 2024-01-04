import Image from 'next/image';
import styles from './singlepost.module.css';

const SinglePostpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/13182836/pexels-photo-13182836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="/noavatar.png"
            className={styles.avatar}
            width={50}
            height={50}
          />

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>terry andeson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>published on</span>
            <span className={styles.detailValue}>01.01.2023</span>
          </div>
        </div>
        <div className={styles.contact}>awerkjshg</div>
      </div>
    </div>
  );
};

export default SinglePostpage;
/* 1:40:59*/
