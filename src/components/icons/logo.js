import React from 'react';
import logo from 'assets/images/logo.png';

const LogoSvg = ({ white, ...props }) => {
  return (
    <Image src={logo} alt="zero2hero" />
  );
};

export default LogoSvg;
