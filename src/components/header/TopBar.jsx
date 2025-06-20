 import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopHeader } from '../../api/getTopHeader';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function TopBar() {
  const [topHeader, setTopHeader] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTopHeader()
      .then((data) => {
        if (data) {
          setTopHeader({
            ...data,
            mail: data.mail?.replace(/<\/?[^>]+(>|$)/g, ""),
            address: data.address?.replace(/<\/?[^>]+(>|$)/g, ""),
            mobile: data.mobile?.replace(/<\/?[^>]+(>|$)/g, ""),
          });
        }
      })
      .catch((err) => {
        console.error("Error fetching top header data:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="header__top" style={{background: '#F5F1E8'}}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6 col-md-6">
            <div className="social__links">
              {loading || !topHeader ? (
                <Skeleton width={250} height={20} />
              ) : (
                <Link className="link__item gap-10" style={{fontWeight: 'bold', color: 'black'}} to={`tel:${topHeader.mobile}`}>
                  <i className="flaticon-phone-flip" /> {topHeader.mobile}
                </Link>
              )}
              {loading || !topHeader ? (
                <Skeleton width={200} height={20} />
              ) : (
                <Link className="link__item gap-10" style={{fontWeight: 'bold', color: 'black'}} to={`mailto:${topHeader.mail}`}>
                  <i className="flaticon-envelope" /> {topHeader.mail}
                </Link>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="location">
              {loading || !topHeader ? (
                <Skeleton width={300} height={20} />
              ) : (
                <Link className="link__item gap-10" style={{fontWeight: 'bold', color: 'black'}} to="/">
                  <i className="flaticon-marker" /> {topHeader.address}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
