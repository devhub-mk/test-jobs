import React from 'react';
import Stories from './Stories'
import Post from './Post';
import Feed from './Feed';
const Container = () => {
  return (
    <div className='container'>
      <Stories/>
      <Post/>
      <Feed/>
    </div>
  );
};

export default Container;
