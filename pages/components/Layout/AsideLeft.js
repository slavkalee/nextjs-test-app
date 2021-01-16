import Link from 'next/link';
import React, { useState } from 'react';

export default function AsideLeft() {
  return (
    <aside className="left">
      <ul className="left__nav">
        <li className="left__nav_item">
          <Link href={'/'}>
            <a>Пользователи</a>
          </Link>
        </li>
        <li className="left__nav_item">
          <Link href={'/posts'}>
            <a>Посты</a>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
