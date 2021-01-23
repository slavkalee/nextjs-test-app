import { useSelector } from 'react-redux';
import { getUserAllPosts } from '../../redux/selectors/posts';
import PostCard from './PostCard'

export default function UserPosts() {
  const userPosts = useSelector(getUserAllPosts());
  return (
    <div>
      <div className="posts">
      <ul className="posts__list">
        {userPosts.map((post) => (
          <PostCard
            key={`post_card_${post.id}`}
            title={post.title}
            text={post.body}
            postId={post.id}
          />
        ))}
      </ul>
    </div>
    </div>
  )
}