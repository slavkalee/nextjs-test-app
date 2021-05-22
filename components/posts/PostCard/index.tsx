import React, { memo, useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';

import styles from './PostCard.module.scss';
import CommentBlock from '../../comments/Comment';
import { Comment } from '../../../redux/reducers/posts';

interface PostCardProps {
  title: string;
  text: string;
  postId: number;
}

const PostCard: React.FC<PostCardProps> = ({ title, text, postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isShow, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (isShow) {
      getComments();
    }
  }, [isShow]);

  async function getComments() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      const comments = await response.json();
      setComments(comments);
    } catch (e) {
      alert(e);
    }
  }

  const toggleClick = () => setShow(!isShow);

  return (
    <Transition in={isShow} timeout={500}>
      {(state: string) => (
        <li className={[styles.post, styles[state]].join(' ')}>
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
                <CommentBlock
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
};

const memoizedPostCard = memo(PostCard);

export default memoizedPostCard;
