import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import styled from 'styled-components';
import colors from 'utils/colors';

const StyledLink = styled.a`
  color: ${props => props.color};
  cursor: pointer;
  text-decoration: none;

  &:visited {
    color: ${props => props.color};
  }
`;

const Link = ({
  children,
  color,
  as: asUrl,
  href,
}) => (
  <NextLink as={asUrl} href={href} passHref>
    <StyledLink color={color}>
      {children}
    </StyledLink>
  </NextLink>
);

Link.displayName = 'Link';

Link.propTypes = {
  children: PropTypes.node,
  as: PropTypes.string,
  href: PropTypes.string,
  color: PropTypes.string,
};

Link.defaultProps = {
  children: [],
  as: '',
  href: '',
  color: colors.blue,
};

export default Link;
