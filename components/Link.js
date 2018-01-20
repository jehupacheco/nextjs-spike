import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: blue;
  cursor: pointer;

  &:visited {
    color: purple;
  }
`;

const Link = ({ children, as: asUrl, href }) => (
  <NextLink as={asUrl} href={href}>
    <StyledLink>
      {children}
    </StyledLink>
  </NextLink>
);

Link.displayName = 'Link';

Link.propTypes = {
  className: PropTypes.string,
  as: PropTypes.string,
  href: PropTypes.string,
};

export default Link;
