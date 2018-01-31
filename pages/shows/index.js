import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Link from 'components/Link';
import withLayout from 'lib/withLayout';
import { capitalize } from 'lib/string';

const propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    summary: PropTypes.string,
    image: PropTypes.object,
  })),
  url: PropTypes.shape({
    query: PropTypes.object,
  }).isRequired,
};

const defaultProps = {
  shows: [],
};

const Index = ({ url, shows }) => (
  <Fragment>
    <h1>{capitalize(url.query.name)} TV Shows</h1>
    <ul>
      {shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/shows/${show.id}`} href={`/shows/show?id=${show.id}`}>
            {show.name}
          </Link>
        </li>
      ))}
    </ul>
  </Fragment>
);

Index.propTypes = propTypes;
Index.defaultProps = defaultProps;

Index.getInitialProps = async ({ query }) => {
  const {
    data,
  } = await axios.get(`https://api.tvmaze.com/search/shows?q=${query.name}`);

  return {
    shows: data,
  };
};

export default withLayout(Index);
