export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About ARTICULUS Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to ARTICULUS Blog! This blog was created by Asthreeta Schaft
              as a reading platform to share knowledge, thoughts and ideas with the
              world. Asthreeta Schaft is a virtual existing organisation developing projects and connecting people on one platform.
            </p>

            <p>
              On this blog, you'll find weekly articles on various variety of topics.
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>

            <p>
              Thank you,
              <br></br>
              ~ from <b>Author</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};