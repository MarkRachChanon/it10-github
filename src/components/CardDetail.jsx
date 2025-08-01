import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import cardData from './../services/cardData';

const CardDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const card = cardData.find(item => item.id === parseInt(id));

    return (
        <>
            <main className="flex-grow">
                <div className="container mx-auto py-10 px-4">
                    <button onClick={() => navigate(-1)} className='bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-700 transition cursor-pointer px-3 py-2'>
                    <i class="bi bi-arrow-left-circle-fill"></i> Back
                    </button>

                    <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                        <div className="md:w-1/2 w-full">
                            <img
                                src={card.imageUrl}
                                alt={card.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="md:w-1/2 w-full p-6 flex flex-col">
                            <h1 className="text-3xl font-bold mb-4 text-purple-800">{card.title}</h1>
                            <p className="text-gray-700 text-lg leading-relaxed">{card.description}</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default CardDetail