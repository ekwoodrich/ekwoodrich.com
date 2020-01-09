import React from 'react';

function Footer(props) {
  return (
    <div className="footer">
      <div className="footerText">
        This site was implemented using React and plain CSS.
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
