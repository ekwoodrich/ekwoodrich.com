import React from 'react';

function Footer(props) {
  return (
    <div className="footer">
      <div className="footerText">
        Implemented using React + plain CSS + react-snap
      </div>
      <div>
        <a
          className="footerLink"
          href="https://github.com/ekwoodrich/ekwoodrich.com"
        >
          Source Code
        </a>
      </div>
    </div>
  );
}

export default Footer;
