// import React from 'react'
// import { Link } from 'react-router-dom';

// function RoomCardOne (props) {
//     const { roomID, roomImage, roomTitle, roomPrice } = props;
//     return (
//         <div className="room__slide__box radius-6">
//             <div className="room__thumbnail jara-mask-2 jarallax">
//                 <img
//                     height={585}
//                     width={420}
//                     className="radius-6 jarallax-img"
//                     src={`/assets/images/room/${roomImage}`}
//                     alt=""
//                 />
//             </div>
//             <div className="room__content">
//                 <Link to={`/room/${roomID}`} className="room__title">
//                     <h5>{roomTitle ? roomTitle : 'The Ritz-Carlton'}</h5>
//                 </Link>
//                 <div className="room__content__meta">
//                     <span>
//                         <i className="flaticon-construction" /> 35 ft
//                     </span>
//                     <span>
//                         <i className="flaticon-user" />2 Person
//                     </span>
//                 </div>
//                 {/* <span className="h4 rent mb-0 mt-15 d-block">{roomPrice ? roomPrice : '100$'}</span> */}
//             </div>
//         </div>
//     )
// }

// export default RoomCardOne
 
 

// import React from 'react';
// import { Link } from 'react-router-dom';

// function RoomCardOne(props) {
//     const {
//         roomID,
//         roomImage,
//         roomTitle,
//         roomPrice,
//         roomSlug,
//         roomDetails,
//         roomSize,
//         roomCapacity,
//         LazyImage  // Accept LazyImage component from parent
//     } = props;

//     const ClickHandler = () => window.scrollTo(0, 0);

//     // Determine which image component to use
//     const ImageComponent = LazyImage ? (
//         <LazyImage
//             src={roomImage}
//             alt={roomTitle || 'Room Image'}
//             className="radius-6 jarallax-img"
//         />
//     ) : (
//         <img
//             height={585}
//             width={420}
//             style={{ objectFit: 'inherit !important' }}
//             className="radius-6 jarallax-img"
//             src={roomImage}
//             alt={roomTitle || 'Room Image'}
//         />
//     );

//     return (
//         <div className="room__slide__box radius-6">
//             <div className="room__thumbnail jara-mask-2 jarallax" style={{padding: '5px'}}>
//                 {ImageComponent}
//             </div>
//             <div className="room__content">
//                 <Link
//                     to={`/rooms/${roomSlug || roomID}`}
//                     state={{
//                         roomID,
//                         roomSlug,
//                         roomImage,
//                         roomTitle,
//                         roomPrice,
//                         roomDetails,
//                         roomSize,
//                         roomCapacity
//                     }}
//                     className="room__card__title h5"
//                     onClick={ClickHandler}
//                 >
//                     <h5 style={{fontSize: '1.8rem', fontweight: '400',
//     fontfamily: 'var(--glida)', color: 'white'}}>{roomTitle || 'The Ritz-Carlton'}</h5>
//                 </Link>
//                 <div className="room__content__meta">
//                     <span><i className="flaticon-construction" /> {roomSize} ft</span>
//                     <span><i className="flaticon-user" /> {roomCapacity} Person</span>
//                 </div>
//                 {/* Price display is conditional */}
//                 {roomPrice && <span className="h4 rent mb-0 mt-15 d-block">{roomPrice}</span>}
//             </div>
//         </div>
//     );
// }

// export default RoomCardOne;

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { jarallax } from 'jarallax';
window.jarallax = jarallax;

function RoomCardOne(props) {
    const {
        roomID,
        roomImage,
        roomTitle,
        roomPrice,
        roomSlug,
        roomDetails,
        roomSize,
        roomCapacity,
        LazyImage  // Optional: Lazy loading component
    } = props;

    const jarallaxRef = useRef(null);

    const ClickHandler = () => window.scrollTo(0, 0);

    // Re-initialize jarallax when image loads (or on mount)
    const handleImageLoad = () => {
        setTimeout(() => {
            if (window.jarallax) {
                try {
                    window.jarallax(jarallaxRef.current, 'destroy'); // Avoid duplicates
                    window.jarallax(jarallaxRef.current, {
                        speed: 0.3
                    });
                } catch (error) {
                    console.error('Jarallax init failed:', error);
                }
            }
        }, 100); // Small delay to ensure DOM update
    };

    // Render image (lazy or regular) with onLoad hook
    const ImageComponent = LazyImage ? (
        <LazyImage
            src={roomImage}
            alt={roomTitle || 'Room Image'}
            className="radius-6 jarallax-img"
            onLoad={handleImageLoad}
        />
    ) : (
        <img
            height={585}
            width={420}
            style={{ objectFit: 'cover' }}
            className="radius-6 jarallax-img"
            src={roomImage}
            alt={roomTitle || 'Room Image'}
            onLoad={handleImageLoad}
        />
    );

    // Fallback init in case onLoad doesn't fire (e.g., image cached)
    useEffect(() => {
        if (jarallaxRef.current && window.jarallax) {
            window.jarallax(jarallaxRef.current, {
                speed: 0.3
            });
        }

        return () => {
            if (jarallaxRef.current && window.jarallax) {
                window.jarallax(jarallaxRef.current, 'destroy');
            }
        };
    }, [roomImage]);

    return (
        <div className="room__slide__box radius-6">
            <div
                ref={jarallaxRef}
                className="room__thumbnail jara-mask-2 jarallax"
                style={{ padding: '5px' }}
            >
                {ImageComponent}
            </div>

            <div className="room__content">
                <Link
                    to={`/rooms/${roomSlug || roomID}`}
                    state={{
                        roomID,
                        roomSlug,
                        roomImage,
                        roomTitle,
                        roomPrice,
                        roomDetails,
                        roomSize,
                        roomCapacity
                    }}
                    className="room__card__title h5"
                    onClick={ClickHandler}
                >
                    <h5 style={{
                        fontSize: '1.8rem',
                        fontWeight: '400',
                        fontFamily: 'var(--glida)',
                        color: 'white'
                    }}>
                        {roomTitle || 'The Ritz-Carlton'}
                    </h5>
                </Link>

                <div className="room__content__meta">
                    <span><i className="flaticon-construction" /> {roomSize} sq ft</span>
                    <span><i className="flaticon-user" /> {roomCapacity} Person</span>
                </div>

                {roomPrice && (
                    <span className="h4 rent mb-0 mt-15 d-block">
                        {roomPrice}
                    </span>
                )}
            </div>
        </div>
    );
}

export default RoomCardOne;
