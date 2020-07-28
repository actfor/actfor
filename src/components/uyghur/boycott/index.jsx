import React, { Component } from 'react';

// semantic-ui
import {
    Container, Icon, Label, Menu, Table, Button
  } from 'semantic-ui-react';

class UyghurBoycott  extends Component {
  render() {
    // const color = site.variables.get(pageBackground);
    return (
        <Container style={{ fontSize: '20px'}}>
            
        <p class= "quote"> <i>  
            “The Chinese government has facilitated the mass transfer of Uyghur and other ethnic minority citizens from the far west region of Xinjiang to factories across the country. Under conditions that strongly suggest forced labour, Uyghurs are working in factories that are in the supply chains of at least 83 well-known global brands in the technology, clothing and automotive sectors, including Apple, BMW, Gap, Huawei, Nike, Samsung, Sony and Volkswagen.” <br></br>
         </i>
        <Button
                    primary
                    as='a' target="_blank"
                    href="https://www.aspi.org.au/report/uyghurs-sale"
                    content='Full ASPI report'
                    icon='external alternate'
                    labelPosition='left'
                />
        </p>
        <br></br>
        <p> <b>
            List of orgs to boycott:</b>
        </p>
        <Table celled color= "secondary">
            <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        <p>	Abercrombie & Fitch	</p>
                        <p>	Acer	</p>
                        <p>	Adidas	</p>
                        <p>	Alstom	</p>
                        <p>	Amazon	</p>
                        <p>	Apple	</p>
                        <p>	ASUS	</p>
                        <p>	BAIC Motor	</p>
                        <p>	BMW	</p>
                        <p>	Calvin Klein	</p>
                        <p>	Carter’s	</p>
                        <p>	Cisco	</p>
                        <p>	Fila	</p>
                        <p>	Gap	</p>
                        <p>	General Motors	</p>
                        
                    </Table.Cell>
                    <Table.Cell>
                        <p>	Google	</p>
                        <p>	H&M	</p>
                        <p>	HP	</p>
                        <p>	Huawei	</p>
                        <p>	Jaguar	</p>
                        <p>	L.L.Bean	</p>
                        <p>	Lacoste	</p>
                        <p>	Land Rover	</p>
                        <p>	Lenovo	</p>
                        <p>	LG	</p>
                        <p>	Mercedes-Benz	</p>
                        <p>	Microsoft	</p>
                        <p>	Mitsubishi	</p>
                        <p>	Nike	</p>
                        <p>	Nintendo	</p>
                    </Table.Cell>
                    <Table.Cell>
                        <p>	Nokia	</p>
                        <p>	The North Face	</p>
                        <p>	Oculus	</p>
                        <p>	Panasonic	</p>
                        <p>	Polo Ralph Lauren	</p>
                        <p>	Puma	</p>
                        <p>	Samsung	</p>
                        <p>	Skechers	</p>
                        <p>	Sony	</p>
                        <p>	Tommy Hilfiger	</p>
                        <p>	Toshiba	</p>
                        <p>	Uniqlo	</p>
                        <p>	Victoria’s Secret	</p>
                        <p>	Volkswagen	</p>
                        <p>	Zara	</p>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
        <br></br>
        <p style={{ fontSize: '18px'}}>
            Visit our Pressuring Brands tab to send a message to these companies urging them to terminate contracts with Xinjiang manufacturers benefitting from forced labor of Uyghur Muslims.
        </p>
      </Container>
    );
  }
}

export default UyghurBoycott ;