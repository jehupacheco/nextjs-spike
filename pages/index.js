import React, { PureComponent, Fragment } from 'react';
import withLayout from 'lib/withLayout';
import Link from 'components/Link';

class Index extends PureComponent {
  state = {
    searchValue: '',
  };

  updateSearchValue = (e) => {
    this.setState({ searchValue: e.target.value });
  }

  render() {
    const {
      searchValue,
    } = this.state;

    return (
      <Fragment>
        <h1>Seach your favorite TV Show</h1>
        <form>
          <input type="text" value={searchValue} onChange={this.updateSearchValue} />
          <Link href={`/shows?name=${searchValue}`}>
            <button>Search</button>
          </Link>
        </form>
      </Fragment>
    );
  }
}

export default withLayout(Index);
