import React from 'react';
import styles from './Comment.module.scss';

interface CommentProps {
  title: string;
  text: string;
}

const Comment: React.FC<CommentProps> = ({ title, text }) => {  
  return (
    <li className={styles.comment}>
      <h1 className={styles.comment__title}>{title}</h1>
      <p className={styles.comment__text}>{text}</p>
    </li>
  );
}

export default Comment;
