import Link from 'next/link';
import React, { useState } from 'react';
import NavbarLink from './NavbarLink';

export default function Navbar() {
  return (
    <nav className="left">
      <ul className="left__nav">
        <NavbarLink href={'/'}>
          Пользователи
        </NavbarLink>
        <NavbarLink href={'/posts'}>
          Посты
        </NavbarLink>
      </ul>
    </nav>
  );
}
