import Cobe from "./../common/cobe";
import styles from "../styles/scroll.module.css";

export default function Description() {
  return (
    <section
      id="description"
      className={styles.description}
    >
      <div className="flex flex-wrap items-center justify-evenly px-6">
        <p
          className="text-white hover:animate-bounce hidden lg:block border border-solid border-white rounded p-4 py-12"
          style={{ width: "170px" }}
        >
          Become the architect of your own world with code.
        </p>
        <section
          className=" "
          style={{ height: "500px", width: "500px" }}
        >
          <Cobe />
        </section>
        <p
          className="text-white hover:animate-bounce hidden lg:block border border-solid border-white rounded p-4 py-12"
          style={{ width: "170px" }}
        >
          The limits of my lenguage means the limits of my world.
        </p>
      </div>
    </section>
  );
}
