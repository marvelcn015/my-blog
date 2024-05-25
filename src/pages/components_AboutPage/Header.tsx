import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <header>
    <h1 className="text-center mb-4">{title}</h1>
  </header>
);

export default Header;