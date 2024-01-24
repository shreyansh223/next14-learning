import { auth } from '../lib/auth';
import Links from './links/Links';
import styles from './navbar.module.css';
import Link from 'next/link';
const Navbar = async () => {
  'use server';
  const session = await auth();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        logo
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
