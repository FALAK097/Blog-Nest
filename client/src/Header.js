/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { UserContext } from './UserContext';

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch('https://blog-nest-dguc.onrender.com/profile', {
      credentials: 'include',
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function logout() {
    fetch('https://blog-nest-dguc.onrender.com/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        Blog Nest
      </Link>
      <nav>
        {username && (
          <>
            <span>Hello, {username}</span>
            <Link to="/create">Create New Post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
