import Cobe from "./../common/cobe";

export default function Description() {
    return (
      <section 
      id="description" 
      className="md:mb-16 pt-16 bg-black profile-page"
      style={{height: "500px"}}
      >
        <div className="flex flex-wrap items-center justify-evenly px-6">
            
          <p className="hidden lg:block border border-solid border-white rounded p-4 py-12" style={{ width: "170px" }}>
            Become the architect of your own world with code.
          </p>
          <section
            className="relative block"
            style={{ height: "500px", width: "500px" }}
          >
            <Cobe />
          </section>
          <p className="hidden lg:block border border-solid border-white rounded p-4 py-12" style={{ width: "170px" }}>
            The limits of my lenguage means the limits of my world.
          </p>
        </div>
      </section>
    )
  }