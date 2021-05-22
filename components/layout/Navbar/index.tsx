import NavbarLink from '../NavbarLink';

import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <NavbarLink href={'/'} exact>
          Пользователи
        </NavbarLink>
        <NavbarLink href={'/posts'}>Посты</NavbarLink>
      </ul>
    </nav>
  );
};

export default Navbar;
