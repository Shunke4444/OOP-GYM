import React from 'react'
import BarChart from '../charts/bargraph'
export default function Protein() {
  return (
    <>
    <h1 className='font-cairo font-black mt-[0.05] text-3xl '>PROTEIN THIS WEEK</h1>
    <main className="flex justify-center items-center mt-[-10px] p-3">
    <section className="max-w-5xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
      <span className="flex justify-center items-center p-6">
        <BarChart  />
      </span>
    </section>
  </main>
    </>
  
  )
}
