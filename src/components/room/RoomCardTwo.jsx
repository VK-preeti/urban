import React from 'react'
import { Link } from 'react-router-dom';

function RoomCardTwo(props) {
    const { roomID, roomImage, roomTitle, roomPrice } = props;
    return (
        <>
            <div className="room__slider__box">
                <div className="room__slider__thumb">
                    <Link to="#" className="link__item">
                        <figure>
                            <img src={`assets/images/index-4/room/${roomImage}`} alt="" />
                        </figure>
                    </Link>
                </div>
                <div className="room__slide__content">
                    <div className="slider__meta">
                        <Link to={`/room/${roomID}`} className="room__title">
                            <h5>{roomTitle ? roomTitle : 'Timberline Hideaway Hotel'}</h5>
                        </Link>
                        <div className="room__content__meta">
                            <span>
                                <i className="flaticon-construction" />
                                Size: 35 ft
                            </span>
                            <span>
                                <i className="flaticon-user" />
                                Person: 5 Person
                            </span>
                        </div>
                    </div>
                    <span className="price h4">{roomPrice ? roomPrice : '200$'}</span>
                </div>
            </div>
        </>
    )
}

export default RoomCardTwo