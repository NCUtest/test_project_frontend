import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand px-lg-4" href="https://intpn.csrsr.ncu.edu.tw">
          <i className="fas fa-home"></i> 國產署- 航空照片影像判釋
        </a>
        <a className="text-dark" href="admin_login.php">
          <i className="fas fa-cog"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

