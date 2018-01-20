import React from 'react';
import Link from 'components/Link';

const Header = () => (
  <div>
    <Link href="/">
      Home
    </Link>
    <Link href="/about">
      About
    </Link>
  </div>
);

export default Header;
