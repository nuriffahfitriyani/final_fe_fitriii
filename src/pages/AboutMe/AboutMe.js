import React from 'react';
import { Link } from "react-router-dom";
import './AboutMe.css';

const AboutMe = () => {
  return (
    <main>
      <div className="custom-bg px-20 py-10">
        <div className="card bg-color w-96 shadow-xl custom-card2 mt-5 mb-5">
          <div className="card-body">
            <h2 className="card-title font-bold text-4xl">BIODATA</h2>
            <br/>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse bg-white">
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Nama:</td>
                    <td className="border px-4 py-2">Nur Iffah Fitriyani</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Tanggal Lahir:</td>
                    <td className="border px-4 py-2">Kendal, 19 Oktober 2007</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Alamat:</td>
                    <td className="border px-4 py-2">Sukomangli, Patean</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Email:</td>
                    <td className="border px-4 py-2">nuriffahfitriyani@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">No.HP:</td>
                    <td className="border px-4 py-2">08xxxxxxxxx</td>
                  </tr>
                </tbody>
              </table>

            <br/><br/><br/>
            <h2 className="card-title font-bold text-4xl">RIWAYAT PENDIDIKAN</h2>
      
            <br/><br/>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse bg-white">
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-bold">TK:</td>
                    <td className="border px-4 py-2">TK Handayani</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">SD:</td>
                    <td className="border px-4 py-2">SDN Sukomangli</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">SMP:</td>
                    <td className="border px-4 py-2">SMPN 1 Pageruyung</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">SMK:</td>
                    <td className="border px-4 py-2">SMK Muhammadiyah 04 Sukorejo</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
      </div>
    </main>
  );
};

export default AboutMe;
