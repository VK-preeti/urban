 import React, { useEffect, useState } from 'react';
import { jarallax } from 'jarallax';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';
import { getActivitiesOne } from '../../api/getActivitiesOne';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function ActivitiesOne() {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getActivitiesOne()
            .then((data) => {
                setActivities(data.activity || []);
            })
            .catch((err) => {
                console.error("Error fetching activities data:", err);
            })
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        new WOW.WOW().init();
        if (!/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            document.querySelectorAll('.jarallax').forEach(element => {
                jarallax(element, {});
            });
        }
    }, []);

    return (
        <div className="rts__section activites section__padding">
            <div className="container">
                <div className="row">
                    {loading ? (
                        <div className="single__service__item">
                            <Skeleton height={650} width={605} />
                            <Skeleton count={5} style={{ marginTop: 10 }} />
                        </div>
                    ) : (
                        activities.map((activity, index) => (
                            <div
                                key={activity.id}
                                className={`single__service__item ${index % 2 === 1 ? 'if__is__reverse' : ''} if__activities`}
                            >
                                <div className="service__thumb jarallax">
                                    <img
                                        className="jarallax-img"
                                        src={activity.image}
                                        width={605}
                                        height={650}
                                        alt={activity.title}
                                    />
                                </div>
                                <div className="service__content">
                                    <div className="section__content__left">
                                        <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                            {activity.title}
                                        </span>
                                        <h2 className="content__title h2 wow fadeInUp lh-1">
                                            {activity.title}
                                        </h2>
                                    </div>
                                    <p
                                        className="font-sm mt-20 wow fadeInUp"
                                        dangerouslySetInnerHTML={{ __html: activity.description }}
                                    />
                                    {/* <Link
                                        to={`/activities/${activity.id}`}
                                        className="underline__style wow fadeInUp"
                                        data-wow-delay=".4s"
                                    >
                                        Discover More
                                    </Link> */}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default ActivitiesOne;
