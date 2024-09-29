import React from 'react';
import { Link } from "react-router-dom";
import './SkilldanPengalaman.css';

const SkilldanPengalaman = () => {
  return (
    <main>
      <div className="custom-bg px-20 py-10">
        {/* Card untuk Skill dan Pengalaman */}
        <div className="card bg-color w-full shadow-xl custom-card3 mt-5 mb-5 p-10">
          
          {/* Tambahkan heading di dalam card */}
          <div className="text-center mb-8">
            <h1 className="font-bold text-2xl">Skill & Pengalaman</h1>
          </div>

          <div className="flex justify-between">
            {/* Bagian Skill */}
            <div className="w-1/2 mr-10">
              <h2 className="font-bold text-xl mb-4">Skill</h2>
              <p className="mb-2">Skill yang saya kuasai saat ini adalah:</p>
              
              <p>1. HTML</p>
              <div className="skill-bar w-full mb-4">
                <div className="skill-progress" style={{ width: '90%' }}></div>
              </div>

              <p>2. CSS</p>
              <div className="skill-bar w-full mb-4">
                <div className="skill-progress" style={{ width: '80%' }}></div>
              </div>

              <p>3. JavaScript</p>
              <div className="skill-bar w-full mb-4">
                <div className="skill-progress" style={{ width: '50%' }}></div>
              </div>
            </div>

            {/* Bagian Pengalaman */}
            <div className="w-1/2 mr-10">
              <h2 className="font-bold text-xl mb-4">Pengalaman</h2>
              <p>Pengalaman saya:</p>
              <ul className="list-disc pl-5">
                <li>Magang di sekolah</li>
                <li>Freelance di Nusantech</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SkilldanPengalaman;
