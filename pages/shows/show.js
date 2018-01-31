import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Parser } from 'html-to-react';
import Layout from 'components/Layout';

const propTypes = {
  show: PropTypes.shape({
    name: PropTypes.string,
    summary: PropTypes.string,
    image: PropTypes.object,
  }),
};

const defaultProps = {
  show: {},
};

const htmlToReact = new Parser();

const Post = ({ show }) => (
  <Layout title={show.name}>
    <h1>{show.name}</h1>
    {htmlToReact.parse(show.summary)}
    <img src={show.image.medium} alt={show.name} />
  </Layout>
);

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;

Post.getInitialProps = async ({ query }) => {
  const {
    data: show,
  } = await axios.get(`https://api.tvmaze.com/shows/${query.id}`);

  return { show };
};

export default Post;
