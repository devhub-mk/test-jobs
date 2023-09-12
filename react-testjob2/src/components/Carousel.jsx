import React, { useState, useRef } from "react";
import "../styles/Carousel.css"
import {BsArrowLeft, BsArrowRight} from "react-icons/bs"

const Carousel = () => {
  const listRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlide = Math.ceil(16 / 5);

  const moveCarousel = (direction) => {
    let newCurrentSlide;

    if (direction === "left" && currentSlide > 1) {
        newCurrentSlide = currentSlide - 1;
        setCurrentSlide(currentSlide - 1);
    }
    else if (direction === "right" && currentSlide < totalSlide) {
        newCurrentSlide = currentSlide + 1;
        setCurrentSlide(currentSlide + 1);
    }
    else{
        return null;
    }
    const translateX = -(newCurrentSlide - 1) * listRef.current.clientWidth;
    listRef.current.style.transform = `translateX(${translateX}px)`;
  };
  return (
    <div className="Carousel">
      <div className="theme" ref={listRef}>
        <div className="item">
          <img className="story-pic" src="/images/story-1.jpg" alt="story" />
          <img
            src="/images/profile-1.jpg"
            alt="profile-pic"
            className="profile-story"
          />
          <p>Name Name</p>
        </div>
        <div className="item">
          <img className="story-pic" src="/images/story-2.jpg" alt="story" />
          <img
            src="/images/profile-2.jpg"
            alt="profile-pic"
            className="profile-story"
          />
          <p>Name Name</p>
        </div>
        <div className="item">
          <img className="story-pic" src="/images/story-3.jpg" alt="story" />
          <img
            src="/images/profile-3.jpg"
            alt="profile-pic"
            className="profile-story"
          />
          <p>Name Name</p>
        </div>
        <div className="item">
          <img className="story-pic" src="/images/story-4.jpg" alt="story" />
          <img
            src="/images/profile-4.jpg"
            alt="profile-pic"
            className="profile-story"
          />
          <p>Name Name</p>
        </div>
        <div className="item">
          <img className="story-pic" src="/images/story-5.jpg" alt="story" />
          <img
            src="/images/profile-5.jpg"
            alt="profile-pic"
            className="profile-story"
          />
          <p>Name Name</p>
        </div>
        <div className="item">
          <img className="story-pic" src="/images/story-6.jpg" alt="story" />
          <img
            src="/images/profile-6.jpg"
            alt="profile-pic"
            className="profile-story"
          />
          <p>Name Name</p>
        </div>
        <div className="item">
          <img className="story-pic" src="/images/story-7.jpg" alt="story" />
          <img
            src="/images/profile-7.jpg"
            alt="profile-pic"
            className="profile-story"
          />
          <p>Name Name</p>
        </div>
        <div className="item">
          <img className="story-pic" src="/images/story-8.jpg" alt="story" />
          <img
            src="/images/profile-8.jpg"
            alt="profile-pic"
            className="profile-story"
          />
          <p>Name Name</p>
        </div>
        <div className="item">
          <img className="story-pic" src="/images/story-1.jpg" alt="story" />
          <img
            src="/images/profile-1.jpg"
            alt="profile-pic"
            className="profile-story"
          />
          <p>Name Name</p>
        </div>
        <div className="item">
          <img className="story-pic" src="/images/story-2.jpg" alt="story" />
          <img
            src="/images/profile-2.jpg"
            alt="profile-pic"
            className="profile-story"
          />
          <p>Name Name</p>
        </div>
        <div className="item">
          <img className="story-pic" src="/images/story-3.jpg" alt="story" />
          <img
            src="/images/profile-3.jpg"
            alt="profile-pic"
            className="profile-story"
          />
          <p>Name Name</p>
        </div>
        <div className="item">
          <img className="story-pic" src="/images/story-4.jpg" alt="story" />
          <img
            src="/images/profile-4.jpg"
            alt="profile-pic"
            className="profile-story"
          />
          <p>Name Name</p>
        </div>
        <div className="item">
          <img className="story-pic" src="/images/story-5.jpg" alt="story" />
          <img
            src="/images/profile-5.jpg"
            alt="profile-pic"
            className="profile-story"
          />
          <p>Name Name</p>
        </div>
        <div className="item">
          <img className="story-pic" src="/images/story-6.jpg" alt="story" />
          <img
            src="/images/profile-6.jpg"
            alt="profile-pic"
            className="profile-story"
          />
          <p>Name Name</p>
        </div>
        <div className="item">
          <img className="story-pic" src="/images/story-7.jpg" alt="story" />
          <img
            src="/images/profile-7.jpg"
            alt="profile-pic"
            className="profile-story"
          />
          <p>Name Name</p>
        </div>
        <div className="item">
          <img className="story-pic" src="/images/story-8.jpg" alt="story" />
          <img
            src="/images/profile-8.jpg"
            alt="profile-pic"
            className="profile-story"
          />
          <p>Name Name</p>
        </div>
      </div>
      <div className="btn-controls">
        <div className={`${currentSlide === 1 ? "btn-left disable" : "btn-left"}`} onClick={() => moveCarousel("left")}>
          <BsArrowLeft/>
        </div>
        <div
          className={`${ currentSlide === totalSlide ? "btn-right disable" : "btn-right"}`} onClick={() => moveCarousel("right")}>
            <BsArrowRight/>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
