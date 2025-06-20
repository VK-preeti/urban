import React, {useState} from 'react'
import RoomCardSix from './RoomCardSix'
import { Link } from 'react-router-dom';
import posts from '../data/data-room.json';

function RoomNine() {
    const [visiblePosts, setVisiblePosts] = useState(6);
    const postsPerLoad = 3;

    const handleLoadMore = () => {
        setVisiblePosts((prev) => prev + postsPerLoad);
    };
    return (
        <>
            {/* single rooms */}
            <div className="rts__section section__padding">
                <div className="container">
                    <div className="row gy-5">
                        {posts.slice(0, visiblePosts).map((data, index) => (
                            <div key={index} className="room__wrapper">
                                <RoomCardSix
                                    roomID={data.id}
                                    roomImage={`${data.image}`}
                                    roomTitle={data.title}
                                    roomPrice={data.price}
                                />
                            </div>
                        ))}
                        {/* Load More Button */}
                        {visiblePosts < posts.length && (
                            <div className="load__more__link">
                                <Link to="#" onClick={handleLoadMore}>Load More</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* single rooms end */}
        </>

    )
}

export default RoomNine