import React from 'react';
import Link from 'components/Link';
import styled from 'styled-components';
import Item from 'components/Header/Item';
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

export default Header;
