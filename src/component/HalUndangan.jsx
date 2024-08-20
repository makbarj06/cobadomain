import { useRef, useEffect } from "react";
import HalIntroduction from "./sub-component/SectionPertama";
import backgroundMusic from "../audio/OFFICIAL Video clip SAJENG RENNU Ost SILARIANG -  Art2tonic feat IKA KDI.mp3";

export default function HalUndangan() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      const startTime = 79; // Detik ke-79 (1:19)
      const endTime = 151; // Detik ke-151 (2:31)

      audioRef.current.currentTime = startTime;
      audioRef.current.play();

      const timer = setTimeout(() => {
        audioRef.current.pause();
        audioRef.current.currentTime = startTime; // Reset posisi musik
      }, (endTime - startTime) * 1000);

      return () => clearTimeout(timer);
    }
  });

  return (
    <>
      <audio ref={audioRef} src={backgroundMusic} preload="auto" />
      <HalIntroduction />
    </>
  );
}
