import React from 'react'
import { SiCodechef } from 'react-icons/si'

function Navbar({ changeLang, lang }) {
    function handleChange(e) {
        if (typeof changeLang === 'function') changeLang(e.target.value)
    }

    return (
        <div className=" relative bg-gold-light p-4 mt-4">
            <div className='left-4 flex items-center justify-between'>
                <div className='flex items-center'>
                    <SiCodechef className='text-3xl sm:text-4xl md:text-6xl lg:text-8xl  ' />
                    <h1 className='text-1xl sm:text-2xl md:text-3xl lg:text-4xl '>ሼፍ ተዘሩ</h1>
                </div>
                <div className='flex flex-col gap-4 items-end'>
                    <h2 className='text-xs sm:text-lg md:text-1xl self-start   '>{lang === 'amharic' ? "ጥፍጥ ያለ የአናት ቤት ምግብ!" : lang === 'oromo' ? "Nyaata manaa mi'aawaa!" : "Delicious home-cooked food!"}</h2>
                    <select value={lang} onChange={handleChange} className=" text-sm rounded-md self-right bg-gold-dark">
                        <option value="amharic">አማርኛ</option>
                        <option value="oromo">Oromo</option>
                        <option value="english">English</option>
                    </select>

                </div>
            </div>

        </div>
    )
}

export default Navbar