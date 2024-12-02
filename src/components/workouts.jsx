import React from 'react'
import workout from '../assets/images/Dashboard/bodyWorkout.jpg'
export default function Workouts(props) {
  return (
    <>
    <main className='w-[20rem] h-[10rem] grid grid-cols-2 gap-4 bg-slate-500 p-5'>
      <section className='flex items-center'>
        <img src={workout} className='rounded-3xl h-[6rem] w-auto' alt="" />
      </section>
      <section className='flex items-center justify-center'>
        right
      </section>
    </main>
    </>
  )
}
