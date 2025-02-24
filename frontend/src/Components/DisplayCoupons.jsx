import React from 'react'
import Loader from './Loader'
import NoCoupons from './NoCoupons'
import CouponCard from './CouponCard'

function DisplayCoupons({loading,coupons,error}) {
  return (
    <>
    {loading ? (
        <Loader />
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : !coupons ? (
        <NoCoupons />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {coupons.map((coupon) => (
            <div key={coupon._id} className="border p-4 rounded-lg shadow">
              <CouponCard image={coupon.imgSrc} title={coupon.name}  description={coupon.description} link={coupon.link} id={coupon._id}/>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default DisplayCoupons