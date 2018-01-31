import React, { PureComponent } from 'react';
import styled from 'styled-components';
import withLayout from 'lib/withLayout';
import Link from 'components/Link';

const Container = styled.div`
  text-align: center;
`;

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
      <Container>
        <h1>Search your favorite TV shows</h1>
        <form>
          <input type="text" value={searchValue} onChange={this.updateSearchValue} />
          <Link href={`/shows?name=${searchValue}`}>
            <button>Search</button>
          </Link>
        </form>
      </Container>
    );
  }
}

export default withLayout(Index);
