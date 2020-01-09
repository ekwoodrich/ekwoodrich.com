import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

function LinkButton({ children, url }) {
  return (
    <a class="linkButton" href={url}>
      {children}
    </a>
  );
}

export default LinkButton;
