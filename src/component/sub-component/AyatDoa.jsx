import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AyatDoa() {
  // Menggunakan useRef untuk mereferensikan elemen paragraf
  const ref = useRef(null);
  // Menggunakan useInView untuk memantau apakah paragraf terlihat di viewport
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <div className="w-full h-[163px] flex justify-center">
      <div className="xl:w-[390px] w-full flex justify-center items-center bg-[#396D41]">
        <motion.p
          ref={ref} // Menghubungkan paragraf dengan ref untuk dipantau oleh useInView
          className="w-[356px] text-center text-[16px] font-rosseti text-white"
          initial={{ scale: 0.5, y: 20 }} // Ukuran kecil dan posisi lebih rendah
          animate={isInView ? { scale: 1, y: 0 } : {}} // Tumbuh dan bergerak ke atas
          transition={{ duration: 1, ease: "easeOut" }} // Durasi animasi dan easing
        >
          “ Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
          tanda-tanda (kebesaran Allah) bagi kaum yang berpikir “ .
        </motion.p>
      </div>
    </div>
  );
}
