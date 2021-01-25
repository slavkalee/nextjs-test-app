import styles from './Comment.module.scss';

export default function Comment({ title, text }) {
  return (
    <li className={styles.comment}>
      <h1 className={styles.comment__title}>{title}</h1>
      <p className={styles.comment__text}>{text}</p>
    </li>
  );
}
