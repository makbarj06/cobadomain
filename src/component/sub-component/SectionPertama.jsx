import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import daunLontara from "./imageHal/daunlontarafix2.png";
import bckgrnd from "../../img/background.svg";
import daunlontarabawah from "./imageHal/daunlonatarabawah.png";
import rumahtoraja from "./imageHal/rumahtoraja.png";
import dataku from "../../dataku.json";
import audioFile from "../../audio/OFFICIAL Video clip SAJENG RENNU Ost SILARIANG -  Art2tonic feat IKA KDI.mp3"; // Ganti dengan path audio Anda

const pengantiPria = dataku.namaPria;
const pengantinWanita = dataku.namaWanita;

export default function HalIntroduction() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      // Set waktu mulai audio (contoh: 78 detik / 1 menit 18 detik)
      audioElement.currentTime = 78;
      audioElement.play();

      // Hentikan audio setelah waktu akhir (contoh: 152 detik / 2 menit 32 detik)
      const endTime = 152; // Waktu akhir dalam detik
      const duration = endTime - 78; // Durasi yang akan diputar
      const stopPlayback = () => {
        if (audioElement) {
          audioElement.pause();
          audioElement.currentTime = 78; // Kembali ke waktu mulai
        }
      };

      // Hentikan audio setelah durasi
      const timer = setTimeout(stopPlayback, duration * 1000); // Durasi dalam milidetik

      // Clean up timer on component unmount
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="w-full h-[861px] overflow-hidden xl:flex justify-center">
      <audio ref={audioRef} src={audioFile} />

      <div
        className="xl:w-[360px] w-full h-[770px] relative"
        style={{
          backgroundImage: `url(${bckgrnd})`,
        }}
      >
        {/* Motion daunLontara dari kiri ke posisi awal */}
        <motion.img
          src={daunLontara}
          alt=""
          className="absolute top-0"
          initial={{ x: "-100vw", opacity: 0 }} // Titik awal animasi
          animate={{ x: 0, opacity: 1 }} // Titik akhir animasi
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            duration: 1,
          }} // Animasi dengan spring
        />

        {/* Motion daunlontarabawah dari kanan ke posisi awal */}
        <motion.img
          src={daunlontarabawah}
          alt=""
          className="absolute bottom-0 right-0"
          initial={{ x: "100vw", opacity: 0 }} // Titik awal animasi
          animate={{ x: 0, opacity: 1 }} // Titik akhir animasi
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            duration: 1,
            delay: 0.5,
          }} // Animasi dengan spring dan delay
        />
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[273px] h-[458px] relative ">
            <motion.svg
              width="278"
              height="464"
              viewBox="0 0 278 464"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ strokeDasharray: 1600, strokeDashoffset: 1600 }} // Mulai dengan stroke tersembunyi
              animate={{ strokeDashoffset: 0 }} // Stroke muncul secara bertahap
              transition={{ duration: 2, ease: "easeInOut" }} // Durasi animasi 2 detik
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
  );
}
