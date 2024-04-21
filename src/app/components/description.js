import Cobe from "./../common/cobe";

export default function Description() {
    return (
      <section 
      id="description" 
      className="mb-16 pt-16 bg-black profile-page"
      style={{height: "500px"}}
      >
        <div className="flex flex-wrap items-center justify-evenly px-6">
          <section
            className="relative block"
            style={{ height: "500px", width: "500px" }}
          >
            <Cobe />
          </section>
        </div>
      </section>
    )
  }