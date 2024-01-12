import Image from 'next/image';
import styles from './singlepost.module.css';

import { Suspense } from 'react';
import Users from './users';
import { getPost } from '@/components/lib/data';

// const getPost = async ({ slug }) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error('unable to fetch the data');
//   }
//   return res.json();
// };
export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostpage = async ({ params }) => {
  const { slug } = params;
  // console.log(slug);
  const post = await getPost(slug);
  console.log(post);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} fill className={styles.img} />
        </div>
      )}

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="/noavatar.png"
            className={styles.avatar}
            width={50}
            height={50}
          />
          <Suspense fallback={<div>Loading....</div>}>
            <Users userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>published on</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostpage;
