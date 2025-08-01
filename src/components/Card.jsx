import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <>
            <Link to={`/card/${props.id}`}>
                <div className='rounded-md overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300'>
                    <img className='w-full h-60 object-cover' src={props.imageUrl} alt={props.title} />
                    <div className='px-6 py-4 bg-white'>
                        <div className='font-bold text-xl mb-2'>{props.title}</div>
                        <p className='text-gray-700 text-base'>
                            {props.description}
                        </p>
                    </div>
                    <div className='px-6 py-4 flex items-center justify-between bg-white'>
                        <span className='text-gray-600 text-sm'>#tag</span>
                        <a href="" className='text-purple-500 hover:text-purple-700'>Read More</a>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Card