import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import bckgrnd from "../../img/background.svg";
import gmbrTangan from "./imageHal/tangann1.png";
import iconCalendar from "./imageHal/calendarrr.png";
import lokasiicon from "./imageHal/lokasi.png";

const AnimatedCircles = ({ startAnimation, delay }) => {
  return (
    <motion.svg
      width="119"
      height="8"
      viewBox="0 0 119 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: 20 }, (_, index) => (
        <motion.circle
          key={index}
          cx={2 + 5 * index}
          cy="4"
          r={index === 19 ? 4 : 2} // The last circle is larger
          fill="#396D41"
          initial={{ r: 0 }} // Initial state with radius 0
          animate={{ r: startAnimation ? (index === 19 ? 4 : 2) : 0 }} // Animate radius
          transition={{ duration: 0.3, delay: delay + index * 0.02 }} // Added delay to each group
        />
      ))}
    </motion.svg>
  );
};

export default function RangkaianAcaraAdat() {
  const [inView, setInView] = useState(false);
  const [animateCircles, setAnimateCircles] = useState(false);
  const svgRef = useRef(null);
  const lineRef = useRef(null);
  const controls = useAnimation();
  const lineControls = useAnimation();
  const textControls = useAnimation(); // Controls for text animation

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is in view
      }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
      }
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ strokeDashoffset: 0 });
      lineControls
        .start({ strokeDashoffset: 0 })
        .then(() => setAnimateCircles(true));

      // Trigger text animation when in view
      textControls.start({ scale: 1, opacity: 1 });
    } else {
      controls.start({ strokeDashoffset: 1000 }); // Reset animation when out of view
      lineControls.start({ strokeDashoffset: 1000 }); // Reset line animation
      setAnimateCircles(false); // Reset circle animation

      // Reset text animation when out of view
      textControls.start({ scale: 0.5, opacity: 0 });
    }
  }, [inView, controls, lineControls, textControls]);

  return (
    <div className="w-full flex justify-center h-[687px] overflow-hidden  relative">
      <div
        className="xl:w-[390px] w-full"
        style={{
          backgroundImage: `url(${bckgrnd})`,
        }}
      >
        <div className="">
          <div
            className="flex justify-center pt-5 font-rosseti text-[32px]"
            id="rangkaianAcaraAdatText"
          >
            Rangkaian Acara Adat
          </div>
          <div className="mt-8" id="chart">
            <div className="relative flex justify-center items-center">
              <motion.svg
                id="garisPanjang"
                width="22"
                height="180"
                viewBox="0 0 22 201"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                ref={lineRef} // Use lineRef for the long line SVG
              >
                <motion.path
                  d="M0.333333 11C0.333334 16.891 5.10896 21.6667 11 21.6667C16.891 21.6667 21.6667 16.891 21.6667 11C21.6667 5.10896 16.891 0.333333 11 0.333333C5.10896 0.333334 0.333333 5.10896 0.333333 11ZM13 201L13 11L9 11L9.00001 201L13 201Z"
                  stroke="#9EB7A2"
                  strokeWidth="2"
                  fill="transparent"
                  initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }} // Set initial state for animation
                  animate={lineControls} // Bind eanimation controls for line
                  transition={{ duration: 2, ease: "easeInOut" }} // Adjust duration and easing as needed
                />
              </motion.svg>
              <div className="absolute -mt-20 ml-32" id="garis1">
                <AnimatedCircles
                  startAnimation={animateCircles}
                  delay={0.1} // Delay for garis1
                />
              </div>
              <div
                className="absolute mt-10 transform -scale-x-100 mr-32"
                id="garis2"
              >
                <AnimatedCircles
                  startAnimation={animateCircles}
                  delay={1} // Delay for garis2
                />
              </div>
            </div>
            <div className="flex justify-center ml-14 -mt-8">
              <img src={gmbrTangan} alt="" />
            </div>
            <div className="flex justify-center ml-[6.5rem] -mt-1">
              <motion.svg
                className="w-[22px] h-[160px]"
                id="garisPanjang"
                width="0"
                height=""
                viewBox="0 0 22 201"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: "rotate(180deg)",
                  transformOrigin: "center",
                }} // Rotate the SVG 180 degrees
              >
                <motion.path
                  d="M0.333333 11C0.333334 16.891 5.10896 21.6667 11 21.6667C16.891 21.6667 21.6667 16.891 21.6667 11C21.6667 5.10896 16.891 0.333333 11 0.333333C5.10896 0.333334 0.333333 5.10896 0.333333 11ZM13 201L13 11L9 11L9.00001 201L13 201Z"
                  stroke="#9EB7A2"
                  strokeWidth="2"
                  fill="transparent"
                  initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }} // Set initial state for animation
                  animate={lineControls} // Bind animation controls for line
                  transition={{ duration: 2, ease: "easeInOut" }} // Adjust duration and easing as needed
                />
              </motion.svg>
            </div>
            <div className="flex justify-center">
              <div className="absolute -mt-20 ml-[14.5rem]" id="garis3">
                <AnimatedCircles
                  startAnimation={animateCircles}
                  delay={1} // Delay for garis3
                />
              </div>
            </div>
            <div className="absolute top-[7.8rem] ml-14 left-0  flex justify-center w-full">
              <div className="">
                <motion.div
                  className=""
                  id="mappet"
                  initial={{ scale: 0.5, opacity: 0 }} // Initial state for mappet
                  animate={textControls} // Bind animation controls
                  transition={{ duration: 0.5, ease: "easeOut", delay: 2 }} // Adjust duration and easing as needed
                >
                  Mappetuada
                </motion.div>
                <motion.div
                  className=""
                  initial={{ scale: 0.5, opacity: 0 }} // Initial state for tanggalAcara
                  animate={textControls} // Bind animation controls
                  transition={{ duration: 0.5, ease: "easeOut", delay: 2 }} // Adjust duration, easing, and delay as needed
                  id="tanggalAcara"
                >
                  <div className="icon flex  items-center">
                    <img
                      src={iconCalendar}
                      alt=""
                      className="w-[12px] h-[12px] mr-1"
                    />
                    <p
                      className="text-[16px] text-[#396D41] font-rosseti"
                      id="tanggalAcara"
                    >
                      29 November 2024
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="-mt-2"
                  initial={{ scale: 0.5, opacity: 0 }} // Initial state for tanggalAcara
                  animate={textControls} // Bind animation controls
                  transition={{ duration: 0.5, ease: "easeOut", delay: 3 }} // Adjust duration, easing, and delay as needed
                  id="tanggalAcara"
                >
                  <div className="icon flex  items-center -">
                    <img
                      src={lokasiicon}
                      alt=""
                      className="w-[12px] h-[12px] mr-1"
                    />
                    <p
                      className="text-[16px] text-[#396D41] font-rosseti"
                      id="tanggalAcara"
                    >
                      Kediaman Perempuan
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="absolute top-[11.6rem] -left-[3.2rem]  xl:left-0  flex justify-center w-full">
              <div className="">
                <motion.div
                  className=""
                  id="mappet"
                  initial={{ scale: 0.5, opacity: 0 }} // Initial state for mappet
                  animate={textControls} // Bind animation controls
                  transition={{ duration: 0.5, ease: "easeOut", delay: 3 }} // Adjust duration and easing as needed
                >
                  Mappassili
                </motion.div>
                <motion.div
                  className=""
                  initial={{ scale: 0.5, opacity: 0 }} // Initial state for tanggalAcara
                  animate={textControls} // Bind animation controls
                  transition={{ duration: 0.5, ease: "easeOut", delay: 3 }} // Adjust duration, easing, and delay as needed
                  id="tanggalAcara"
                >
                  <div className="icon flex  items-center">
                    <img
                      src={iconCalendar}
                      alt=""
                      className="w-[12px] h-[12px] mr-1"
                    />
                    <p
                      className="text-[16px] text-[#396D41] font-rosseti"
                      id="tanggalAcara"
                    >
                      29 November 2024
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="-mt-2"
                  initial={{ scale: 0.5, opacity: 0 }} // Initial state for tanggalAcara
                  animate={textControls} // Bind animation controls
                  transition={{ duration: 0.5, ease: "easeOut", delay: 3 }} // Adjust duration, easing, and delay as needed
                  id="tanggalAcara"
                >
                  <div className="icon flex  items-center">
                    <img
                      src={lokasiicon}
                      alt=""
                      className="w-[12px] h-[12px] mr-1 -mt-3"
                    />
                    <p
                      className="text-[16px] text-[#396D41] font-rosseti"
                      id="tanggalAcara"
                    >
                      <div className="">
                        <div className="">kediaman Perempuan</div>
                        <div className="-mt-3">dan Laki-laki</div>
                      </div>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
