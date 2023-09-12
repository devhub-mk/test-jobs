import React from 'react';
import { IoEarth } from 'react-icons/io5';
import {BsThreeDots} from 'react-icons/bs'

const FeedItems = () => {
    return (
        <div className='feed'>
            <div className="feed-header" key={"feed_id"}>
                <div className="profile-info">
                    <div className="profile">
                        <img src="/images/profile-1.jpg" alt="profile" />
                    </div>
                    <div className="feed-info">
                        <h3>Roman Empire</h3>
                        <ul>
                            <li key={'location'}>Italy</li>
                            <li key={'postTime'}>2hr</li>
                            <li key={'privacy'}><IoEarth /></li>
                        </ul>
                    </div>
                </div>
                <BsThreeDots/>
            </div>
            <div className="feed-content">
                <p className="caption">The Roman Empire was the post-Republican state of ancient Rome. It included territory around the Mediterranean in Europe, North Africa, and Western Asia, and was ruled by emperors.</p>
                <img src="/images/roman.jpg" alt="feed" />
            </div>
        </div>
    )
}

export default FeedItems;
