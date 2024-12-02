import { Link, useNavigate } from 'react-router-dom';
import HeaderGym from '../../components/header';
import { FaArrowLeft } from "react-icons/fa";

export default function WorkoutLevel() {
  const navigate = useNavigate()
  return (
    <>
      <HeaderGym pagename='Exercise' />
      <main className='h-screen w-screen p-3 overflow-hidden'>
      <header className="relative flex w-screen h-auto items-center justify-center mb-8 mt-5">
          <FaArrowLeft onClick={() => navigate(-1)} className="absolute left-5 text-3xl text-black" />
          <h1 className="font-lexend font-semibold text-2xl text-center underline underline-offset-4">
            Choose a Difficulty!
          </h1>
      </header>

        <section className='flex items-center justify-center flex-col gap-6'>
          <Link className='relative h-[10rem] w-[20rem] bg-cover bg-[url("./assets/images/Exercise/BEGINNER.avif")] flex items-center justify-center rounded-xl shadow-lg'>
            <div className='absolute inset-0 bg-black opacity-60 rounded-xl'></div>
            <h1 className='relative text-white font-lexend font-semibold text-3xl'>BEGINNER</h1>
          </Link>

          <Link className='relative h-[10rem] w-[20rem] bg-cover bg-[url("./assets/images/Exercise/GYM.jpg")] flex items-center justify-center rounded-xl shadow-lg'>
            <div className='absolute inset-0 bg-black opacity-60 rounded-xl'></div>
            <h1 className='relative text-white font-lexend font-semibold text-3xl'>MEDIUM</h1>
          </Link>

          <Link className='relative h-[10rem] w-[20rem] bg-cover bg-[url("./assets/images/Exercise/EXPERT.png")] flex items-center justify-center rounded-xl shadow-lg'>
            <div className='absolute inset-0 bg-black opacity-60 rounded-xl'></div>
            <h1 className='relative text-white font-lexend font-semibold text-3xl'>EXPERT</h1>
          </Link>
        </section>
      </main>
    </>
  );
}