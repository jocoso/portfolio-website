import React from 'react';

const randomWord = require('random-words');

function Footer(props) {
  return (
    <footer>
      <div className="text-align-center">
        Joshua Collado <br />
        Powered by the concept of {randomWord()}
      </div>
    </footer>
  );
}

export default Footer;