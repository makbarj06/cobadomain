import audioFile from "../../audio/Ari Lasso - Cinta Terakhir ｜ Official Music Video.mp3"; // Ganti dengan path audio Anda

function AutoPlayAudio() {
  const audioRef = useRef(null); // Membuat ref untuk elemen audio

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.play(); // Memulai pemutaran audio saat komponen dirender

      // Event listener untuk menghentikan pemutaran atau melakukan tindakan lain saat audio selesai
      const handleEnded = () => {
        console.log("Audio finished playing");
        // Tambahkan tindakan lain jika diperlukan saat audio selesai
      };

      audioElement.addEventListener("ended", handleEnded);

      // Cleanup listener saat komponen di-unmount
      return () => {
        audioElement.removeEventListener("ended", handleEnded);
      };
    }
  }, []); // Dependency array kosong memastikan effect hanya dijalankan sekali

  return (
    <div>
      <audio ref={audioRef} src={audioFile} />
    </div>
  );
}

export default AutoPlayAudio;
