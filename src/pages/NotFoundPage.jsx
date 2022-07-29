import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='container flex items-center justify-center'>
    <div className='flex flex-col items-center justify-center mt-9'>
        <span className="text-[35px]">😕</span>
        <h2 className='text-[38px]'>Page not found</h2>

        <p className='italic'>this page does not exist in our shop</p>
    </div>
</div>
  )
}

export {NotFoundPage};