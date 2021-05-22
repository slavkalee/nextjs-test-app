import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './NavbarLink.module.scss';


interface NavbarLinkProps {
  children: React.ReactNode;
  href: string;
  exact?: boolean;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ children, href, exact = false }) => {
  const router = useRouter();

  const cond = exact
    ? router.pathname === href
    : router.pathname.indexOf(href) > -1;

  const className = cond ? styles.navbar__link_active : styles.navbar__link

  return (
    <Link href={href}>
      <li
        className={className}
      >
        <a>{children}</a>
      </li>
    </Link>
  );
}

export default NavbarLink;
