import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavbarLink({ children, href, exact = false }) {
  const router = useRouter();

  const cond = exact ? router.pathname === href : router.pathname.indexOf(href) > -1;
  const className =
    cond ? 'left__nav_item active' : 'left__nav_item';

  return (
    <Link href={href}>
      <li className={className}>
        <a>{children}</a>
      </li>
    </Link>
  );
}
