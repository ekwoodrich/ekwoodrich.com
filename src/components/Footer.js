import React from 'react';

function Footer(props) {
  return (
    <div className="footer">
      <div className="footerText">
        This site was implemented using React + plain CSS + react-snap (to
        generate static site).
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
