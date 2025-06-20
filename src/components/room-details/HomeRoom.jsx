
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RoomCardFour from '../room/RoomCardFour';
import { useParams } from 'react-router-dom';
import { getSimilarRoom } from '../../api/getSimilarRoom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';

function HomeRoom() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { slug } = useParams(); // Get current room slug from URL

     

    useEffect(() => {
    setLoading(true);
    getSimilarRoom()
        .then(data => {
            if (data && data.rooms) {
                // Filter out the current room based on slug
                const filteredRooms = slug 
                    ? data.rooms.filter(room => room.slug !== slug)
                    : data.rooms;

                setRooms(filteredRooms);
                console.log("Similar room data =================>", filteredRooms);
            } else {
                console.error('Invalid API response format:', data);
                setError('Invalid data received from server.');
            }
            setLoading(false);
        })
        .catch(err => {
            console.error("Failed to fetch rooms:", err);
            setError('Failed to load rooms. Please try again later.');
            setLoading(false);
        });
}, [slug]);

    
    
    const getFirstImage = (imagesString) => {
        try {
            // Parse the JSON string to get array of images
            const images = JSON.parse(imagesString);
            return images[0]; // Return the first image URL
        } catch (err) {
            console.error('Error parsing images:', err);
            return ''; // Return empty string if parsing fails
        }
    };

    return (
        <>
            {/* similar room area */}
            <div className="rts__section pb-120">
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__three mx-auto">
                                    Hotel Rooms
                                </span>
                                <h2 className="section__title">Rooms</h2>
                            </div>
                        </div>
                    </div>
                    
                    {loading ? (
                    <div className="row g-30">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                                <Skeleton height={250} className="mb-3" />
                                <Skeleton height={20} width="80%" className="mb-2" />
                                <Skeleton height={20} width="60%" className="mb-2" />
                                <Skeleton height={15} width="70%" />
                            </div>
                        ))}
                    </div>
                ) : error ? (
                    <div className="text-center text-danger">
                        <p>{error}</p>
                    </div>
                ) : rooms && rooms.length > 0 ? (
                    <div className="row g-30">
                        {rooms.slice(0, 3).map((room, index) => (
                            <div key={room.id || index} className="col-xl-4 col-lg-6 col-md-6">
                                <RoomCardFour
                                    roomID={room.id}
                                    roomImage={room.banner_image || getFirstImage(room.images)}
                                    roomTitle={room.title}
                                    roomPrice={room.price || `${room.category}`}
                                    roomSize={`${room.size} ft`}
                                    roomCapacity={`${room.person_allow} Person`}
                                    roomSlug={room.slug}
                                    roomDetails={room.details}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center">
                        <p>No rooms available</p>
                    </div>
                )}

               <div className="text-center mt-5">
       <Link
          to="room"
          className="theme-btn btn-style sm-btn fill"
        >
          View All Rooms
        </Link>
      </div>
                </div>

                 {/* View All Rooms Button */}
      
            </div>
            {/* similar room area end */}

            
        </>
    );
}

export default HomeRoom;