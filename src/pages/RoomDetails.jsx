import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import RoomDetailsOne from '../components/room-details/RoomDetailsOne'
import SimilarRoom from '../components/room-details/SimilarRoom'
import FooterOne from '../components/footer/FooterOne'

function RoomDetails() {
  return (
    <div>
        <TopBar />
        <HeaderOne />
        <RoomDetailsOne />
        <SimilarRoom />
        <FooterOne />
    </div>
  )
}

export default RoomDetails