import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Blogs / Books</h1>
      <p className='text-md text-gray-500'>Learn and share your views on different topics available to read on our platform. Enjoy your reading journey...</p>
      <CallToAction />
    </div>
  )
}