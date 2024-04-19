import Cobe from "./../common/cobe";

export default function Description() {
    return (
      <section id="description" className="relative isolate overflow-hidden bg-black px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-black opacity-20" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">

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
                    Full-Stack Developer | JavaScript | Node |SQL
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
{/*         <section
            className="relative block"
            style={{ height: "500px", width: "500px" }}
          >
            <Cobe />
          </section> */}
      </section>
      
    )
  }