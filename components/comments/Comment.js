import React from 'react';

export default function Comment({ title, text }) {
  return (
      <li className="comment">
        <h1 className="comment__title">{title}</h1>
        <p className="comment__text">{text}</p>
      </li>
  );
}
