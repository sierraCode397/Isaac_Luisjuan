

export default function Description() {
    return (
      <section id="description" className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),black)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-black shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img className="mx-auto h-14" src="https://imgur.com/e2TOmcF.jpg" alt="" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
              <p  style={{
                    color: '#e5e7eb'
                  }}>
                “I am  passionate about software development, specializing in both front-end and back-end web development. 
                Here, you will discover a digital space where creativity meets functionality. ¡Explore, 
                discover and join this journey of code and creation! 🚀✨.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-14 w-14 rounded-full"
                src="https://i.imgur.com/amwW3yW.jpg"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div style={{
                    color: '#e5e7eb'
                  }}
                  className="font-semibold">
                    Isaac Luisjuan
                </div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-white">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div style={{
                    color: '#e5e7eb'
                  }}
                  >
                    Full-Stack Developer PERN Stack
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }