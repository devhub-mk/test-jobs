import React from 'react';
import Carousel from "./Carousel";
import "../styles/Stories.css"

const Stories = () => {
  return (
    <div className='stories'>
      <div className="my-story">
        <img src="/images/profile.jpg" alt="profile" />
        <div className='desc'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/* Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
          <p>My Story</p>
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default Stories;