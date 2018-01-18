import React from 'react';
import Header from 'components/Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const withLayout = (Component) => {
  const DecoratedComponent = (props) => (
    <div style={layoutStyle}>
      <Header />
      <Component {...props} />
    </div>
  );

  DecoratedComponent.getInitialProps = Component.getInitialProps;

  return DecoratedComponent;
}

export default withLayout;
