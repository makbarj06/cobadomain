import React, { useEffect } from "react";
import { Howl } from "howler";
import bgaudio from "../audio/OFFICIAL Video clip SAJENG RENNU Ost SILARIANG -  Art2tonic feat IKA KDI.mp3";
import HalIntroduction from "./sub-component/SectionPertama";
import RangkaianAcaraAdat from "./sub-component/RangkaianAcaraAdat";
import AyatDoa from "./sub-component/Ayatdoa";

function HalUndangan() {
  // useEffect(() => {
  //   // Membuat instance Howl dan memutar audio secara otomatis saat komponen dimuat
  //   const sound = new Howl({
  //     src: [bgaudio],
  //     autoplay: true, // Memutar audio secara otomatis
  //     onend: () => {
  //       console.log("Audio finished playing");
  //     },
  //   });

  //   // Opsional: Hentikan audio ketika komponen unmount
  //   return () => {
  //     sound.unload();
  //   };
  // }, []); // Array dependensi kosong berarti effect ini hanya dijalankan saat mount

  return (
    <div>
      <HalIntroduction />
      <AyatDoa />
      <RangkaianAcaraAdat />
    </div>
  );
}

export default HalUndangan;
