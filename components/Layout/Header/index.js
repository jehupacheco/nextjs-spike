import React from 'react';
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

const Header = () => (
  <Container>
    <Link href="/">
      <Logo src="/static/img/logo.png" alt="tvmaze" />
    </Link>
    <Link href="/">
      <Item>
        Home
      </Item>
    </Link>
    <Link href="/about">
      <Item>
        About
      </Item>
    </Link>
  </Container>
);

export default Header;
