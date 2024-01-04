import styles from './postcard.module.css';
import Image from 'next/image';
import Link from 'next/link';
const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/13182836/pexels-photo-13182836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2003</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Desc</p>
        <Link href="/blog/post" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
