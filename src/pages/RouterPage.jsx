import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GDPRCookie from "../components/GDPRCookie"; // Import GDPR Cookie component
import LoadTop from "../components/LoadTop";
import HomeOne from "./HomeOne";
import HomeTwo from "./HomeTwo";
import HomeThree from "./HomeThree";
import HomeFour from "./HomeFour";
import HomeFive from "./HomeFive";
import HomeSix from "./HomeSix";
import HomeSeven from "./HomeSeven";
import HomeDark from "./HomeDark";
import HomeVideo from "./HomeVideo";
import About from "./About";
import Resturant from "./Resturant";
import Gallery from "./Gallery";
import Service from "./Service";
import Event from "./Event";
import Activities from "./Activities";
import Contact from "./Contact";
import RoomOne from "./RoomOne";
import RoomTwo from "./RoomTwo";
import RoomThree from "./RoomThree";
import RoomFour from "./RoomFour";
import RoomDetails from "./RoomDetails";
import RoomDetailsTwo from "./RoomDetailsTwo";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Cart from "./Cart";
import CheckOut from "./CheckOut";
import OfferPage from "../components/offer/OfferPage";
import OfferOne from "../components/offer/OfferOne";
import OfferTwo from "../components/offer/OfferTwo";
import OfferThree from "../components/offer/OfferThree";
import OfferFour from "../components/offer/OfferFour";
import GuestExperiencePage from "../components/GuestExperience/GuestExperiencePage";
import WeddingPage from "./WeddingPage";
import Package from "./Package";
import MicePage from "./MicePage";
import RoomCardFive from "../components/room/RoomCardFive";
import RoomDetailsSimilar from "../components/room-details/RoomDetailsSimilar";
import RoomDetailsSimilarPage from "./RoomDetailsSimilarPage";
import MicePageBusiness from "./MicePageBusiness";
import MicePageWedding from "./MicePageWedding";
import MicePageSastang from "./MicePageSastang";
import PrivacyPage from "./PrivacyPage";
 
// import TermsCondition from './TermsConditionPage';
import TermsConditionPage from "./TermsConditionPage";
import RefundPolicy from "./RefundPolicy";

function RouterPage() {
  return (
    <>
      <Router>
        <LoadTop />
        <Routes>
          {/* <Route path="/" element={<HomeOne />} /> */}
          <Route path="/" element={<HomeTwo />} />
          <Route path="/" element={<HomeTwo />} />
          <Route path="/home-3" element={<HomeThree />} />
          <Route path="/home-4" element={<HomeFour />} />
          <Route path="/home-5" element={<HomeFive />} />
          <Route path="/home-6" element={<HomeSix />} />
          <Route path="/home-7" element={<HomeSeven />} />
          <Route path="/home-dark" element={<HomeDark />} />
          <Route path="/home-video" element={<HomeVideo />} />
          <Route path="/about" element={<About />} />
          <Route path="/resturant" element={<Resturant />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/service" element={<Service />} />
          <Route path="/event" element={<Event />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/room-one" element={<RoomOne />} />
          <Route path="room" element={<RoomTwo />} />
          <Route path="/room-three" element={<RoomThree />} />
          <Route path="/room-four" element={<RoomFour />} />
          {/* <Route path="/room2/:id" element={<RoomDetails />} /> */}
         
          {/* <Route path="/room2/:roomID" element={<RoomCardFive />} /> */}
          {/* <Route path='blog-single/:id' element={<BlogDetails />} /> */}


          <Route path="/room2/:slug" element={<RoomDetailsTwo />} />
          <Route path="/rooms/:slug" element={<RoomDetailsSimilarPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/offer" element={<OfferPage />} />
          <Route path="/guestexperience" element={<GuestExperiencePage />} />
          <Route path="/wedding" element={<WeddingPage />} />
          <Route path="/package" element={<Package />} />
          <Route path="/mice" element={<MicePage />} />
          <Route path="/mice-business" element={<MicePageBusiness />} />
          <Route path="/mice-wedding" element={<MicePageWedding />} />
          <Route path="/mice-sastang" element={<MicePageSastang />} />
           <Route path="/privacy" element={<PrivacyPage />} />
           <Route path="/refund" element={<RefundPolicy />} />
           <Route path="/termscondition" element={<TermsConditionPage />} />
        </Routes>

        {/* GDPR Cookie Consent Component */}
        <GDPRCookie 
          settings={{
            title: "We use cookies",
            message: "This site uses cookies to improve your experience. You can customize your preferences.",
            expires: 90, // Cookie expiration in days
            cookieName: "userCookiePrefs",
            acceptBtnLabel: "Accept All Cookies",
            advancedBtnLabel: "Manage Preferences",
            cookieTypes: [
              { type: "Essential", value: "essential", description: "Necessary for site functionality", checked: true },
              { type: "Preferences", value: "preferences", description: "Saves your site preferences", checked: true },
              { type: "Analytics", value: "analytics", description: "Helps us improve site usage", checked: false },
              { type: "Marketing", value: "marketing", description: "Personalized advertising", checked: false },
            ]
          }}
        />
      </Router>
    </>
  );
}

export default RouterPage;
