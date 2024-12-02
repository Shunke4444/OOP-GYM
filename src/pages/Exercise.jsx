import HeaderGym from '../components/header'

export default function Exercise() {
  return (
    <>
    <HeaderGym pagename='Exercise'/>
    <main className='h-screen w-screen p-3'>
      <header className='w-screen h-auto text-center mb-10'>
        <h1 className='mt-5 mr-3 font-lexend font-semibold text-3xl underline underline-offset-8'>Choose a Workout Setting!</h1>
      </header>

      <section className='flex items-center justify-center flex-col gap-9'>
        <div className='h-[15rem] w-[25rem] bg-slate-600 flex items-center justify-center rounded-2xl shadow-xl'>
          <h1>HOME</h1>
        </div>

        <div className='h-[15rem] w-[25rem] bg-slate-600 flex items-center justify-center rounded-2xl shadow-xl'>
          <h1>GYM</h1>
        </div>
      </section>
    </main>
    </>
  )
}
