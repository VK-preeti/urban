import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import CheckoutInner from '../components/room/CheckoutInner'
import FooterOne from '../components/footer/FooterOne'

function CheckOut() {
    return (
        <div className='cart-page'>
            <TopBar />
            <HeaderOne />
            <BreadcrumbOne
                title="Checkout"
                description="A step up from the standard room, often with better views, more space, and additional amenities."
            />
            <CheckoutInner />
            <FooterOne />
        </div>
    )
}

export default CheckOut