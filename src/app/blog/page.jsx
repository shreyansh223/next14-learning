import { getPosts } from '@/components/lib/data';
import styles from './blog.module.css';
import PostCard from '@/components/postCard/postCard';

const BlogPage = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.card} key={posts.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
