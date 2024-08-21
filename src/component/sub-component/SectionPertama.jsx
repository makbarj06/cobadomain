import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import daunLontara from "./imageHal/daunlontarafix2.png";
import bckgrnd from "../../img/background.svg";
import daunlontarabawah from "./imageHal/daunlonatarabawah.png";
import rumahtoraja from "./imageHal/rumahtoraja.png";
import dataku from "../../dataku.json";

const pengantiPria = dataku.namaPria;
const pengantinWanita = dataku.namaWanita;

export default function HalIntroduction() {
  const [scrollY, setScrollY] = useState(0);

  // Mengatur scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="HalPertama">
      <div className="w-full h-[770px] overflow-hidden xl:flex justify-center">
        <div
          className="xl:w-[360px] w-full h-[770px] relative"
          style={{
            backgroundImage: `url(${bckgrnd})`,
          }}
        >
          {/* Motion daunLontara dari kiri ke posisi awal dengan parallax effect */}
          <motion.img
            src={daunLontara}
            alt=""
            className="absolute top-0"
            style={{ y: scrollY * 0.2 }} // Menggunakan scrollY untuk efek parallax
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              duration: 1,
            }}
          />

          {/* Motion daunlontarabawah dari kanan ke posisi awal dengan parallax effect */}
          <motion.img
            src={daunlontarabawah}
            alt=""
            className="absolute bottom-0 right-0"
            style={{ y: scrollY * 0.2 }} // Menggunakan scrollY untuk efek parallax
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              duration: 1,
              delay: 0.5,
            }}
          />
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[273px] h-[458px] relative ">
              <motion.svg
                width="278"
                height="464"
                viewBox="0 0 278 464"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ strokeDasharray: 1600, strokeDashoffset: 1600 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <g filter="url(#filter0_d_35_9)">
                  <path
                    d="M83.5 2H271.5V453.5H6V2H20"
                    stroke="#3A6F43"
                    strokeWidth="4"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_35_9"
                    x="0"
                    y="0"
                    width="277.5"
                    height="463.5"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_35_9"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_35_9"
                      result="shape"
                    />
                  </filter>
                </defs>
              </motion.svg>
              <div className="absolute top-0 w-full h-full flex justify-center items-center ">
                <motion.div
                  className=""
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                >
                  <div className="w-full flex justify-center">
                    <img src={rumahtoraja} alt="" />
                  </div>
                  <div className="w-full">
                    <p className="w-full flex justify-center font-secondchild text-[64px] text-[#376D41] leading-snug">
                      {pengantiPria}
                    </p>
                    <p className="w-full flex justify-center font-carmitta text-[64px] leading-snug text-[#376D41]">
                      &
                    </p>
                    <p className="w-full flex justify-center text-[64px] font-secondchild text-[#376D41] leading-snug">
                      {pengantinWanita}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
