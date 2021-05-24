import CurrentUser from '../../currentUser';
import NavbarLink from '../NavbarLink';

import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <CurrentUser />
      <ul className={styles.navbar__list}>
        <NavbarLink href={'/users'} exact>
          Пользователи
        </NavbarLink>
        <NavbarLink href={'/posts'}>Посты</NavbarLink>
      </ul>
    </nav>
  );
};

export default Navbar;
