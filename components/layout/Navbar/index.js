import NavbarLink from '../NavbarLink';

import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <NavbarLink href={'/'} exact>
          Пользователи
        </NavbarLink>
        <NavbarLink href={'/posts'}>
          Посты
        </NavbarLink>
      </ul>
    </nav>
  );
}
