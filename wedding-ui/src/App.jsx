import './index.css';
import maskMedic from './assets/mask-man.png';
import keepDistance from './assets/keep-distance.png';
import handWash from './assets/hand-wash.png';
import namastee from './assets/namastee-hand.png';

function App() {
  return (
    <div className="container">
      <section className="one">
        <h2>SENIN, 20 NOVEMBER 2024</h2>
        <h2>WE INVITE YOU</h2>
        <h2>TO OUR WEDDING</h2>
        <h1>Romeo and Juliet</h1>
        <h2>Hello, We Are Getting Married</h2>
        <div className="one-1">
          <h2>Dear</h2>
          <h2>Anya</h2>
          <h2>Tangerang</h2>
          <button>Open Invitation</button>
        </div>
      </section>
      <section className="two">
        <h1>COUNTDOWN</h1>
        <h2>Days : Hours : Minutes : Seconds</h2>
        <div className="two-1">
          <h1>NOTES</h1>
          <h2>Protokol Covid-19</h2>
          <h3>Dalam upaya mengurangi penyebaran Covid-19 pada masa pandemi,</h3>
          <h3>
            kami harapkan kedatangan para tamu undangan agar menjalankan
            protocol yang berlaku di tempat.
          </h3>
          {/* <span className="material-symbols-outlined">medical_mask</span> */}
          <img src={maskMedic} alt="mask-man" />
          <h3>Menggunakan Masker</h3>
          {/* <span className="material-symbols-outlined">social_distance</span> */}
          <img src={keepDistance} alt="keep-distance" />
          <h3>Menjaga Jarak</h3>
          {/* <span className="material-symbols-outlined">cheer</span> */}
          <img src={namastee} alt="namastee-hand" />
          <h3>Mengunakan salam namastee sebagai pangganti jabat tangan</h3>
          {/* <span className="material-symbols-outlined">clean_hands</span> */}
          <img src={handWash} alt="hand-wash" />
          <h3>Menjaga kebersihan dengan mencuci tangan atau handsanitizer</h3>
        </div>
      </section>
      <section className="three">
        <h1>BRIDE & GROOM</h1>
        <h3>Assalamu'alaikum Warahmatullahi Wabarakatuh</h3>
        <h3>
          Maha suci Allah SWT yang telah menciptakan mahluk-Nya
          berpasang-pasngan.
        </h3>
        <h3>
          Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan
          di antara Putra-Putri kami :
        </h3>
      </section>
      <section className="four">
        <h1>GALLERY</h1>
      </section>
    </div>
  );
}

export default App;
