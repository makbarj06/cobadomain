import bckgrnd from "../img/background.svg";
import lammingAtas from "../img/lammingAtas.png";
import lammingBawah from "../img/lammingBawah.png";
import badik from "../img/badik.svg";
import fotoPernikahan from "../img/pernikahan.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dataku from "../dataku.json";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate

export default function Cover() {
  const [isBackgroundComplete, setIsBackgroundComplete] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [animateOut, setAnimateOut] = useState(false); // State untuk animasi keluar
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const { id } = useParams();

  const namaLengkap = `${dataku.namaPria} & ${dataku.namaWanita}`;

  useEffect(() => {
    if (isBackgroundComplete && index < namaLengkap.length) {
      const timer = setTimeout(() => {
        setTypedText((prev) => prev + namaLengkap[index]);
        setIndex((prev) => prev + 1);
      }, 150); // Delay typing speed
      return () => clearTimeout(timer);
    }
  }, [index, isBackgroundComplete]);

  // Fungsi untuk menangani klik tombol
  const handleButtonClick = () => {
    setAnimateOut(true); // Memulai animasi keluar
  };

  // Fungsi untuk menavigasi setelah animasi selesai
  const handleAnimationComplete = () => {
    navigate(`/${id}/aninvitation`); // Ganti "/next-page" dengan route yang diinginkan
  };

  return (
    <motion.div
      className="w-screen h-screen xl:flex justify-center overflow-hidden"
      initial={{ y: 0 }} // Posisi awal halaman
      animate={{ y: animateOut ? "-100%" : 0 }} // Bergerak ke atas jika animateOut true
      transition={{ duration: 1.5 }} // Durasi animasi
      onAnimationComplete={() => {
        if (animateOut) {
          handleAnimationComplete(); // Navigasi ke halaman baru setelah animasi selesai
        }
      }}
    >
      <div
        className="w-full h-full xl:w-[390px]"
        style={{ backgroundImage: `url(${bckgrnd})` }}
      >
        <motion.div
          className="h-[85%] w-full bg-repeat-x sm:h-[88%] xl:h-[80%] sm:bg-repeat-x bg-[50%,0%]"
          style={{ backgroundImage: `url(${lammingAtas})` }}
          initial={{ y: "-100vh" }} // Start from off-screen (top)
          animate={{ y: 0 }} // Move to original position
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }} // Spring effect with delay
          onAnimationComplete={() => setIsBackgroundComplete(true)} // Set ke true saat animasi selesai
        >
          <div className="h-[12%] sm:h-[15%] xl:h-[12%] "></div>
          <div className="h-[88%] sm:h-[85%] xl:h-[88%] ">
            <div className="">
              {isBackgroundComplete && (
                <motion.div
                  className="flex justify-center pt-3"
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <img
                    src={badik}
                    alt=""
                    className="sm:scale-150 xl:scale-100 sm:pt-3"
                  />
                </motion.div>
              )}
              {isBackgroundComplete && (
                <motion.div
                  className="flex justify-center pt-2 sm:pt-6 xl:pt-3 sm:text-[32px] text-[#376D41] xl:text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <h1 className="font-sarlotte">THE WEDDING OF</h1>
                </motion.div>
              )}
              <div className="flex justify-center text-3xl font-carmitta text-[#376D41] xl:text-[35px] xl:pt-2 sm:text-[55px] sm:pt-3">
                <h1>{typedText}</h1>
              </div>
              {isBackgroundComplete && (
                <motion.div
                  className="flex justify-center"
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 10,
                    duration: 2,
                  }}
                >
                  <img
                    src={fotoPernikahan}
                    alt="Foto Pernikahan"
                    className="w-[330px] sm:w-[500px] xl:w-[300px] mr-2 sm:mr-5 sm:-mt-5 -mt-5 "
                  />
                </motion.div>
              )}
              {isBackgroundComplete && (
                <motion.div
                  className="flex justify-center font-sarlotte text-[#376D41] xl:text-sm text-sm mt-1 mb-1  sm:text-[24px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <h1>32 Desember 2024</h1>
                </motion.div>
              )}
              {isBackgroundComplete && (
                <motion.div
                  className="flex justify-center font-sarlotte sm:mt-2  xl:text-sm xl:mt-0 text-[#376D41] mt-2 text-sm sm:text-[24px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <h1>Kpd Bpk/Ibu/Saudara/i</h1>
                </motion.div>
              )}
              {isBackgroundComplete && (
                <motion.div
                  className="flex justify-center mt-3  font-myflora sm:mt-8 xl:text-sm xl:mt-0 text-[#376D41] text-3xl  sm:text-[50px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <h1 className="capitalize">{id}</h1>
                </motion.div>
              )}
              {isBackgroundComplete && (
                <motion.div
                  className="flex justify-center font-sarlotte sm:mt-8 xl:text-[10px] xl:text-xs xl:mt-0 text-[#376D41] text-[13px] mt-3 sm:text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <h1 className="capitaliz w-[80%] text-center">
                    Dengan Menjunjung Rasa Hormat, Kami mengundang Anda Untuk
                    Hadir di Acara Pernikahan Kami
                  </h1>
                </motion.div>
              )}
              <div className="flex justify-center">
                {isBackgroundComplete && (
                  <motion.button
                    type="button"
                    className="px-3 sm:px-8 py-1 mt-2 text-xs font-medium text-center inline-flex items-center text-white bg-gradient-to-r from-[#386E42] to-[#3D4827] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    onClick={handleButtonClick} // Menangani klik tombol
                  >
                    <svg
                      className="w-3 h-3 text-white me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                    Buka Undangan
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="h-[15%] bg-no-repeat bg-cover sm:bg-[50%,0%] sm:h-[12%] xl:h-[20%] xl:bg-no-repeat xl:bg-cover sm:bg-repeat-x "
          style={{ backgroundImage: `url(${lammingBawah})` }}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </div>
    </motion.div>
  );
}
