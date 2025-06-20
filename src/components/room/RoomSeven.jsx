// import React, { useState } from 'react';
// import RoomCardFive from './RoomCardFive';
// import posts from '../data/data-room.json';
// import { Link } from 'react-router-dom';

// function RoomSeven() {
//     const [visiblePosts, setVisiblePosts] = useState(6);
//     const postsPerLoad = 3;

//     const handleLoadMore = () => {
//         setVisiblePosts((prev) => prev + postsPerLoad);
//     };

//     return (
//         <>
//             {/* Single Rooms Section */}
//             <div className="rts__section pt-120">
//                 <div className="container">
//                     <div className="row g-30 main__content sticky-wrap">
                        
//                         {/* Left Side (Room Cards) */}
//                         <div className="col-xl-8 col-lg-7 order-2 order-lg-1">
//                             <div className="row g-30">
//                                 {posts.slice(0, visiblePosts).map((data, index) => (
//                                     <div key={index} className="col-xl-6 col-lg-12 col-md-6">
//                                         <RoomCardFive
//                                             roomID={data.id}
//                                             roomImage={`${data.image}`}
//                                             roomTitle={data.title}
//                                             roomPrice={data.price}
//                                         />
//                                     </div>
//                                 ))}
//                             </div>

//                             {/* Load More Button */}
//                             {visiblePosts < posts.length && (
//                                 <div className="load__more__link">
//                                     <Link to="#" onClick={handleLoadMore}>Load More</Link>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Right Side (Sticky Booking Form) */}
//                         <div className="col-xl-4 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0">
//                             <div className="rts__booking__form has__background no__shadow sticky-item">
//                                 <form action="#" method="post" className="advance__search">
//                                     <h5>Book Your Stay</h5>
//                                     <div className="advance__search__wrapper">
                                        
//                                         {/* Check-in Input */}
//                                         <div className="query__input wow fadeInUp">
//                                             <label htmlFor="check__in" className="query__label">Check In</label>
//                                             <div className="query__input__position">
//                                                 <input type="text" id="check__in" name="check__in" placeholder="15 Jun 2024" required />
//                                                 <div className="query__input__icon"><i className="flaticon-calendar" /></div>
//                                             </div>
//                                         </div>

//                                         {/* Check-out Input */}
//                                         <div className="query__input wow fadeInUp" data-wow-delay=".3s">
//                                             <label htmlFor="check__out" className="query__label">Check Out</label>
//                                             <div className="query__input__position">
//                                                 <input type="text" id="check__out" name="check__out" placeholder="15 May 2024" required />
//                                                 <div className="query__input__icon"><i className="flaticon-calendar" /></div>
//                                             </div>
//                                         </div>

//                                         {/* Adults Dropdown */}
//                                         <div className="query__input wow fadeInUp" data-wow-delay=".4s">
//                                             <label htmlFor="adult" className="query__label">Adult</label>
//                                             <div className="query__input__position">
//                                                 <select name="adult" id="adult" className="form-select">
//                                                     <option value={1}>1 Person</option>
//                                                     <option value={2}>2 Person</option>
//                                                     <option value={3}>3 Person</option>
//                                                     <option value={4}>4 Person</option>
//                                                     <option value={5}>5 Person</option>
//                                                     <option value={6}>6 Person</option>
//                                                     <option value={7}>7 Person</option>
//                                                 </select>
//                                                 <div className="query__input__icon"><i className="flaticon-user" /></div>
//                                             </div>
//                                         </div>

//                                         {/* Children Dropdown */}
//                                         <div className="query__input wow fadeInUp" data-wow-delay=".5s">
//                                             <label htmlFor="child" className="query__label">Child</label>
//                                             <div className="query__input__position">
//                                                 <select name="child" id="child" className="form-select">
//                                                     <option value={1}>1 Child</option>
//                                                     <option value={2}>2 Child</option>
//                                                     <option value={3}>3 Child</option>
//                                                     <option value={4}>4 Child</option>
//                                                     <option value={5}>5 Child</option>
//                                                     <option value={6}>6 Child</option>
//                                                     <option value={7}>7 Child</option>
//                                                 </select>
//                                                 <div className="query__input__icon"><i className="flaticon-user" /></div>
//                                             </div>
//                                         </div>

//                                         {/* Search Button */}
//                                         <button className="theme-btn btn-style fill no-border search__btn wow fadeInUp" data-wow-delay=".6s">
//                                             <span><i className="flaticon-search-1" /> Search</span>
//                                         </button>

//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                         {/* Sticky Booking Form End */}

//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default RoomSeven;

 

// import React, { useState, useEffect } from 'react';
// import RoomCardFive from './RoomCardFive';
// import { Link } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
//   // Assuming this is your API function
// import { getRoom } from '../../api/getRoom';

// function RoomSeven() {
//     const [rooms, setRooms] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [visibleRooms, setVisibleRooms] = useState(6);
//     const roomsPerLoad = 3;

//     useEffect(() => {
//         setLoading(true);
//         getRoom()
//             .then(data => {
//                 if (data && data.rooms) {
//                     setRooms(data.rooms);
//                 }
//                 setLoading(false);
//             })
//             .catch(err => {
//                 console.error("Failed to fetch rooms:", err);
//                 setLoading(false);
//             });
//     }, []);

//     const handleLoadMore = () => {
//         setVisibleRooms(prev => prev + roomsPerLoad);
//     };

//     // Loading skeleton display
//     const LoadingSkeleton = () => (
//         <div className="row g-30">
//             {[...Array(6)].map((_, index) => (
//                 <div key={index} className="col-xl-6 col-lg-12 col-md-6">
//                     <Skeleton height={310} className="mb-4" />
//                     <Skeleton height={30} className="mb-2" />
//                     <Skeleton height={20} count={2} className="mb-2" />
//                 </div>
//             ))}
//         </div>
//     );

//     return (
//         <>
//             {/* Single Rooms Section */}
//             <div className="rts__section pt-120">
//                 <div className="container">
//                     <div className="row g-30 main__content sticky-wrap">
                        
//                         {/* Left Side (Room Cards) */}
//                         <div className="col-xl-8 col-lg-7 order-2 order-lg-1">
//                             {loading ? (
//                                 <LoadingSkeleton />
//                             ) : (
//                                 <>
//                                     <div className="row g-30">
//                                         {rooms.slice(0, visibleRooms).map((room, index) => (
//                                             <div key={room.id || index} className="col-xl-6 col-lg-12 col-md-6">
//                                                 <RoomCardFive roomID={room.id} />
//                                             </div>
//                                         ))}
//                                     </div>

//                                     {/* Load More Button */}
//                                     {visibleRooms < rooms.length && (
//                                         <div className="load__more__link">
//                                             <Link to="#" onClick={handleLoadMore}>Load More</Link>
//                                         </div>
//                                     )}
                                    
//                                     {/* No rooms message */}
//                                     {rooms.length === 0 && !loading && (
//                                         <div className="text-center py-5">
//                                             <h4>No rooms available at the moment</h4>
//                                         </div>
//                                     )}
//                                 </>
//                             )}
//                         </div>

//                         {/* Right Side (Sticky Booking Form) */}
//                         <div className="col-xl-4 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0">
//                             <div className="rts__booking__form has__background no__shadow sticky-item">
//                                 <form action="#" method="post" className="advance__search">
//                                     <h5>Book Your Stay</h5>
//                                     <div className="advance__search__wrapper">
                                        
//                                         {/* Check-in Input */}
//                                         <div className="query__input wow fadeInUp">
//                                             <label htmlFor="check__in" className="query__label">Check In</label>
//                                             <div className="query__input__position">
//                                                 <input type="text" id="check__in" name="check__in" placeholder="15 Jun 2024" required />
//                                                 <div className="query__input__icon"><i className="flaticon-calendar" /></div>
//                                             </div>
//                                         </div>

//                                         {/* Check-out Input */}
//                                         <div className="query__input wow fadeInUp" data-wow-delay=".3s">
//                                             <label htmlFor="check__out" className="query__label">Check Out</label>
//                                             <div className="query__input__position">
//                                                 <input type="text" id="check__out" name="check__out" placeholder="15 May 2024" required />
//                                                 <div className="query__input__icon"><i className="flaticon-calendar" /></div>
//                                             </div>
//                                         </div>

