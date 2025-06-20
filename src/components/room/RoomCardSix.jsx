import React from 'react'
import { Link } from 'react-router-dom';

function RoomCardSix(props) {
    const { roomID, roomImage, roomTitle, roomPrice } = props;
    return (
        <>
            <div className="room__card is__style__four">
                <div className="room__card__top">
                    <div className="room__card__image">
                        <Link to={`/room/${roomID}`}>
                            <img
                                src={`assets/images/pages/room/${roomImage}`}
                                width={645}
                                height={438}
                                alt="room card"
                            />
                        </Link>
                    </div>
                </div>
                <div className="room__card__meta">
                    <Link to={`/room/${roomID}`} className="room__card__title h4">
                        {roomTitle ? roomTitle : 'Executive Room'}
                    </Link>
                    <div className="room__card__meta__info">
                        <span>
                            <i className="flaticon-construction" />
                            Size: 35 sq ft
                        </span>
                        <span>
                            <i className="flaticon-user" />
                            Person: 5 Person
                        </span>
                    </div>
                    <p className="font-sm">
                        Our rooms offer a harmonious blend of comfort and elegance,
                        designed to provide an exceptional stay for every guest.
                    </p>
                    <div className="room__price__tag">
                        <span className="h5 d-block">{roomPrice ? roomPrice : '120$'}</span>
                    </div>
                    <Link to={`/room/${roomID}`} className="room__card__link">
                        Discover More
                    </Link>
                </div>
            </div>
            <div className="room__card is__style__four">
                <div className="room__card__top">
                    <div className="room__card__image">
                        <Link to={`/room/${roomID}`}>
                            <img
                                src={`assets/images/pages/room/${roomImage}`}
                                width={645}
                                height={438}
                                alt="room card"
                            />
                        </Link>
                    </div>
                </div>
                <div className="room__card__meta">
                    <Link to={`/room/${roomID}`} className="room__card__title h4">
                        {roomTitle ? roomTitle : 'Single Room'}
                    </Link>
                    <div className="room__card__meta__info">
                        <span>
                            <i className="flaticon-construction" />
                            Size: 35 sq ft
                        </span>
                        <span>
                            <i className="flaticon-user" />
                            Person: 5 Person
                        </span>
                    </div>
                    <p className="font-sm">
                        Also known as a Classic Room or Single Room, this is the most
                        basic type of room, usually featuring essential amenities.
                    </p>
                    <div className="room__price__tag">
                        <span className="h5 d-block">{roomPrice ? roomPrice : '140$'}</span>
                    </div>
                    <Link to={`/room/${roomID}`} className="room__card__link">
                        Discover More
                    </Link>
                </div>
            </div>
        </>
    )
}

export default RoomCardSix