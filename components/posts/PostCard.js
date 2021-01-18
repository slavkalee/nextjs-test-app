import React, { memo, useEffect, useState } from 'react';
import Comment from '../comments/Comment';
import { Transition } from 'react-transition-group';

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
        <li className={`posts__list_card post__${state}`}>
          <h1 className="post__title">{title}</h1>
          <p className="post__text">{text}</p>
          <div className="post__btn--container">
            <button className="post__btn" onClick={toggleClick}>
              {isShow ? 'Скрыть комментарии' : 'Открыть комментарии'}
            </button>
          </div>

          {isShow && comments && (
            <ul className="comment--block">
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
