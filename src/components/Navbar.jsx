import React from 'react'
import { SiCodechef } from 'react-icons/si'

function Navbar() {
    return (
        <div className=" relative bg-gold-light p-4 mt-4">
            <div className='left-4 flex items-center justify-between'>
                <div className='flex items-center'>
                    <SiCodechef className='text-3xl sm:text-4xl md:text-6xl lg:text-8xl  ' />
                    <h1 className='text-1xl sm:text-2xl md:text-3xl lg:text-4xl '>ሼፍ ተዘሩ</h1>
                </div>
                <>
                    <h2 className='text-xs sm:text-lg md:text-1xl self-end   '>ጥፍጥ ያለ የአናት ቤት ምግብ!</h2>

                </>
            </div>

        </div>
    )
}

export default Navbar