//                                         {/* Adults Dropdown */}
//                                         <div className="query__input wow fadeInUp" data-wow-delay=".4s">
//                                             <label htmlFor="adult" className="query__label">Adult</label>
//                                             <div className="query__input__position">
//                                                 <select name="adult" id="adult" className="form-select">
//                                                     <option value={1}>1 Person</option>
//                                                     <option value={2}>2 Person</option>
//                                                     <option value={3}>3 Person</option>
//                                                     <option value={4}>4 Person</option>
//                                                     <option value={5}>5 Person</option>
//                                                     <option value={6}>6 Person</option>
//                                                     <option value={7}>7 Person</option>
//                                                 </select>
//                                                 <div className="query__input__icon"><i className="flaticon-user" /></div>
//                                             </div>
//                                         </div>

//                                         {/* Children Dropdown */}
//                                         <div className="query__input wow fadeInUp" data-wow-delay=".5s">
//                                             <label htmlFor="child" className="query__label">Child</label>
//                                             <div className="query__input__position">
//                                                 <select name="child" id="child" className="form-select">
//                                                     <option value={1}>1 Child</option>
//                                                     <option value={2}>2 Child</option>
//                                                     <option value={3}>3 Child</option>
//                                                     <option value={4}>4 Child</option>
//                                                     <option value={5}>5 Child</option>
//                                                     <option value={6}>6 Child</option>
//                                                     <option value={7}>7 Child</option>
//                                                 </select>
//                                                 <div className="query__input__icon"><i className="flaticon-user" /></div>
//                                             </div>
//                                         </div>

//                                         {/* Search Button */}
//                                         <button className="theme-btn btn-style fill no-border search__btn wow fadeInUp" data-wow-delay=".6s">
//                                             <span><i className="flaticon-search-1" /> Search</span>
//                                         </button>

//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                         {/* Sticky Booking Form End */}

//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default RoomSeven;
 


import React, { useState, useEffect } from 'react';
import RoomCardFive from './RoomCardFive';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useParams } from 'react-router-dom';

// Assuming this is your API function
import { getRoom } from '../../api/getRoom';

