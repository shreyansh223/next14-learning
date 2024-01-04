import styles from './blog.module.css';
import PostCard from '@/components/postCard/postCard';
const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <PostCard />
      </div>
      <div className={styles.card}>
        <PostCard />
      </div>
      <div className={styles.card}>
        <PostCard />
      </div>
      <div className={styles.card}>
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
