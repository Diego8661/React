import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';
import { ThemeProvider } from './ThemeContext'

import styles from './App.scss'

function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Post 01', subtitle: 'Sub 01', likes: 20, read: false, removed: true },
    { id: Math.random(), title: 'Post 02', subtitle: 'Sub 02', likes: 30, read: true, removed: false },
    { id: Math.random(), title: 'Post 03', subtitle: 'Sub 03', likes: 40, read: false, removed: false },
  ]);

  function handleRefresh() {
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          title: `Post 0${prevState.length + 1}`,
          subtitle: `Sub 0${prevState.length + 1}`,
          likes: 50,
          read: false,
        },
      ]);
    }, 1000);
  }

  function handleRemove(postId) {
    setPosts((prevState) => prevState.map(
      post => (
        post.id === postId ? {...post, removed: true} : post
      )
    ))
  }

  return (
    <ThemeProvider>
      <Header>
        <h2 className={styles.title}>Posts da semana</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>
      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemove}
          post={post}
        />
      ))}
    </ThemeProvider>
  )
}

export default App;
