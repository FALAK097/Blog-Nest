/* eslint-disable jsx-a11y/anchor-is-valid */
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

export default function Post({
  _id,
  title,
  summary,
  content,
  cover,
  createdAt,
  author,
}) {
  return (
    <div className="post">
      <div className="images">
        <Link to={`/post/${_id}`}>
          <img src={`https://blog-app-ztl7.onrender.com/` + cover} alt="" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          {author && <a className="author">{author.username}</a>}
          <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