function RoomSeven() {
    const { id } = useParams();
    const ClickHandler = () => window.scrollTo(0, 0);

    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleRooms, setVisibleRooms] = useState(6);
    const roomsPerLoad = 3;

    useEffect(() => {
        setLoading(true);
        getRoom()
            .then(data => {
                if (data && data.rooms) {
                    setRooms(data.rooms);
                    console.log("room data ==============>", data.rooms);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch rooms:", err);
                setLoading(false);
            });
    }, []);

    const handleLoadMore = () => {
        setVisibleRooms(prev => prev + roomsPerLoad);
    };

    // Loading skeleton display
    const LoadingSkeleton = () => (
        <div className="row g-30">
            {[...Array(6)].map((_, index) => (
                <div key={index} className="col-xl-6 col-lg-12 col-md-6">
                    <Skeleton height={310} className="mb-4" />
                    <Skeleton height={30} className="mb-2" />
                    <Skeleton height={20} count={2} className="mb-2" />
                </div>
            ))}
        </div>
    );

    return (
        <>
            {/* Single Rooms Section */}
            <div className="rts__section pt-120">
                <div className="container">
                    <div className="row g-30 main__content sticky-wrap">
                        
                        {/* Left Side (Room Cards) */}
                        <div className="col-xl-8 col-lg-7 order-2 order-lg-1">
                            {loading ? (
                                <LoadingSkeleton />
                            ) : (
                                <>
                                    <div className="row g-30">
                                        {rooms.slice(0, visibleRooms).map((room) => (
                                            <div key={room.id} className="col-xl-6 col-lg-12 col-md-6" style={{paddingBottom: '10px', paddingTop: '10px'}}>
                                                {/* Link to the room details page */}
                                                {/* <Link onClick={ClickHandler} to={`/room2/${room.id}`}>
                                                    <RoomCardFive roomID={room.id} />
                                                </Link> */}

                                                {/* <Link 
                                                onClick={ClickHandler} 
                                                to={`/room2/${room.id}`}
                                                state={{ roomData: room }} // Pass the entire room object
                                                >
                                                <RoomCardFive roomID={room.id} />
                                                </Link> */}
                                                {/* <Link 
                                                onClick={ClickHandler} 
                                                to={`/room2/${room.id}`}
                                                state={{ roomData: room }}  
                                            >
                                                <RoomCardFive roomID={room.id} />
                                            </Link> */}
                                            <Link 
                                                onClick={ClickHandler} 
                                                to={`/rooms/${room.slug}`}  
                                                state={{ roomData: room }}   
                                                >
                                                <RoomCardFive roomID={room.id} />
                                                </Link>

                                                                                            </div>
                                        ))}
                                    </div>

                                    {/* Load More Button */}
                                    {visibleRooms < rooms.length && (
                                        <div className="load__more__link">
                                            <Link to="#" onClick={handleLoadMore}>Load More</Link>
                                        </div>
                                    )}
                                    
                                    {/* No rooms message */}
                                    {rooms.length === 0 && !loading && (
                                        <div className="text-center py-5">
                                            <h4>No rooms available at the moment</h4>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        {/* Right Side (Sticky Booking Form) */}
                        <div className="col-xl-4 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0">
                            <div className="rts__booking__form has__background no__shadow sticky-item">
                                <form action="#" method="post" className="advance__search">
                                    <h5 style={{fontWeight: 'bold'}}>Book Your Stay</h5>
                                    <div className="advance__search__wrapper">
                                        
                                        {/* Check-in Input */}
                                        <div className="query__input wow fadeInUp">
                                            <label htmlFor="check__in" className="query__label">Check In</label>
                                            <div className="query__input__position">
                                                <input type="text" id="check__in" name="check__in" placeholder="15 Jun 2024" required />
                                                <div className="query__input__icon"><i className="flaticon-calendar" /></div>
                                            </div>
                                        </div>

                                        {/* Check-out Input */}
                                        <div className="query__input wow fadeInUp" data-wow-delay=".3s">
                                            <label htmlFor="check__out" className="query__label">Check Out</label>
                                            <div className="query__input__position">
                                                <input type="text" id="check__out" name="check__out" placeholder="15 May 2024" required />
                                                <div className="query__input__icon"><i className="flaticon-calendar" /></div>
                                            </div>
                                        </div>

                                        {/* Adults Dropdown */}
                                        <div className="query__input wow fadeInUp" data-wow-delay=".4s">
                                            <label htmlFor="adult" className="query__label">Adult</label>
                                            <div className="query__input__position">
                                                <select name="adult" id="adult" className="form-select">
                                                    <option value={1}>1 Person</option>
                                                    <option value={2}>2 Person</option>
                                                    <option value={3}>3 Person</option>
                                                    <option value={4}>4 Person</option>
                                                    <option value={5}>5 Person</option>
                                                    <option value={6}>6 Person</option>
                                                    <option value={7}>7 Person</option>
                                                </select>
                                                <div className="query__input__icon"><i className="flaticon-user" /></div>
                                            </div>
                                        </div>

                                        {/* Children Dropdown */}
                                        <div className="query__input wow fadeInUp" data-wow-delay=".5s">
                                            <label htmlFor="child" className="query__label">Child</label>
                                            <div className="query__input__position">
                                                <select name="child" id="child" className="form-select">
                                                    <option value={1}>1 Child</option>
                                                    <option value={2}>2 Child</option>
                                                    <option value={3}>3 Child</option>
                                                    <option value={4}>4 Child</option>
                                                    <option value={5}>5 Child</option>
                                                    <option value={6}>6 Child</option>
                                                    <option value={7}>7 Child</option>
                                                </select>
                                                <div className="query__input__icon"><i className="flaticon-user" /></div>
                                            </div>
                                        </div>

                                        {/* Search Button */}
                                        {/* <button className="theme-btn btn-style fill no-border search__btn wow fadeInUp" data-wow-delay=".6s">
                                            <span>  Book Now</span>
                                        </button> */}
                                        <Link to='https://www.asiatech.in/booking_engine/index3.php?token=MTY='
                                        className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
                                        data-wow-delay=".6s"
                                    >
                                        <span>Book Your Room</span>
                                    </Link>

                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* Sticky Booking Form End */}

                    </div>
                </div>
            </div>
        </>
    );
}

export default RoomSeven;
