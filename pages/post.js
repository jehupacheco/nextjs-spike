import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import withLayout from 'lib/withLayout';

const propTypes = {
  show: PropTypes.object,
};

const defaultProps = {
  show: {},
};

const Post = ({ show }) => (
  <Fragment>
    <h1>{show.name}</h1>
    <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={show.image.medium} alt={show.name} />
  </Fragment>
);

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;

Post.getInitialProps = async ({ query }) => {
  const {
    data: show,
  } = await axios.get(`https://api.tvmaze.com/shows/${query.id}`);

  return { show };
};

export default withLayout(Post);
