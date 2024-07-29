import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Header.css';

const Header = () => {
  return (
<nav className="flex justify-between items-center p-2 shadow text-black">
<div className="first-nav flex-grow text-center gap- ml-96">
  <span className="m-2">Product</span>
  <span className="m-2">Pricing</span>
  <span className="m-2">Customers</span>
  <Button variant="outlined" className="mr-2 primary" color="primary">Talk to Lawyer/CA</Button>
  <span className=" text-black py-2 px-4 rounded">Login/Sign Up</span>
  <Button variant="contained" color="primary">
  Lawyer/CA click here
</Button>
</div>
</nav>
  );
};

export default Header;
