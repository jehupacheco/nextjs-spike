import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Link from 'next/link';
import withLayout from 'lib/withLayout';

const propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    summary: PropTypes.string,
    image: PropTypes.object,
  })),
};

const defaultProps = {
  shows: [],
};

const Index = ({ shows }) => (
  <Fragment>
    <h1>Batman TV Shows</h1>
    <ul>
      {shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Fragment>
);

Index.propTypes = propTypes;
Index.defaultProps = defaultProps;

Index.getInitialProps = async () => {
  const {
    data,
  } = await axios.get('https://api.tvmaze.com/search/shows?q=batman');

  return {
    shows: data,
  };
};

export default withLayout(Index);
