import React, { Component } from 'react';

// semantic-ui
import {
  Container,
  Icon,
  Table,
} from 'semantic-ui-react';

class DirectoryPage extends Component {
  render() {
    const { pages } = this.props;

    return (
      <Container style={{ fontSize: '20px' }}>
        <Table celled padded>
          {/* Header */}
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Page</Table.HeaderCell>
              <Table.HeaderCell>Button</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {/* Rows */}
          <Table.Body>

            {pages.map(page => (
              <Table.Row>
                <Table.Cell singleLine>
                  <b>{page.title}</b>
                </Table.Cell>
                <Table.Cell textAlign="center">
                  <Icon name={page.icon} size="huge"/>
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