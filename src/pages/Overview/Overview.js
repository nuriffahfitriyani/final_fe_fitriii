import React from'react';
import { Link } from "react-router-dom";
import './Overview.css';
const Overview = () => {
  return (
    <main>
    <div className="custom-bg px-20 py-10">

    <div className="card bg-color w-96 shadow-xl custom-card mt-5 mb-5">
  <div className="card-body">
    <h2 className="card-title font-bold text-4xl">OVERVIEW</h2>
    <p> 
       <br/><span className="custom-font-size custom-bold">HALO! Nama saya  Nur Iffah Fitriyani, sisiwi kelas 12 jurusan Rekayasa Perangkat Lunak(RPL) 
       / Pengembangan Perangkat Lunak dan Gim(PPLG) di SMK Muhammadiyah 04 Sukorejo. Saya memilih jurusan ini karena saya tertarik pada
       bagaimana teknologi dan perangkat lunak mampu mengubah dunia.
       <br/><br/> Saya mengambil jurusan RPL bukan hanya karena minat pada komputer, tetapi juga karena saya ingin belajar bagaimana aplikasi dan website dibangun
       dari awal hingga siap digunakan. Selain itu , saya juga menyukai tantangan yang diberikan oleh dunia pemrograman. Meskipun kadang menghadapi kesulitan,
       setiap tantangan yang berhasil diselesaikan memeberikan rasa puas tersendiri.
       <br/><br/> Selama belajar. saya sudah berkesempatan untuk mempelajari dasar-dasar pengembangan web seperti HTML dan CSS. Meskipun masih dalam tahap pemula,
       saya telah menyelesaikan beberapa project kecil, termasuk:
       <br/>
       <ul className="custom-list">
              <li>Portofolio Pribadi: yang dirancang menampilkan informasi dan keahlian saya.</li>
              <li>Website Toko Roti: untuk mendesain toko online sederhana.</li>
              <li>CV Multi Halaman: yang berisi detail tentang pengalaman dan kemampuan saya secara lebih terstruktur, dan masih ada lagi.</li>
       </ul>
       <br/> Dengan memilih RPL, saya berharap dapat menguasai lebih banyak teknologi baru dan mengembangkan solusi yang bermanfaat bagi banyak orak. Meski perjalanan
       belajar saya masih panjang , saya percaya bahwa setiap proyek yang saya selesaikan adalah langkah menuju pemahaman yang lebih dalam tentang dunia teknologi.
       <br/><br/> Terima kasih telah mengunjungi profil saya, dan saya berharap dapat terhubung dengan Anda untuk berbagau kesempatan dan kolaborasi di masa mendatang!
      </span>
    </p>

    <div className="card-actions justify-start">
      <button className="btn btn-primary">Hubungi Saya</button>
    </div>
  </div>
</div>
     
     </div>
    </main>
  );
};

export default Overview;