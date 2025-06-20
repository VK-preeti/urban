 import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getRoom } from '../../api/getRoom';

function RoomCardFive( {roomID} ) {
    
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getRoom()
            .then(data => {
                if (data && data.rooms) {
                    const matchedRoom = data.rooms.find(r => r.id === roomID);
                    if (matchedRoom) {
                        setRoom(matchedRoom);
                        console.log("Room all part get api=============>", matchedRoom);
                    }
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch room data:", err);
                setLoading(false);
            });
    }, [roomID]);

    if (loading) {
        return <Skeleton height={310} />;
    }

    if (!room) {
        return null; // Do not render anything if room not found
    }

    const {
        banner_image,
        title,
        person_allow,
        size,
        price,
        category,

    } = room;

    return (
        <div className="room__card">
            <div className="room__card__top">
                <div className="room__card__image position-relative">
                    {/* <Link to={`/room2/${roomID}`}> */}
                        <img
                            src={banner_image}
                            width={420}
                            height={310}
                            alt="room"
                        />
                         <button 
                            className="btn btn-sm position-absolute top-0 start-0 m-2 px-3 py-1"
                            style={{
                            backgroundColor: 'var(--btn-1)', 
                            color: '#fff', 
                            border: 'none', 
                            borderRadius: '20px',
                            fontSize: '0.85rem',
                            // paddingTop: '10px',
                            }}
                        >
                            {category}
                        </button>
                    {/* </Link> */}
                </div>
                {/* <div className="room__card__image position-relative">
  <img
    src={banner_image}
    width={420}
    height={310}
    alt="room"
    className="img-fluid rounded"
  />
  
  <button 
    className="btn btn-sm position-absolute top-0 start-0 m-2 px-3 py-1"
    style={{
      backgroundColor: 'var(--btn-1)', 
      color: '#fff', 
      border: 'none', 
      borderRadius: '20px',
      fontSize: '0.85rem'
    }}
  >
    {category}
  </button>
</div> */}

            </div>
            <div className="room__card__meta">
                {/* <Link to={`/room2/${roomID}`} className="room__card__title h5"> 
                    {title || 'Deluxe Room'}
                </Link> */}
                <div className="room__card__title h5" style={{fontWeight: 'bold'}}> {title || 'Deluxe Room'} </div>
                 
                <div className="room__card__meta__info">
                    <span>
                        <i className="flaticon-construction" />
                        {size} sq ft
                    </span>
                    <span>
                        <i className="flaticon-user" />
                        {person_allow} Person
                    </span>
                </div>
                <div className="room__price__tag">
                <a className="room__card__link">
                        Discover More
                    </a>

                 {/* <Link to={`/room2/${roomID}`} className="room__card__link">
                  <span>Discover More</span>
               </Link> */}
               {/* <Link
                                   to={`/rooms/${roomSlug || roomID}`}
                                   state={{ roomSlug: roomSlug }}
                                   className="room__btn"
                                   onClick={ClickHandler}
                               >
                                   Discover More
                               </Link> */}
                    {/* <span className="h6 d-block">
                        {price ? `₹${price}` : 'Price on request'}
                    </span> */}
                </div>
            </div>
        </div>
    );
}

export default RoomCardFive;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';
//  // Assuming you have this API function
 
// import { getRoom } from '../../api/getRoom';

// function RoomCardFive({ roomID }) {
//     const [room, setRoom] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         setLoading(true);
//         getRoom(roomID)
//             .then(data => {
//                 if (data && data.rooms) {
//                     setRoom(data.rooms);
//                     console.log("get all room list============>", data.rooms );
//                 }
//                 setLoading(false);
//             })
//             .catch(err => {
//                 console.error(`Failed to fetch room with ID ${roomID}:`, err);
//                 setLoading(false);
//             });
//     }, [roomID]);

//     if (loading) {
//         return (
//             <div className="room__card rts__card__one">
//                 <Skeleton height={200} className="mb-3" />
//                 <div className="room__card__content">
//                     <Skeleton height={25} className="mb-2" />
//                     <Skeleton height={20} count={2} className="mb-2" />
//                     <Skeleton height={45} width={120} />
//                 </div>
//             </div>
//         );
//     }

//     if (!room) {
//         return (
//             <div className="room__card rts__card__one">
//                 <div className="room__card__content">
//                     <h5>Room data not available</h5>
//                 </div>
//             </div>
//         );
//     }

//         const {
//         banner_image,
//         title,
//         person_allow,
//         size,
//         price
//     } = room;

//     return (
//         <div className="room__card rts__card__one">
//             <div className="room__card__image">
//                 <Link to={`/room-details/${roomID}`}>
//                     {/* <img src={room.banner_image || '/assets/images/placeholder-room.webp'} alt={room.title} /> */}
//                      <img
//                             src={banner_image}
//                             width={420}
//                             height={310}
//                             alt="room"
//                         />
//                 </Link>
//                 <div className="room__badge">${room.price}/Night</div>
//             </div>
//             <div className="room__card__content">
//                 <h4>
//                     <Link to={`/room-details/${roomID}`}>{room.title}</Link>
//                 </h4>
//                 <div className="room__meta mb-10">
//                     <span>
//                         <i className="flaticon-construction" />
//                         {room.size} ft
//                     </span>
//                     <span>
//                         <i className="flaticon-user" />
//                         {room.person_allow} Person
//                     </span>
//                 </div>
//                 <p className="mb-20">{room.short_description || room.title}</p>
//                 <Link to={`/room-details/${roomID}`} className="theme-btn btn-style fill mt-auto">
//                     <span>View Details</span>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default RoomCardFive;


 
 