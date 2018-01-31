import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';
import Header from 'components/Layout/Header';
import globalStyles from 'utils/global';

const Body = styled.div`
  padding: 40px;
`;

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  title: 'NextJS App',
};

const Layout = ({ title, children }) => {
  Router.onRouteChangeStart = () => NProgress.start();
  Router.onRouteChangeComplete = () => NProgress.done();
  Router.onRouteChangeError = () => NProgress.done();

  return (
    <Fragment>
      <Header title={title} />
      <Body>
        {children}
      </Body>
      <style jsx global>{globalStyles}</style>
    </Fragment>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
