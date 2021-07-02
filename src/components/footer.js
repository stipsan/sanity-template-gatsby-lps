import React from 'react';

export default function Footer({company, address, phone}) {
    const year = new Date().getFullYear();
    return (
      <footer className="text-center text-gray-900 text-sm pb-12 pt-9">
        <p>&copy; { year } { company } { (address) ? `| ${address}`: '' }</p>
        <p>Call Us Today – { (phone) ? `${phone} |` : '' } Marketing by <a className="text-black font-semibold" href="https://rynoss.com" target="_blank">RYNO Strategic Solutions</a></p>
      </footer>
    );
}
