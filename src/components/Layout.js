import React from 'react';
import { Link } from 'gatsby';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <header id={styles.header}>
        <div id={styles.inner}>
          <h1><Link to="/">Gio's Blogspot</Link></h1>
          <Link to="/blog">Blog</Link>
          <Link to="/menu">Menu</Link>
        </div>
      </header>
      <main id={styles.main}>
        {children}
      </main>
    </div>
  );
}
