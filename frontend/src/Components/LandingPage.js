import React from 'react'
import Navbar from "./Navbar"
import ProductList from "./ProductList"
import HRecord from './HRecord'



export default function LandingPage() {
    return (
        <div className='h-screen'>
            <Navbar />
            <div className='md:flex md:justify-between md:items-center w-full md:h-4/5'>
                <div className='md:w-1/3 h-fit p-10'>
                    <div className=''>
                        <div className=''>
                            <p className='text-6xl font-bold text-slate-600 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0)] h-[70px]'>Pharmacy</p>
                        </div>
                        <div className='text-4xl font-bold text-slate-600'>
                            <p className='lg:h-11'>Medicine E-Commerce</p>
                        </div>
                    </div>
                    <ProductList/>
                    <HRecord/>
                </div>
            </div>
        </div>
    )
}
