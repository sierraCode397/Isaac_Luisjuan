'use client'
const { useMiContexto }= require ('../hooks/useContext');

import TagCertificate from "../helper/TagCertificate";
import InfiniteHorizontalScroller from "../helper/InfiniteHorizontalScroll";
import styles from "../styles/scroll.module.css";

  export default function Certificates() {

  const { certificateItems } = useMiContexto();

    return (
      <div id='certificates' className="bg-gray-100" style={{ overflowX: 'hidden' }}> {/* Cambiado overflow-x-auto a overflow-x-hidden */}
        <div className={styles.certificates}>
          <div className="mx-auto  py-8 lg:max-w-none ">
          <h1 className="text-3xl font-semibold text-center capitalize relative">
            <span className="bg-gradient-to-r from-yellow-600 to-black text-transparent bg-clip-text hover:text-4xl">Certificates</span>
          </h1>
            <div className="mt-6 space-x-4">
              <div className="lg:flex lg:space-x-4">
                <div
                  style={{
                    display: 'flex',
                    overflowX: 'auto', // Cambiado a overflow-x-scroll
                    WebkitOverflowScrolling: 'touch',
                    margin: '0 -10px',
                  }}
                >
                    <InfiniteHorizontalScroller rows={2} direction={"normal"} tag={TagCertificate} Items={certificateItems} duration={125000} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}