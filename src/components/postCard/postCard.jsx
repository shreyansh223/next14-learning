import styles from './postcard.module.css';
import Image from 'next/image';
import Link from 'next/link';
const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} fill className={styles.img} />
          </div>
        )}
        <span className={styles.date}>
          {' '}
          {post.createdAt.toString().slice(4, 16)}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
