import React from 'react'
import { Link } from 'react-router-dom';

function RoomCardThree(props) {
    const { roomID, roomImage, roomTitle, roomPrice } = props;
    return (
        <>
            <div className="apartment__slide__box">
                <div className="apartment__slide__image">
                    <img
                        height={500}
                        width={610}
                        src={`assets/images/index-3/apartment/${roomImage}`}
                        alt="apartment"
                    />
                </div>
                <div className="apartment__slide__content">
                    <div className="slider__meta">
                        <Link to={`/room/${roomID}`} className="apartment__title">
                            <h5>{roomTitle ? roomTitle : 'Elegant Apartment'}</h5>
                        </Link>
                        <div className="apartment__content__meta">
                            <span>
                                <i className="flaticon-construction" />
                                35 ft
                            </span>
                            <span>
                                <i className="flaticon-user" />5 Person
                            </span>
                        </div>
                    </div>
                    <span className="price h4">{roomPrice ? roomPrice : '200$'}</span>
                </div>
            </div>
        </>
    )
}

export default RoomCardThree