import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-4 mt-8 w-full">  
      <div className="container mx-auto text-center">
        
        <div className="mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:underline"
          >
            Instagram
          </a>
        </div>

       
        <p className="text-sm">
          © 2024 Recipe Finder. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
