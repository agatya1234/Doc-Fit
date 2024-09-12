import React, { useState } from 'react'
import Icon from  './assets/icon.png';
import './style/Navbar.css'

export default function Navbar() {
    return (
        <div>
            <div className='flex justify-between p-7'>
                <div>
                    <div className='text-xl font-semibold'>
                        <a href='/'>
                        <img src={Icon} alt='logo' className='logo -my-1' /></a>
                    </div>
                </div>
                <div className='flex w-2/3 justify-evenly'>
                    <div className='text-lg font-semibold bg-clip-text text-transparent bg-blue-950 hover:scale-110'>
                        <a href='/'>
                            CART
                        </a>
                    </div>
                    
                    <div className='text-lg font-semibold bg-clip-text text-transparent bg-blue-950 hover:scale-110'>
                        <a className='' href={user === null ? '/login':'/access'}>
                            ACCESS DOCS
                        </a>
                    </div>
                    {/* <div className='text-lg font-semibold bg-clip-text text-transparent bg-blue-950 hover:scale-110'>
                        <a href='/'>
                            PROJECT
                        </a>
                    </div> */}
                    <div className='text-lg font-semibold bg-clip-text text-transparent bg-blue-950 hover:scale-110'>
                        <a href='/map'>
                            DOC-MAP
                        </a>
                    </div>
                    <div className=' h-12 text-lg font-semibold bg-clip-text text-transparent -my-3 bg-blue-950 border px-4 rounded-xl border-blue-900 hover:bg-blue-700 hover:text-white hover:bg-clip-padding '>
                        <a href='/Login'  className='my-2'>
                            LOGIN
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
