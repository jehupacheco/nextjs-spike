import React, { Fragment } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';
import Header from 'components/Header';
import globalStyles from 'utils/global';

const Body = styled.div`
  padding: 40px;
`;

const withLayout = (Component) => {
  Router.onRouteChangeStart = () => NProgress.start();
  Router.onRouteChangeComplete = () => NProgress.done();
  Router.onRouteChangeError = () => NProgress.done();

  const DecoratedComponent = props => (
    <Fragment>
      <Header />
      <Body>
        <Component {...props} />
      </Body>
      <style jsx global>{globalStyles}</style>
    </Fragment>
  );

  DecoratedComponent.getInitialProps = Component.getInitialProps;

  return DecoratedComponent;
};

export default withLayout;
