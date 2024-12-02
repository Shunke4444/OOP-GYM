import { Link } from 'react-router-dom';
import HeaderGym from '../components/header';

export default function Exercise() {
  return (
    <>
      <HeaderGym pagename='Exercise' />
      <main className='h-screen w-screen p-3'>
        <header className='w-screen h-auto text-center mb-10'>
          <h1 className='mt-5 mr-3 font-lexend font-semibold text-3xl underline underline-offset-8'>
            Choose a Workout Setting!
          </h1>
        </header>

        <section className='flex items-center justify-center flex-col gap-9'>
          <Link to={'/workoutlevel'} className='relative h-[15rem] w-[25rem] bg-cover bg-[url("./assets/images/Exercise/HOME.jpg")] flex items-center justify-center rounded-2xl shadow-xl'>
            <div className='absolute inset-0 bg-black opacity-60 rounded-2xl'></div>
            <h1 className='relative text-white font-lexend font-semibold text-5xl'>HOME</h1>
          </Link>

          <Link to={'/workoutlevel'} className='relative h-[15rem] w-[25rem] bg-cover bg-[url("./assets/images/Exercise/GYM.jpg")] flex items-center justify-center rounded-2xl shadow-xl'>
            <div className='absolute inset-0 bg-black opacity-60 rounded-2xl'></div>
            <h1 className='relative text-white font-lexend font-semibold text-5xl'>GYM</h1>
          </Link>
        </section>
      </main>
    </>
  );
}