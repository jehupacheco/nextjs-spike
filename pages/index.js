import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Layout from 'components/Layout';
import Link from 'components/Common/Link';
import Button from 'components/Common/Button';
import Textfield from 'components/Form/Textfield';

const Container = styled.div`
  text-align: center;
`;

const Form = styled.form`
  align-items: stretch;
  display: flex;
`;

class Index extends PureComponent {
  state = {
    searchValue: '',
  };

  updateSearchValue = (e) => {
    this.setState({ searchValue: e.target.value });
  }

  validateSubmit = e => !this.state.searchValue && e.preventDefault();

  render() {
    const {
      searchValue,
    } = this.state;

    return (
      <Layout title="Search TV Shows">
        <Container>
          <h1>Search your favorite TV shows</h1>
          <Form onSubmit={this.validateSubmit}>
            <Textfield type="text" value={searchValue} onChange={this.updateSearchValue} rounded />
            <Link href={`/shows?name=${searchValue}`}>
              <Button type="submit">Search</Button>
            </Link>
          </Form>
        </Container>
      </Layout>
    );
  }
}

export default Index;
