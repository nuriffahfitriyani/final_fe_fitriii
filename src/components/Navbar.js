import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-12 py-4 flex justify-between items-center">
      {/* Logo dan Teks */}
      <div className="flex items-center">
        <img
          src="/logo/logofitri.png"
          alt="logo"
          className="mr-2"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
          }}
        />
        <div className='ml-4'>
          <h1 className="font-bold text-2xl">Curiculum Vitae</h1>
          <p className="text-sm">Posted by Fitri</p>
        </div>
      </div>

      {/* Navbar Menu */}
      <div className="navbar-end flex items-center space-x-6 text-black font-semibold text-sm">
        
        <Link to="/" className="btn btn-outline text-black border-white">HOME</Link>
        <Link to="/AboutMe"className="btn btn-outline text-black border-white" >ABOUT ME</Link>
        <Link to="/Overview" className="btn btn-outline text-black border-white">OVERVIEW</Link>
        <Link to="/SkilldanPengalaman" className="btn btn-outline text-black border-white">SKILL & PENGALAMAN</Link>
        <Link to="/join" className="btn btn-outline text-black border-white">Join</Link>
 
      </div>
    </div>
  );
}

export default Navbar;
