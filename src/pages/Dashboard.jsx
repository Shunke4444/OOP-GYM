import HeaderGym from '../components/header'
import { useState, useEffect } from 'react';

import MacroCarousel from '../components/macroCarousel';
function DateComponent() {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const now = new Date();
    const options = { month: 'short', day: 'numeric' };
    const date = now.toLocaleDateString(undefined, options);
    const weekday = now.toLocaleDateString(undefined, { weekday: 'long' });
    setCurrentDateTime(`${weekday}, ${date}`);
  }, []);

  return <span className="text-header font-bold my-0 justify-end">{currentDateTime}</span>;
}
export default function Dashboard() {
  return (
    <>
    <header>
      <HeaderGym
      pagename='Dashboard'
      />
    </header>
      <main className='p-5'>
      <section className='flex w-full h-auto mb-5'>
        <div className='flex w-full h-auto justify-between items-end'>
          <span className='flex flex-col items-start'>
            <h1 className='font-lexend font-semibold text-3xl '>Welcome Back,</h1>
            <p className='font-cambay text-xl'>Michael Reeves</p>
          </span>

          <div className='flex-shrink-0 mb-9'>
            <DateComponent className='flex items-end justify-end'/>
          </div>
        </div>
     </section>

     <div>
      <h1 className='font-lexend font-black text-4xl text-bg-orange'>MACROS</h1>
    <MacroCarousel/>
     </div>

      <div>
        
      </div>


  </main>
    </>
  )
}
