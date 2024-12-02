import React from 'react'
import CarbsLineChart from '../charts/linechart'
export default function CarbsToday() {
  return (
    <>
    <h1 className='font-cairo font-black mt-[0.05] text-3xl '>CARBS TODAY</h1>
    <main className="flex justify-center items-center mt-[-10px] p-3">
    <section className="max-w-5xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
      <span className="flex justify-center items-center p-6">
        <CarbsLineChart/>
      </span>
    </section>
  </main>
    </>
  
  )
}
