import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/selectors/posts';
import PostCard from './PostCard/index';

export default function RandomPosts() {
  const posts = useSelector(getAllPosts());

  return (
      <ul className="posts">
        {posts.map((post) => (
          <PostCard
            key={`post_card_${post.id}`}
            title={post.title}
            text={post.body}
            postId={post.id}
          />
        ))}
      </ul>
  );
}
