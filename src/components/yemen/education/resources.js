import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IRC from './IRC.png'
import Iran from './Iran.png'
import Crisis from './Crisis.png'
import { Grid } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Resources extends Component {
  render() {
    return (
          <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
            <Card className='card1' style={{ width: '25rem' }}>
              <Card.Img variant="top" src={IRC} />
              <Card.Body>
                <Card.Title>The Yemeni Health Crisis</Card.Title>
                <Card.Text>
                  Despite being a completely treatable disease, thousands of people have died from the outbreak of
                  cholera unleashed in Yemen in 2017. The health care system has been decimated by years of unrelenting
                  war. Supplies and medical care are scarce as is the access to drinking water and sanitation.
                </Card.Text>
                <Button href='https://www.icrc.org/en/where-we-work/middle-east/yemen/health-crisis-yemen' variant="primary" target='_blank'>
                  Visit Site
                </Button>
              </Card.Body>
            </Card>
            </Grid.Column>

            <Grid.Column>
            <Card className='card2' style={{ width: '25rem' }}>
              <Card.Img variant="top" src={Iran} />
              <Card.Body>
                <Card.Title>Iran's Policy in Yemen</Card.Title>
                <Card.Text>
                  Iran's interests in Yemen are limited, while the constraints on its ability to project power in the country are unlikely to be lifted. Tehran saw with the rise of the Houthis a low cost opportunity to gain some leverage in Yemen. It is unwilling, however, to invest larger amounts of resources. There is, as a result, only limited potential for Iran to further penetrate Yemen.
                </Card.Text>
                <Button href='https://doi.org/10.1111/1468-2346.12599' variant="primary" target='_blank'>
                  Visit Site
                </Button>
              </Card.Body>
            </Card>
            </Grid.Column>

            <Grid.Column>
            <Card className='card3' style={{ width: '25rem' }}>
              <Card.Img variant="top" src={Crisis} />
              <Card.Body>
                <Card.Title>Humanitarian Crisis Explained</Card.Title>
                <Card.Text>
                  Yemen is experiencing what many describe as the worst humanitarian crisis on the planet — and it’s being made even worse by the coronavirus pandemic. Between the civil war, high rates of hunger and food insecurity, a cholera epidemic, and more, Yemen is in serious need of humanitarian aid from those who have the resources to help.
                </Card.Text>
                <Button href='https://www.greenmatters.com/p/yemen-humanitarian-crisis-how-to-help' variant="primary" target='_blank'>
                  Visit Site
                </Button>
              </Card.Body>
            </Card>
            </Grid.Column>

          </Grid.Row>
          </Grid>
    );
  }
}
