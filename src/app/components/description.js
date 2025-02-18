import Cobe from "./../common/cobe";
import styles from "../styles/scroll.module.css";

export default function Description() {
  return (
    <section
      id="description"
      className={styles.description}
    >
      <div className="flex flex-wrap items-center justify-evenly px-6">
      <div className="">
              <a href="https://www.credly.com/badges/163e9d9b-1b19-48f1-86af-ed476793fbe6" className="hover:animate-bounce block relative h-26 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-fill object-center hidden lg:block mx-auto w-48 h-34 md:w-48 md:h-34 lg:w-52 lg:h-34 block"
                  src="https://imgur.com/KS52t9q.png"
                />
              </a>
        </div>
        <section
          className=" "
          style={{ height: "500px", width: "500px" }}
        >
          <Cobe />
        </section>
        <div className="">
              <a href="https://www.credly.com/badges/e6d53ea3-5211-4d49-8d57-de6ee56797ec" className="hover:animate-bounce block relative h-26 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-fill object-center mx-auto mb-24 md:mb-0 w-48 h-34 md:w-48 md:h-34 lg:w-52 lg:h-34 block"
                  src="https://imgur.com/f9i2YwA.png"
                />
              </a>
        </div>
      </div>
    </section>
  );
}
