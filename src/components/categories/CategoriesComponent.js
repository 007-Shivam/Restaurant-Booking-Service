import React from 'react'
import './CategoriesComponent.css'

import Indian from '../../assets/category/indian.png'
import Chinese from '../../assets/category/chinese.jpg'
import Japanese from '../../assets/category/japanese.png'
import Mexican from '../../assets/category/mexican.jpg'
import French from '../../assets/category/french.jpg'
import Ilalian from '../../assets/category/italian.jpg'
import All from '../../assets/category/all.png'




export default function CategoriesComponent({ onSelectCategory, onShowAll  }) {
    return (
        <div className='categories-container'>
            <div className='m-5'>
                <button onClick={() => onSelectCategory('indian')}>
                    <img className='h-40 w-50 rounded-full hover:transform hover:scale-105 hover:transition duration-3000' src={Indian} alt='m-5' />
                </button>
                <p className='cuisine-title text-center text-xl font-semibold'>Indian</p>
            </div>
            <div className='m-5'>
                <button onClick={() => onSelectCategory('chinese')}>
                    <img className='h-40 w-40 rounded-full hover:transform hover:scale-105 hover:transition duration-3000' src={Chinese} alt='m-5' />
                </button>
                <p className='cuisine-title text-center text-xl font-semibold'>Chinese</p>
            </div>
            <div className='m-5'>
                <button onClick={() => onSelectCategory('japanese')}>
                    <img className='h-40 w-40 rounded-full hover:transform hover:scale-105 hover:transition duration-3000' src={Japanese} alt='m-5' />
                </button>
                <p className='cuisine-title text-center text-xl font-semibold'>Japanese</p>
            </div>
            <div className='m-5'>
                <button onClick={() => onSelectCategory('mexican')}>
                    <img className='h-40 w-40 rounded-full hover:transform hover:scale-105 hover:transition duration-3000' src={Mexican} alt='m-5' />
                </button>
                <p className='cuisine-title text-center text-xl font-semibold'>Mexican</p>
            </div>
            <div className='m-5'>
                <button onClick={() => onSelectCategory('italian')}>
                    <img className='h-40 w-40 rounded-full hover:transform hover:scale-105 hover:transition duration-3000' src={Ilalian} alt='m-5' />
                </button>
                <p className='cuisine-title text-center text-xl font-semibold'>Italian</p>
            </div>
            <div className='m-5'>
                <button onClick={() => onSelectCategory('french')}>
                    <img className='h-40 w-40 rounded-full hover:transform hover:scale-105 hover:transition duration-3000' src={French} alt='m-5' />
                </button>
                <p className='cuisine-title text-center text-xl font-semibold'>French</p>
            </div>
            <div className='m-5'>
                <button onClick={() => onShowAll()}>
                    <img className='h-40 w-40 rounded-full hover:transform hover:scale-105 hover:transition duration-3000' src={All} alt='m-5' />
                </button>
                <p className='cuisine-title text-center text-xl font-semibold'>SHOW ALL</p>
            </div>
        </div>
    )
}
