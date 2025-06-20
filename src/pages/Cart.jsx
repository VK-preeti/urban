import React from 'react'
import TopBar from '../components/header/TopBar'
import HeaderOne from '../components/header/HeaderOne'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import CartInner from '../components/room/CartInner'
import FooterOne from '../components/footer/FooterOne'

function Cart() {
    return (
        <div className='cart-page'>
            <TopBar />
            <HeaderOne />
            <BreadcrumbOne
                title="Cart"
                description="A step up from the standard room, often with better views, more space, and additional amenities."
            />
            <CartInner />
            <FooterOne />
        </div>
    )
}

export default Cart