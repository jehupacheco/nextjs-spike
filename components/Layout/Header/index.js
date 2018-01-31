import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'components/Common/Link';
import styled from 'styled-components';
import Item from 'components/Layout/Header/Item';
import colors from 'utils/colors';

const Container = styled.div`
  align-items: center;
  background-color: ${colors.blue};
  display: flex;
  padding: 0 40px;
`;

const Logo = styled.img`
  height: auto;
  margin-right: 20px;
  width: 150px;
`;

const propTypes = {
  title: PropTypes.string.isRequired,
};

const Header = ({ title }) => (
  <Container>
    <Head>
      <title>{title}</title>
    </Head>
    <Logo src="/static/img/logo.png" alt="tvmaze" />
    <Link href="/" color={colors.white}>
      <Item>
        Home
      </Item>
    </Link>
    <Link href="/about" color={colors.white}>
      <Item>
        About
      </Item>
    </Link>
  </Container>
);

Header.propTypes = propTypes;

export default Header;
