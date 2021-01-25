import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import styles from './NavbarLink.module.scss';

export default function NavbarLink({ children, href, exact = false }) {
  const router = useRouter();

  const cond = exact
    ? router.pathname === href
    : router.pathname.indexOf(href) > -1;

  return (
    <Link href={href}>
      <li className={classNames(styles.navbar__link, { [styles.navbar__link_active]: cond })}>
        <a>{children}</a>
      </li>
    </Link>
  );
}
