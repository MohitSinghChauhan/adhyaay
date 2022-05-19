import React from 'react'

const SubCouncilCard = ({subCouncilData}) => {
  return (
    <div className='rounded-xl overflow-hidden shadow-lg bg-white hover:scale-105 transition duration-300 ease-in-out'>
    <img className='w-full' src={'https://via.placeholder.com/500x300'} alt='' />
    <div className='px-6 py-4'>
        <div className='font-bold text-2xl mb-2'>{subCouncilData.name}</div>
        <p className='text-gray-700 text-base'>
        {subCouncilData.description}
        </p>
    </div>
    <div className='px-6 pt-4 pb-2'>
        <div class='flex my-2'>
        <i
            style={{ backgroundColor: "#3B5998" }}
            className='flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-facebook-f'
        ></i>
        <i
            style={{ backgroundColor: "#55ACEE" }}
            className='flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-brands fa-linkedin'
        ></i>
        <i
            style={{ backgroundColor: "#FD1D1D" }}
            className='flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-instagram'
        ></i>
        <i
            style={{ backgroundColor: "#55ACEE" }}
            className='flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-twitter'
        ></i>
        </div>
    </div>
    </div>
  )
}

export default SubCouncilCard