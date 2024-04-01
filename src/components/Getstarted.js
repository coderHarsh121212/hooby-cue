import React from 'react'
import Footer from './Footer'

const Getstarted = () => {
  return (
    <div className='w-full h-fit md:px-10 p-3'>
    <div className='flex flex-col pt-10 gap-5 '>
           <p className='text-2xl italic font-semibold text-center'>Your <span className='text-[#39ADD4]'>Hobby</span>, your <span className='text-purple-500'>Community...</span></p> 
           <button className='bg-purple-700 text-white p-2 rounded-md w-fit hover:bg-purple-600 mx-auto'>Get Started</button>
      <div className='w-full'>
        <img src='https://th.bing.com/th/id/OIP.jH5vzchWuXlRkUt2ndZlXgHaE8?rs=1&pid=ImgDetMain' className='w-full rounded-md'></img>
      </div>
    </div>
    </div>
  )
}

export default Getstarted