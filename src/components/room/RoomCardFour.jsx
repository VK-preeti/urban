// import React from 'react'
// import { Link } from 'react-router-dom';

// function RoomCardFour(props) {
//     const { roomID, roomImage, roomTitle, roomPrice } = props;
//     return (
//         <>
//             <div className="room__card">
//                 <div className="room__card__top">
//                     <div className="room__card__image">
//                         <Link to={`/room/${roomID}`}>
//                             <img
//                                 src={`/assets/images/pages/room/${roomImage}`}
//                                 width={420}
//                                 height={310}
//                                 alt="room card"
//                             />
//                         </Link>
//                     </div>
//                     <div className="room__price__tag">
//                         <span className="h6 d-block">{roomPrice ? roomPrice : '120$'}</span>
//                     </div>
//                 </div>
//                 <div className="room__card__meta">
//                     <Link to={`/room/${roomID}`} className="room__card__title h5">
//                         {roomTitle ? roomTitle : 'Deluxe Room'}
//                     </Link>
//                     <div className="room__card__meta__info">
//                         <span>
//                             <i className="flaticon-construction" />
//                             35 ft
//                         </span>
//                         <span>
//                             <i className="flaticon-user" />5 Person
//                         </span>
//                     </div>
//                     <p className="font-sm">
//                         Our rooms offer a harmonious blend of comfort and elegance,
//                         designed to provide an exceptional stay for every guest.
//                     </p>
//                     <Link to={`/room/${roomID}`} className="room__card__link">
//                         Discover More
//                     </Link>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default RoomCardFour
 
 

// import React from 'react';
// import { Link } from 'react-router-dom';

// function RoomCardFour(props) {
//     const { roomID, roomImage, roomTitle, roomPrice, roomSlug, roomDetails } = props;
//      const ClickHandler = () => window.scrollTo(0, 0);

    
//     // Function to strip HTML tags
//     const stripHtml = (html) => {
//         if (!html) return '';
//         return html.replace(/<[^>]*>/g, '');
//     };
    
//     return (
//         <>
//             <div className="room__card">
//                 <div className="room__card__top">
//                     <div className="room__card__image">
//                         <Link to={`/room2/${roomSlug || roomID}`} state={{ roomData: props }}>
//                             <img
//                                 src={roomImage}
//                                 width={420}
//                                 height={310}
//                                 alt={roomTitle || "Room"}
//                                 onError={(e) => {
//                                     e.target.onerror = null;
//                                     e.target.src = "/assets/images/pages/room/default-room.jpg";
//                                 }}
//                             />
//                         </Link>
//                     </div>
//                     <div className="room__price__tag">
//                         <span className="h6 d-block">{roomPrice ? roomPrice : 'Contact for price'}</span>
//                     </div>
//                 </div>
//                 <div className="room__card__meta">
//                     <Link to={`/room2/${roomSlug || roomID}`} state={{ roomData: props }} className="room__card__title h5">
//                         {roomTitle ? roomTitle : 'Deluxe Room'}
//                     </Link>
//                     <div className="room__card__meta__info">
//                         <span>
//                             <i className="flaticon-construction" />
//                             {props.roomSize || '35 ft'}
//                         </span>
//                         <span>
//                             <i className="flaticon-user" />{props.roomCapacity || '5 Person'}
//                         </span>
//                     </div>
//                     <p className="font-sm">
//                         {stripHtml(roomDetails)?.split(' ').slice(0, 10).join(' ')}
//                         {stripHtml(roomDetails)?.split(' ').length > 10 ? '...' : ''}
//                         {!roomDetails && 'Our rooms offer a harmonious blend of comfort and elegance.'}
//                     </p>
//                      <Link 
//                         to={`/room2/${roomSlug}`} 
//                         state={{ roomData: props }}
//                         className="room__btn"
//                     >
//                         Discover More
//                     </Link>
                    
//                 </div>
//             </div>
//         </>
//     );
// }

// export default RoomCardFour;

import React from 'react';
import { Link } from 'react-router-dom';

function RoomCardFour(props) {
    const { 
        roomID, 
        roomImage, 
        roomTitle, 
        roomPrice, 
        roomSlug, 
        roomDetails,
        roomSize,
        roomCapacity
    } = props;
    
    // Function to scroll to top on click
    const ClickHandler = () => window.scrollTo(0, 0);
    
    // Function to strip HTML tags
    const stripHtml = (html) => {
        if (!html) return '';
        return html.replace(/<[^>]*>/g, '');
    };
    
    return (
        <div className="room__card">
            <div className="room__card__top">
                <div className="room__card__image">
                    <Link 
                        to={`/rooms/${roomSlug || roomID}`} 
                        state={{ roomSlug: roomSlug }}
                        onClick={ClickHandler}
                    >
                        <img
                            src={roomImage}
                            width={420}
                            height={310}
                            alt={roomTitle || "Room"}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/assets/images/pages/room/default-room.jpg";
                            }}
                        />
                    </Link>
                </div>
                <div className="room__price__tag">
                    <span className=" d-block" style={{
                    display: 'block',
                    fontSize: '1rem',         // Adjust as needed
                    fontWeight: 600,          // Equivalent to h6
                    lineHeight: '1.5',
                    color: '#ab8a62',            // Optional text color
                    // Optional spacing
                    textAlign: 'left',        // Or 'center' if desired
                    wordBreak: 'break-word'   // For responsive wrapping
                    }}>{roomPrice ? roomPrice : 'Contact for price'}</span>
                </div>
            </div>
            <div className="room__card__meta">
                <Link 
                    to={`/rooms/${roomSlug || roomID}`} 
                    state={{ roomSlug: roomSlug }}
                    className="room__card__title h5"
                    onClick={ClickHandler}
                    style={{fontWeight: 'bold'}}
                >
                    {roomTitle ? roomTitle : 'Deluxe Room'}
                </Link>
                <div className="room__card__meta__info">
                    <span>
                        <i className="flaticon-construction" />
                        {roomSize || '35 sq ft'}
                    </span>
                    <span>
                        <i className="flaticon-user" />
                        {roomCapacity || '5 Person'}
                    </span>
                </div>
                <p className="font-sm">
                    {stripHtml(roomDetails)?.split(' ').slice(0, 10).join(' ')}
                    {stripHtml(roomDetails)?.split(' ').length > 10 ? '...' : ''}
                    {!roomDetails && 'Our rooms offer a harmonious blend of comfort and elegance.'}
                </p>
                
                <Link
                    to={`/rooms/${roomSlug || roomID}`}
                    state={{ roomSlug: roomSlug }}
                    className="room__btn"
                    onClick={ClickHandler}
                    style={{color: '#AB8A62'}}
                >
                    Discover More
                </Link>
            </div>
        </div>
    );
}

export default RoomCardFour;