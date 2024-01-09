'use client';

import Link from 'next/link';
import styles from './links.module.css';
import NavLink from './navLinks/navLink';
import { useState } from 'react';
import Image from 'next/image';
const Links = () => {
  const links = [
    { title: 'HomePage', path: '/' },
    {
      title: 'About',
      path: '/about',
    },
    { title: 'Contact', path: '/contact' },
    {
      title: 'Blog',
      path: '/blog',
    },
  ];

  const session = true;
  const isAdmin = true;
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: 'login', path: '/login' }} />
        )}
      </div>

      <Image
        src="/menu.png"
        className={styles.menuButton}
        onClick={() => setOpen(!open)}
        width={25}
        height={25}
      />

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title}></NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
