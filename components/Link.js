import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: blue;
  cursor: pointer;

  &:visited {
    color: green;
  }
`;

const Link = ({ children, as: asUrl, href }) => (
  <NextLink as={asUrl} href={href} passHref>
    <StyledLink>
      {children}
    </StyledLink>
  </NextLink>
);

Link.displayName = 'Link';

Link.propTypes = {
  children: PropTypes.node,
  as: PropTypes.string,
  href: PropTypes.string,
};

Link.defaultProps = {
  children: [],
  as: '',
  href: '',
};

export default Link;
