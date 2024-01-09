import { getUser } from '@/components/lib/data';
import styles from './singlepost.module.css';

// const getUser = async ({ userId }) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );
//   if (!res.ok) {
//     throw new Error('unable to fetch the data');
//   }
//   return res.json();
// };

const Users = async ({ userId }) => {
  const user = await getUser(userId);
  return (
    <div className={styles.detailText}>
      <span className={styles.detailTitle}>Author</span>
      <span className={styles.detailValue}>{user.username}</span>
    </div>
  );
};

export default Users;
