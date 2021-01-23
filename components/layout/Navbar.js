import NavbarLink from './NavbarLink';

export default function Navbar() {

  return (
    <nav className="left">
      <ul className="left__nav">
        <NavbarLink href={'/'} exact={true}>
          Пользователи
        </NavbarLink>
        <NavbarLink href={'/posts'}>
          Посты
        </NavbarLink>
      </ul>
    </nav>
  );
}
