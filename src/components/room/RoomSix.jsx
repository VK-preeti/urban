import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RoomCardFour from './RoomCardFour';
import posts from '../data/data-room.json';

function RoomSix() {
    const [visiblePosts, setVisiblePosts] = useState(6); // Initially show 6 posts
    const postsPerLoad = 3; // Number of posts to load each time

    const handleLoadMore = () => {
        setVisiblePosts((prev) => prev + postsPerLoad);
    };

    return (
        <>
            {/* single rooms */}
            <div className="rts__section">
                <div className="container">
                    <div className="row g-30">
                        {posts.slice(0, visiblePosts).map((data, index) => (
                            <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                                <RoomCardFour
                                    roomID={data.id}
                                    roomImage={`${data.image}`}
                                    roomTitle={data.title}
                                    roomPrice={data.price}
                                />
                            </div>
                        ))}
                    </div>
                    {/* row end */}
                    {visiblePosts < posts.length && ( // Show "Load More" button only if there are more posts
                        <div className="load__more__link">
                            <Link to="#" onClick={handleLoadMore}>Load More</Link>
                        </div>
                    )}
                </div>
            </div>
            {/* single rooms end */}
        </>
    );
}

export default RoomSix;
