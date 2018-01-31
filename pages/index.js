import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Layout from 'components/Layout';
import Link from 'components/Common/Link';

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
      <Layout title="Search TV Shows">
        <Container>
          <h1>Search your favorite TV shows</h1>
          <form>
            <input type="text" value={searchValue} onChange={this.updateSearchValue} />
            <Link href={`/shows?name=${searchValue}`}>
              <button>Search</button>
            </Link>
          </form>
        </Container>
      </Layout>
    );
  }
}

export default Index;
