import React, { Component } from 'react';

// semantic-ui
import {
  Container,
  Icon,
  Table,
  Header,
} from 'semantic-ui-react';

class DirectoryPage extends Component {
  render() {
    const { pages } = this.props;

    return (
      <Container style={{ fontSize: '20px' }}>
        <Header as="h4">
          You can locate the resources described in this table at the navigation bar on the top of the page.
        </Header>
        <Table stackable celled padded>
          {/* Header */}
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Page</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {/* Rows */}
          <Table.Body>

            {pages.map(page => (
              <Table.Row>
                <Table.Cell singleLine>
                  <Icon name={page.icon} />
                  <b>{page.title}</b> 
                </Table.Cell>
                <Table.Cell>
                  {page.description}
                </Table.Cell>
              </Table.Row>
            ))}

          </Table.Body>

        </Table>
      </Container>
    );
  }
}

export default DirectoryPage;