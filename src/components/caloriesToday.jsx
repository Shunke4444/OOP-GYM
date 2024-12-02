import React from 'react'
import Donut from '../charts/donut'
export default function Calories() {
  return (
    <>
    <h1 className='font-cairo font-black mt-[0.05] text-3xl mb-[1rem]'>CALORIES TODAY</h1>
    <main className="flex justify-center items-center mt-[-10px] p-3">
    <section className="max-w-5xl h-[13rem] bg-white rounded-lg shadow-xl overflow-hidden grid grid-cols-2">
      <span className="flex justify-center items-center p-6">
        <Donut  />
      </span>

      {/* Right Side: Text Information */}
      <span className="flex flex-col justify-center items-start p-6 space-y-2">
        <h1 className='text-cairo font-semibold text-lg'>MEALS OVERVIEW</h1>

        <p className='text-base mb-2'>
          <span className='font-cairo font-semibold'>
            Breakfast  
          </span>
        : 376k</p>    

        <p className='text-base mb-2'>      
          <span className='font-cairo font-semibold'>
            Lunch  
          </span> 
          : 680k</p>   

        <p className='text-base mb-2'>  
          <span className='font-cairo font-semibold'>
            Dinner  
          </span> 
          : N/A</p>     
      </span>
    </section>
  </main>
    </>
  
  )
}
