import React, { useState } from 'react';
import RoomCardFive from './RoomCardFive';
import posts from '../data/data-room.json';
import { Link } from 'react-router-dom';

function RoomEight() {
    const [visiblePosts, setVisiblePosts] = useState(6);
    const postsPerLoad = 3;

    const handleLoadMore = () => {
        setVisiblePosts((prev) => prev + postsPerLoad);
    };

    return (
        <>
            {/* Single Rooms Section */}
            <div className="rts__section pt-120">
                <div className="container">
                    <div className="row g-30 main__content">
                        
                        {/* Left Side (Room Cards) */}
                        <div className="col-xl-12 col-lg-12 order-2 order-lg-1">
                            <div className="row g-30">
                                {posts.slice(0, visiblePosts).map((data, index) => (
                                    <div key={index} className="col-xl-6 col-lg-12 col-md-6">
                                        <RoomCardFive
                                            roomID={data.id}
                                            roomImage={`${data.image}`}
                                            roomTitle={data.title}
                                            roomPrice={data.price}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Load More Button */}
                            {visiblePosts < posts.length && (
                                <div className="load__more__link">
                                    <Link to="#" onClick={handleLoadMore}>Load More</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RoomEight;
