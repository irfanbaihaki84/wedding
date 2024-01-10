import './index.css';
import home from './assets/home.png';
import description from './assets/description.png';
import favorite from './assets/favorite.png';
import photo_camera from './assets/photo_camera.png';
import gifts from './assets/gifts.png';
import maskMedic from './assets/mask-man.png';
import keepDistance from './assets/keep-distance.png';
import handWash from './assets/hand-wash.png';
import namastee from './assets/namastee-hand.png';
import bride from './assets/bride.png';
import groom from './assets/groom.png';
import instagram from './assets/instagram.png';
import twitter from './assets/twitter.png';
import facebook from './assets/facebook.png';
import tiktok from './assets/tiktok.png';

function App() {
  const hariJadi = new Date('jan 13, 2024 23:50:00').getTime();
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
      <section className="nav-bar">
        <div className="nav-group">
          <a href="#home" className="nav-item">
            <span className="material-symbols-outlined">home</span>Home
          </a>
          <a href="#note" className="nav-item">
            <span className="material-symbols-outlined">description</span>Notes
          </a>
          <a href="#bridegroom" className="nav-item">
            <span className="material-symbols-outlined">favorite</span>
            Profile
          </a>
          <a href="#gallery" className="nav-item">
            <span className="material-symbols-outlined">photo_camera</span>
            Gallery
          </a>
          <a href="#gift" className="nav-item">
            <span className="material-symbols-outlined">
              featured_seasonal_and_gifts
            </span>
            Gift
          </a>
        </div>
      </section>

      <section className="home" id="home">
        <h2>
          Hello, We Are Getting Married
          <br />
          Minggu, 13 Januari 2024
          <br />
          We Invite You
          <br />
          To Our Wedding Party
        </h2>
        <h1 className="title-1">Romeo & Juliet</h1>
        <div className="home-1">
          <h2>Dear</h2>
          <h2 className="title-2">Anya</h2>
          <h2>Tangerang</h2>
          <button className="btn btn-success" onClick="#notes">
            Open Invitation
          </button>
        </div>
      </section>

      <section className="note" id="note">
        <h1 className="title-2">
          COUNTDOWN <span className="material-symbols-outlined">timer</span>
        </h1>
        <h2>
          {hari} Hari | {jam} Jam | {menit} Menit | {detik} Detik
        </h2>

        <h1 className="title-2">
          NOTES <span className="material-symbols-outlined">description</span>
        </h1>
        <h3>
          Protokol Covid-19
          <br />
          Dalam upaya mengurangi penyebaran Covid-19 pada masa pandemi,
          <br />
          kami harapkan kedatangan para tamu undangan agar menjalankan protocol
          yang berlaku di tempat.
        </h3>

        <div className="note-1">
          <div className="note-1a">
            <img className="small" src={maskMedic} alt="mask-man" />
            <h3>
              Menggunakan masker{' '}
              {/* <span className="material-symbols-outlined">medical_mask</span> */}
            </h3>
          </div>

          <div className="note-1b">
            <img className="small" src={keepDistance} alt="keep-distance" />
            <h3>
              Menjaga jarak{' '}
              {/* <span className="material-symbols-outlined">social_distance</span> */}
            </h3>
          </div>

          <div className="note-1c">
            <img className="small" src={namastee} alt="namastee-hand" />
            <h3>
              Mengunakan salam namastee sebagai pangganti jabat tangan{' '}
              {/* <span className="material-symbols-outlined">cheer</span> */}
            </h3>
          </div>

          <div className="note-1d">
            <img className="small" src={handWash} alt="hand-wash" />
            <h3>
              Menjaga kebersihan dengan mencuci tangan atau handsanitizer{' '}
              {/* <span className="material-symbols-outlined">clean_hands</span> */}
            </h3>
          </div>
        </div>
      </section>

      <section className="bridegroom" id="bridegroom">
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
              <br />
              <a href="https://www.instagram.com" target="_blank">
                <img className="thumbnail" src={instagram} alt="instagram" />{' '}
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <img className="thumbnail" src={twitter} alt="twitter" />{' '}
              </a>
              <a href="https://www.facebook.com" target="_blank">
                <img className="thumbnail" src={facebook} alt="facebook" />{' '}
              </a>
              <a href="https://www.tiktok.com" target="_blank">
                <img className="thumbnail" src={tiktok} alt="tiktok" />
              </a>
            </h2>
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
              <br />
              <a href="https://www.instagram.com" target="_blank">
                <img className="thumbnail" src={instagram} alt="instagram" />{' '}
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <img className="thumbnail" src={twitter} alt="twitter" />{' '}
              </a>
              <a href="https://www.facebook.com" target="_blank">
                <img className="thumbnail" src={facebook} alt="facebook" />{' '}
              </a>
              <a href="https://www.tiktok.com" target="_blank">
                <img className="thumbnail" src={tiktok} alt="tiktok" />
              </a>
            </h2>
          </div>
        </div>

        <h1 className="title-2">OUR QUOTE</h1>
        <h3>
          Tidak ada solusi yang lebih baik bagi dua insan yang saling mencintai
          di banding pernikahan.
          <br /> HR. Ibnu Majah
        </h3>

        <div className="bridegroom-2">
          <div className="bridegroom-2a">
            <h2 className="title-3">AKAD NIKAH</h2>
            <h3>
              Jumat, 12 Januari 2024
              <br />
              08:00 - 09:00 WIB
              <br />
              Masjid Istiqomah
              <br />
              Jl. Veteran No. 21
              <br />
              Cisereh, Kadu Jaya, Kec. Curug
              <br />
              Kabupaten Tangerang
              <br />
              Banten
            </h3>
            <button className="btn btn-success">Google Map</button>
          </div>
          <div className="bridegroom-2b">
            <h2 className="title-3">RESEPSI</h2>
            <h3>
              Sabtu, 13 Januari 2024
              <br />
              08:00 - Selesai WIB
              <br />
              Rumah Bapak Andy
              <br />
              Jl. Veteran No. 22
              <br />
              Cisereh, Kadu Jaya, Kec. Curug
              <br />
              Kabupaten Tangerang
              <br />
              Banten
            </h3>
            <button className="btn btn-success">Google Map</button>
          </div>
          <div className="bridegroom-2c">
            <h2 className="title-3">UNDUH MANTU</h2>
            <h3>
              Jumat, 14 Januari 2024
              <br />
              08:00 - Selesai WIB
              <br />
              Rumah Bapak Fikri
              <br />
              Jalan Raya Serang
              <br />
              Bitung, Kadu Jaya, Kec. Curug
              <br />
              Kabupaten Tangerang
              <br />
              Banten
            </h3>
            <button className="btn btn-success">Google Map</button>
          </div>
        </div>
      </section>

      <section className="gallery" id="gallery">
        <h1 className="title-2">
          GALLERY{' '}
          <span className="material-symbols-outlined">photo_camera</span>
        </h1>
      </section>

      <section className="gift" id="gift">
        <h1 className="title-2">
          GIFT{' '}
          <span className="material-symbols-outlined">
            featured_seasonal_and_gifts
          </span>
        </h1>

        <div className="gift-1">
          <div className="gift-1a">
            <h2 className="title-3">BCA</h2>
            <h3>
              Romeo Adam :<br />
              98981234
            </h3>
          </div>
          <div className="gift-1a">
            <h2 className="title-3">BSI</h2>
            <h3>
              Juliet Hawa :<br />
              98984321
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
