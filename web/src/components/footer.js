import React from 'react';

export default function Footer({ company, address, phone }) {
  const year = new Date().getFullYear();
  const phoneLink = <a href={`tel:${phone}`}>{phone}</a>;
  return (
    <footer className="text-center text-gray-alt text-sm pb-12 pt-6">
      <p>
        &copy; {year} {company} {address ? `| ${address}` : ''}
      </p>
      <p>
         {phone ? ['Call Us Today – ', phoneLink, ' |'] : ''} Marketing by{' '}
        <a
          className="font-bold"
          href="https://rynoss.com"
          target="_blank"
          rel="noreferrer"
        >
          RYNO Strategic Solutions
        </a>
      </p>
    </footer>
  );
}
