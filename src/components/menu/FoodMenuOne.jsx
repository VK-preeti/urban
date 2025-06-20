import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function FoodMenuOne() {
    const [activeTab, setActiveTab] = useState("all");

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <>
            {/* restaurant menu */}
            <div className="rts__section resturant__menu__bg section__padding">
                <div className="container">
                    <div className="row">
                        <div className="section__wrapper mb-40 wow fadeInUp">
                            <div className="section__content__left">
                                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                    Menu
                                </span>
                                <h2 className="content__title h2 lh-1">Restaurant Menu</h2>
                            </div>
                            <div className="section__content__right">
                                <p>
                                    Our rooms offer a harmonious blend of comfort and elegance,
                                    designed to provide an exceptional stay for every guest.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="resturant__menu__list">
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className={`nav-link ${activeTab === 'all' ? 'active' : ''}`}
                                        onClick={() => handleTabClick('all')}>
                                        Small Plates
                                    </button>
                                    <button className={`nav-link ${activeTab === 'cold' ? 'active' : ''}`}
                                        onClick={() => handleTabClick('cold')}>
                                        Cold Appetizers
                                    </button>
                                    <button className={`nav-link ${activeTab === 'vegan' ? 'active' : ''}`}
                                        onClick={() => handleTabClick('vegan')}>
                                        Vegetarian &amp; Vegan
                                    </button>
                                    <button className={`nav-link ${activeTab === 'burger' ? 'active' : ''}`}
                                        onClick={() => handleTabClick('burger')}>
                                        Burgers &amp; Sandwiches
                                    </button>
                                    <button className={`nav-link ${activeTab === 'dips' ? 'active' : ''}`}
                                        onClick={() => handleTabClick('dips')}>
                                        Dips &amp; Spreads
                                    </button>
                                    <button className={`nav-link ${activeTab === 'seafood' ? 'active' : ''}`}
                                        onClick={() => handleTabClick('seafood')}>
                                        Seafood Specialties
                                    </button>
                                </div>
                            </div>
                            {/* resturant menu content */}
                            <div className="tab-content" id="nav-tabContent">
                                <div className={`tab-pane ${activeTab === "all" ? "open" : ""}`}
                                    id="all" style={{ display: activeTab === "all" ? "block" : "none" }}
                                >
                                    <div className="all__menu__list">
                                        <div className="single__menu__item__list">
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/1.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Tuscan Herb-Crusted Chicken
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/2.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Classic Bolognese with Fresh
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                        </div>
                                        <div className="single__menu__item__list">
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/3.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Tuscan Herb-Crusted Chicken
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/4.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Classic Bolognese with Fresh
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                        </div>
                                        <div className="single__menu__item__list">
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/5.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Tuscan Herb-Crusted Chicken
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/6.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Classic Bolognese with Fresh
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane ${activeTab === "cold" ? "open" : ""}`}
                                    id="cold" style={{ display: activeTab === "cold" ? "block" : "none" }}
                                >
                                    <div className="all__menu__list">
                                        <div className="single__menu__item__list">
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/3.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Tuscan Herb-Crusted Chicken
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/4.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Classic Bolognese with Fresh
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                        </div>
                                        <div className="single__menu__item__list">
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/1.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Tuscan Herb-Crusted Chicken
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/2.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Classic Bolognese with Fresh
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                        </div>
                                        <div className="single__menu__item__list">
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/5.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Tuscan Herb-Crusted Chicken
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/6.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Classic Bolognese with Fresh
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane ${activeTab === "vegan" ? "open" : ""}`}
                                    id="vegan" style={{ display: activeTab === "vegan" ? "block" : "none" }}
                                >
                                    <div className="all__menu__list">
                                        <div className="single__menu__item__list">
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/5.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Tuscan Herb-Crusted Chicken
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/6.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Classic Bolognese with Fresh
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                        </div>
                                        <div className="single__menu__item__list">
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/1.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Tuscan Herb-Crusted Chicken
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/2.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Classic Bolognese with Fresh
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                        </div>
                                        <div className="single__menu__item__list">
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/3.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Tuscan Herb-Crusted Chicken
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/4.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Classic Bolognese with Fresh
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane ${activeTab === "burger" ? "open" : ""}`}
                                    id="burger" style={{ display: activeTab === "burger" ? "block" : "none" }}
                                >
                                    <div className="all__menu__list">
                                        <div className="single__menu__item__list">
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/1.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Tuscan Herb-Crusted Chicken
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/2.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Classic Bolognese with Fresh
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                        </div>
                                        <div className="single__menu__item__list">
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/3.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Tuscan Herb-Crusted Chicken
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/4.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Classic Bolognese with Fresh
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                        </div>
                                        <div className="single__menu__item__list">
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/5.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Tuscan Herb-Crusted Chicken
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/6.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Classic Bolognese with Fresh
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane ${activeTab === "dips" ? "open" : ""}`}
                                    id="dips" style={{ display: activeTab === "dips" ? "block" : "none" }}
                                >
                                    <div className="all__menu__list">
                                        <div className="single__menu__item__list">
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/3.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Tuscan Herb-Crusted Chicken
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/4.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Classic Bolognese with Fresh
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                        </div>
                                        <div className="single__menu__item__list">
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/1.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Tuscan Herb-Crusted Chicken
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/2.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Classic Bolognese with Fresh
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                        </div>
                                        <div className="single__menu__item__list">
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/5.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Tuscan Herb-Crusted Chicken
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/6.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Classic Bolognese with Fresh
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane ${activeTab === "seafood" ? "open" : ""}`}
                                    id="seafood" style={{ display: activeTab === "seafood" ? "block" : "none" }}
                                >
                                    <div className="all__menu__list">
                                        <div className="single__menu__item__list">
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/5.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Tuscan Herb-Crusted Chicken
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/6.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Classic Bolognese with Fresh
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                        </div>
                                        <div className="single__menu__item__list">
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/1.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Tuscan Herb-Crusted Chicken
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/2.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Classic Bolognese with Fresh
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                        </div>
                                        <div className="single__menu__item__list">
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/3.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Tuscan Herb-Crusted Chicken
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                            {/* single menu item */}
                                            <div className="single__menu__item">
                                                <div className="menu__thumb">
                                                    <img
                                                        height={78}
                                                        width={78}
                                                        src="/assets/images/pages/resturant/4.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="menu__meta">
                                                    <div className="menu__link__price">
                                                        <Link to="#" className="h6">
                                                            Classic Bolognese with Fresh
                                                        </Link>
                                                        <span className="h6">$120</span>
                                                    </div>
                                                    <span>Salted caramel,Puff pastry,salad</span>
                                                </div>
                                            </div>
                                            {/* single menu item end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* resturant menu content end */}
                        </div>
                    </div>
                </div>
            </div>
            {/* restaurant menu end */}
        </>

    )
}

export default FoodMenuOne