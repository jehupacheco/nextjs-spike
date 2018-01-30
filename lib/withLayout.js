import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Header from 'components/Header';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #DDD;
`;

const withLayout = (Component) => {
  const DecoratedComponent = props => (
    <Layout>
      <Header />
      <Component {...props} />
    </Layout>
  );

  DecoratedComponent.getInitialProps = Component.getInitialProps;

  return DecoratedComponent;
};

export default withLayout;
