import { memo, useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';

import styles from './PostCard.module.scss';
import Comment from '../../comments/Comment';
import classNames from 'classnames';

export default memo(function PostCard({ title, text, postId }) {
  const [comments, setComments] = useState(null);
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    isShow && getComments();
  }, [isShow]);

  async function getComments() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    const comments = await response.json();
    setComments(comments);
  }

  const toggleClick = () => setShow(!isShow);

  return (
    <Transition in={isShow} timeout={500}>
      {(state) => (
        <li className={classNames(styles.post, styles[state])}>
          <h1 className={styles.post__title}>{title}</h1>
          <p className={styles.post__text}>{text}</p>
          <div className={styles.post__btnContainer}>
            <button className={styles.post__btn} onClick={toggleClick}>
              {isShow ? 'Скрыть комментарии' : 'Открыть комментарии'}
            </button>
          </div>

          {isShow && comments && (
            <ul className={styles.commentBlock}>
              {comments.map((comment) => (
                <Comment
                  key={`comment_${comment.id}`}
                  title={comment.name}
                  text={comment.body}
                />
              ))}
            </ul>
          )}
        </li>
      )}
    </Transition>
  );
});
