import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

function NavbarLink({ children, href }) {
  const router = useRouter();

  const className =
    router.pathname === href ? 'left__nav_item active' : 'left__nav_item';

  return (
    <Link href={href}>
      <li className={className}>
        <a>{children}</a>
      </li>
    </Link>
  );
}

export default NavbarLink;
