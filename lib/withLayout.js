import React, { Fragment } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';
import Header from 'components/Header';
import fonts from 'utils/fonts';

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
    <Fragment>
      <Layout>
        <Header />
        <Component {...props} />
      </Layout>
      <style jsx global>{`
        ${fonts}

        body {
          font-family: Ubuntu;
        }
      `}
      </style>
    </Fragment>
  );

  DecoratedComponent.getInitialProps = Component.getInitialProps;

  return DecoratedComponent;
};

export default withLayout;
