import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    
      <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to read interesting blogs
            </h2>
            <p className='text-gray-500 my-2'>
                Dive into the endless ocean of knowledge
            </p>
            <Button gradientDuoTone='greenToBlue' className='rounded-tl-xl rounded-bl-none'>
                <a href="/search" rel='noopener noreferrer'>
                    Start Reading now...
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.webp" className="rounded-lg"/>
        </div>
    </div>
    
  )
}
