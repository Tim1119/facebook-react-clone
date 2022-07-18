import React from 'react'

const Ad = ({imageURL,title,link}) => {
    
  return (
    <div className='flex items-center gap-1.5 my-2' >
        <img src={imageURL} alt='advertisement-img' className='w-[100px] object-contain rounded-lg' />
        <div>
            <h3 className='text-gray-300 text-base font-medium' >{title}</h3>
            <p className='text-gray-350 text-xs'>{link}</p>
        </div>
    </div>
  )
}

export default Ad