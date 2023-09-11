import React from 'react';

const Carousel = () => {
    return (
        <div className='Carousel'>
            <div className="theme">
                <div className="item">
                    <img className='story-pic' src="/images/story-1.jpg" alt="story-image" />
                    <img src="/images/profile-1.jpg" alt="profile-pic" className="profile-story" />
                    <p>Name Name</p>
                </div>
                <div className="item">
                    <img className='story-pic' src="/images/story-2.jpg" alt="story-image" />
                    <img src="/images/profile-2.jpg" alt="profile-pic" className="profile-story" />
                    <p>Name Name</p>
                </div>
                <div className="item">
                    <img className='story-pic' src="/images/story-3.jpg" alt="story-image" />
                    <img src="/images/profile-3.jpg" alt="profile-pic" className="profile-story" />
                    <p>Name Name</p>
                </div>
                <div className="item">
                    <img className='story-pic' src="/images/story-4.jpg" alt="story-image" />
                    <img src="/images/profile-4.jpg" alt="profile-pic" className="profile-story" />
                    <p>Name Name</p>
                </div>
                <div className="item">
                    <img className='story-pic' src="/images/story-5.jpg" alt="story-image" />
                    <img src="/images/profile-5.jpg" alt="profile-pic" className="profile-story" />
                </div>
                <div className="item">
                    <img className='story-pic' src="/images/story-6.jpg" alt="story-image" />
                    <img src="/images/profile-6.jpg" alt="profile-pic" className="profile-story" />
                    <p>Name Name</p>
                </div>
                <div className="item">
                    <img className='story-pic' src="/images/story-7.jpg" alt="story-image" />
                    <img src="/images/profile-7.jpg" alt="profile-pic" className="profile-story" />
                    <p>Name Name</p>
                </div>
                <div className="item">
                    <img className='story-pic' src="/images/story-8.jpg" alt="story-image" />
                    <img src="/images/profile-8.jpg" alt="profile-pic" className="profile-story" />
                    <p>Name Name</p>
                </div>
            </div>
            <div className="btn-controls">
                <div className='btn-left'>
                    <svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 448 512"> {/*Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */} <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </div>
                <div className="btn-right">
                    <svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 448 512"> {/*Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */} <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </div>
            </div>
        </div>
    );
};

export default Carousel;