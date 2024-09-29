import React from'react';
import { Link } from "react-router-dom";
import './Home.css';
const Home = () => {
  return (
    <main>
    <div className="custom-bg px-20 py-10">

    <div className="card card-side bg-color shadow-xl w-full max-w-screen-lg mx-auto items-start mt-3 mb-3">
  <figure className="ml-auto">
    <img
      src="photo/profile.jpg"
      alt="Profile" 
      style={{ width: '480px', height: '345px' }}
      />
  </figure>
  <div className="card-body">
    <h2 className="font-bold text-4xl">SAYA, NUR IFFAH FITRIYANI</h2>
    
    <p><span className="custom-font-size custom-bold">Siswi kelas 12 di SMK MUHAMMADIYAH 04 SUKOREJO, dari jurusan Rekayasa Perangkat
      <br/> Lunak(RPL) atau Pengembangan Perangkat Lunak dan Gim(PPLG).
      <br/><br/> Saya sedikit memahami tentang HTML dan CSS, dengan dasar pengetahuan JavaScript.
      <br/> Saya memilih jurusan RPL, karena berkeinginan untuk memperdalam keahlian dalam pengembangan web
            dan belajar lebih lanjut tentang pemrograman.
      </span>
    </p>
    <br/>
    <div className="card-actions justify-start">
      <button className="btn btn-primary">Berikutnya</button>
    </div>
    
  </div>
</div> 

     </div>
    </main>
  );
};

export default Home;