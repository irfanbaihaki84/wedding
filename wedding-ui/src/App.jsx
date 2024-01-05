import './index.css';
import maskMedic from './assets/mask-man.png';
import keepDistance from './assets/keep-distance.png';
import handWash from './assets/hand-wash.png';
import namastee from './assets/namastee-hand.png';
import bride from './assets/bride.png';
import groom from './assets/groom.png';

function App() {
  const hariJadi = new Date('jan 14, 2024 23:50:00').getTime();
  const hariSekarang = new Date().getTime();
  const selisih = hariJadi - hariSekarang;

  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor(selisih / (1000 * 60 * 60));
  const menit = Math.floor(selisih / (1000 * 60));
  let detik = Math.floor(selisih / 1000);

  console.log('hariJadi: ' + hariJadi);
  console.log('hariSekarang: ' + hariSekarang);
  console.log('selisih: ' + selisih);
  console.log('hari: ' + hari);
  console.log('jam: ' + jam);
  console.log('menit: ' + menit);
  console.log('detik: ' + detik);
  return (
    <div className="container">
      <section className="home">
        <h2>MINGGU, 14 JANUARI 2024</h2>
        <h2>
          WE INVITE YOU
          <br />
          TO OUR WEDDING PARTY
        </h2>
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
        <h2>
          {hari} Hari | {jam} Jam | {menit} Menit | {detik} Detik
        </h2>

        <h1 className="title-2">
          NOTES <span className="material-symbols-outlined">description</span>
        </h1>
        <h2>Protokol Covid-19</h2>
        <h3>
          Dalam upaya mengurangi penyebaran Covid-19 pada masa pandemi,
          <br />
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
        <h3 className="italic">
          Assalamu'alaikum Warahmatullahi Wabarakatuh
          <br />
          Maha suci Allah SWT yang telah menciptakan mahluk-Nya
          berpasang-pasangan.
          <br />
          Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan
          di antara Putra-Putri kami :
        </h3>

        <div className="bridegroom-1">
          <div className="bridegroom-1a">
            <div className="bingkaiBrideGroom">
              <img src={groom} alt="groom" />
            </div>
            <h2 className="title-2">ROMEO</h2>
            <h2>
              Romeo Adam
              <br />
              Putra dari pasangan
              <br />
              Andy & Asih
              <br />
              Jakarta{' '}
              <span className="material-symbols-outlined">location_on</span>
            </h2>
            <h2>Instagram | Twitter</h2>
          </div>

          <div className="bridegroom-1b">
            <div className="bingkaiBrideGroom">
              <img src={bride} alt="bride" />
            </div>
            <h2 className="title-2">JULIET</h2>
            <h2>
              Juliet Hawa
              <br />
              Putri dari pasangan
              <br />
              Fikri & Yuni
              <br />
              Tangerang{' '}
              <span className="material-symbols-outlined">location_on</span>
            </h2>
            <h2>Instagram | Twitter</h2>
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
          di banding pernikahan.
          <br /> HR. IBNU MAJAH
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
