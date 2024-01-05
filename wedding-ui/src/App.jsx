import './index.css';
import maskMedic from './assets/mask-man.png';
import keepDistance from './assets/keep-distance.png';
import handWash from './assets/hand-wash.png';
import namastee from './assets/namastee-hand.png';
import bride from './assets/bride.png';
import groom from './assets/groom.png';

function App() {
  return (
    <div className="container">
      <section className="home">
        <h2>SENIN, 20 NOVEMBER 2024</h2>
        <h2>WE INVITE YOU</h2>
        <h2>TO OUR WEDDING</h2>
        <h1 className="title-1">Romeo and Juliet</h1>
        <h2>Hello, We Are Getting Married</h2>
        <div className="home-1">
          <h2>Dear</h2>
          <h2 className="title-2">Anya</h2>
          <h2>Tangerang</h2>
          <button>Open Invitation</button>
        </div>
      </section>

      <section className="countdown">
        <h1 className="title-2">
          COUNTDOWN <span className="material-symbols-outlined">timer</span>
        </h1>
        <h2>Days : Hours : Minutes : Seconds</h2>

        <h1 className="title-2">
          NOTES <span className="material-symbols-outlined">description</span>
        </h1>
        <h2>Protokol Covid-19</h2>
        <h3>Dalam upaya mengurangi penyebaran Covid-19 pada masa pandemi,</h3>
        <h3>
          kami harapkan kedatangan para tamu undangan agar menjalankan protocol
          yang berlaku di tempat.
        </h3>

        <div className="countdown-1">
          <div className="conutdown-1a">
            <img src={maskMedic} alt="mask-man" />
            <p>
              Menggunakan Masker{' '}
              <span className="material-symbols-outlined">medical_mask</span>
            </p>
          </div>
          <div className="conutdown-1b">
            <img src={keepDistance} alt="keep-distance" />
            <p>
              Menjaga Jarak{' '}
              <span className="material-symbols-outlined">social_distance</span>
            </p>
          </div>
          <div className="conutdown-1c">
            <img src={namastee} alt="namastee-hand" />
            <p>
              Mengunakan salam namastee sebagai pangganti jabat tangan{' '}
              <span className="material-symbols-outlined">cheer</span>
            </p>
          </div>
          <div className="conutdown-1d">
            <img src={handWash} alt="hand-wash" />
            <p>
              Menjaga kebersihan dengan mencuci tangan atau handsanitizer{' '}
              <span className="material-symbols-outlined">clean_hands</span>
            </p>
          </div>
        </div>
      </section>

      <section className="bridegroom">
        <h1 className="title-2">
          BRIDE & GROOM{' '}
          <span className="material-symbols-outlined">favorite</span>
        </h1>
        <h3>Assalamu'alaikum Warahmatullahi Wabarakatuh</h3>
        <h3>
          Maha suci Allah SWT yang telah menciptakan mahluk-Nya
          berpasang-pasngan.
        </h3>
        <h3>
          Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan
          di antara Putra-Putri kami :
        </h3>
        <div className="bridegroom-1">
          <div className="bridegroom-1a">
            <img src={groom} alt="groom" />
            <h2 className="title-2">ROMEO</h2>
            <h2>Romeo Adam</h2>
            <h2>Putra dari pasangan</h2>
            <h2>Andy & Asih</h2>
            <h2>
              Jakarta{' '}
              <span className="material-symbols-outlined">location_on</span>
            </h2>
          </div>

          <div className="bridegroom-1b">
            <img src={bride} alt="bride" />
            <h2 className="title-2">JULIET</h2>
            <h2>Juliet Hawa</h2>
            <h2>Putri dari pasangan</h2>
            <h2>Fikri & Yuni</h2>
            <h2>
              Tangerang{' '}
              <span className="material-symbols-outlined">location_on</span>
            </h2>
          </div>
        </div>
      </section>

      <section className="gallery">
        <h1 className="title-2">
          GALLERY{' '}
          <span className="material-symbols-outlined">photo_camera</span>
        </h1>

        <h1 className="title-2">OUR QUOTE</h1>
        <h3>
          Tidak ada solusi yang lebih baik bagi dua insan yang saling mencintai
          di banding pernikahan. HR. IBNU MAJAH
        </h3>
      </section>

      <section className="gift">
        <h1 className="title-2">
          GIFT{' '}
          <span className="material-symbols-outlined">
            featured_seasonal_and_gifts
          </span>
        </h1>
      </section>
    </div>
  );
}

export default App;
