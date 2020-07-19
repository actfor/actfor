import React, { Component } from 'react';

// semantic-ui
import {
  Accordion,
  Divider,
  Icon,
  List,
} from 'semantic-ui-react';

class ElectionsInfo extends Component {
  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon style={{ }} name='dropdown' />
          <h2 style={{ display: 'inline' }}>National Election</h2>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            The U.S. is Saudi Arabia’s largest weapons supplier.
            In 2019, the Trump administration declared an emergency
            over Iran, bypassed Congress, and moved forward with an $8
            billion arms sale to Saudi Arabia and other Gulf nations.
            As recently as 5/20, the Trump administration <a target='blank' href='https://www.cnn.com/2020/05/27/opinions/pompeo-saudi-arabia-arms-menendez/index.html'> moved to
            increase weapons sales</a> to Saudi Arabia. (<a target='blank' href='https://www.nytimes.com/2020/05/28/us/politics/congress-saudi-arabia-arms-sales.html'>Edmondson, 2020</a>).
            In 2019, the president vetoed bipartisan legislation that
            would have ended the U.S.’s military involvement in Saudi
            Arabia’s war in Yemen.
          </p>

          <p>
            <a target='blank' href='https://joebiden.com'>Joe Biden</a> <a target='blank' href='https://www.cfr.org/article/presidential-candidates-saudi-arabia'> would end U.S. support for the Saudi-led war</a> in
            yemen and order a reassessment of our relationship with Saudi
            Arabia.
          </p>

        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <h2 style={{ display: 'inline' }}>Comptetitive Congressional Elections</h2>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            Congressional sentiment in both parties toward Saudi Arabia
            has soured further since the assassination of Jamal Khassoggi.
            Members have repeatedly objected to the United States
            continuing to supply Riyadh with weapons it has used in
            strikes on civilians in the war in Yemen. Competitiveness of
            races taken from
            <a target="_blank" href="https://cookpolitical.com/ratings"> The Cook Political Report</a>.
          </p>

          <p>
            <List bulleted>
              <List.Item>“Maybe Competitive” races: aren’t considered competitive but have the potential to become engaged</List.Item>
              <List.Item>“Somewhat Competitive” races: competitive but one party (highlighted blue or red) has an advantage</List.Item>
              <List.Item>“Most Competitive” races: most competitive and either party has a good chance of winning</List.Item>
            </List>
          </p>

          <p>&nbsp;</p>

          <p>
            <b>Highlight</b>
          </p>


          <p>
            Senator Mitch McConnell: Amy McGrath is Mitch McConnell’s
            Democratic opponent. She believes in congressional prerogative
            on the use of force. Mitch McConnell has allowed the expansion
            of presidential orders on matters of war. Thus, it’s vital
            that we organize behind Amy McGrath who
            <a target="blank" href="https://amymcgrath.com/issues/foreign-policy-national-security/"> demands that all major military actions </a>
            be approved by Congress, thus, ensuring that
            measures to end the U.S.’s military presence in Yemen will be
            the final dictate of US policy.
          </p>

          <p>**Note: Charles Booker is the stronger, more progressive, ideal candidate. He advocates for Black and Brown communities and is a champion of the Green New Deal, criminal justice reform, medicare for all and other important policies. Booker was narrowly defeated by McGrath who had the financial backing of establishment Democrats. It’s important to recognize that McGrath’s platform is weak but we must organize behind her so that Mitch McConnell is no longer the Senate leader and can no longer block important legislation from being voted on.</p>
        </Accordion.Content>


        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <h2 style={{ display: 'inline' }}>Support for H.J.Res. 37 </h2>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            <b>These legislators <a style={{color: 'green'}} target='blank' href='https://www.cbo.gov/publication/54966'> voted for H.J.Res. 37 </a> directing the removal of US Armed Forces from hostilities in the Republic of Yemen that have not been authorized by Congress.</b>
          </p>

          <p>
            <table class="ui celled table">
                <thead>
                  <tr><th>Competitive</th>
                  <th>Somewhat Competitive</th>
                </tr></thead>
                <tbody>
                  <tr>
                    <td data-label="Competitive"><b>Congress</b></td>
                  </tr>
                  <tr>
                    <td style={{color:'blue'}} data-label="Competitive">CA-21 Cox</td>
                    <td style={{color:'blue'}} data-label="Somewhat Competitive">AZ-01 O'Halleran</td>
                  </tr>
                  <tr>
                    <td style={{color:'blue'}} data-label="Competitive">GA-06 McBath</td>
                    <td style={{color:'blue'}} data-label="Somewhat Competitive">CA-39 Cisneros</td>
                  </tr>
                  <tr>
                    <td style={{color:'blue'}} data-label="Competitive">IA-01 Finkenauer</td>
                    <td style={{color:'blue'}} data-label="Somewhat Competitive">CA-48 Rouda </td>
                  </tr>
                  <tr>
                    <td style={{color:'blue'}} data-label="Competitive">IA-03 Axne</td>
                    <td style={{color:'blue'}} data-label="Somewhat Competitive">FL-26 Mucarsel-Powell </td>
                  </tr>
                  <tr>
                    <td style={{color:'blue'}} data-label="Competitive">ME-02 Golden</td>
                    <td style={{color:'blue'}} data-label="Somewhat Competitive">IL-14 Underwood </td>
                  </tr>
                  <tr>
                    <td style={{color:'blue'}} data-label="Competitive">MN-07 Peterson</td>
                    <td style={{color:'blue'}} data-label="Somewhat Competitive">KS-03 Davids</td>
                  </tr>
                  <tr>
                    <td style={{color:'blue'}} data-label="Competitive">NM-02 Torres Small</td>
                    <td style={{color:'blue'}} data-label="Somewhat Competitive">MI-11 Stevens</td>
                  </tr>
                  <tr>
                    <td style={{color:'blue'}} data-label="Competitive">NY-11 Rose</td>
                    <td style={{color:'blue'}} data-label="Somewhat Competitive">MN-02 Craig</td>
                  </tr>
                  <tr>
                    <td style={{color:'blue'}} data-label="Competitive">NY-22 Brindisi</td>
                    <td style={{color:'blue'}} data-label="Somewhat Competitive">NH-01 Pappas</td>
                  </tr>
                  <tr>
                    <td style={{color:'blue'}} data-label="Competitive">OK-05 Horn</td>
                    <td style={{color:'blue'}} data-label="Somewhat Competitive">NJ-07 Malinowski</td>
                  </tr>
                  <tr>
                    <td style={{color:'blue'}} data-label="Competitive">PA-08 Cartwright</td>
                    <td style={{color:'blue'}} data-label="Somewhat Competitive">NV-03 Lee</td>
                  </tr>
                  <tr>
                    <td style={{color:'blue'}} data-label="Competitive">SC-01 Cunningham</td>
                    <td style={{color:'blue'}} data-label="Somewhat Competitive">NY-19 Delgado</td>
                  </tr>
                  <tr>
                    <td style={{color:'blue'}} data-label="Competitive">VA-02 Luria</td>
                    <td style={{color:'blue'}} data-label="Somewhat Competitive">PA-07 Wild</td>
                  </tr>
                  <tr>
                    <td style={{color:'blue'}} data-label="Competitive">VA-07 Spanberger</td>
                    <td style={{color:'blue'}} data-label="Somewhat Competitive">TX-07 Fletcher</td>
                  </tr>
                  <tr>
                    <td style={{color:'blue'}} data-label="Competitive"></td>
                    <td style={{color:'red'}} data-label="Somewhat Competitive">UT-04 McAdams</td>
                  </tr>
                  <tr>
                    <td style={{color:'blue'}} data-label="Competitive"></td>
                    <td style={{color:'red'}} data-label="Somewhat Competitive">AZ-06 Schweikert</td>
                  </tr>
                  <tr>
                    <td data-label="Competitive"><b>Senate</b></td>
                  </tr>
                  <tr>
                    <td style={{color:'blue'}} data-label="Competitive">ME-Collins</td>
                    <td style={{color:'red'}} data-label="Somewhat Competitive">MI-Peters</td>
                  </tr>
                  <tr>
                    <td style={{color:'blue'}} data-label="Competitive">MT-Daines</td>
                    <td style={{color:'red'}} data-label="Somewhat Competitive"></td>
                  </tr>
                </tbody>
              </table>
          </p>

          <p>&nbsp;</p>

          <p>
            <b>These legislators <a style={{color:'red'}} target='blank' href='https://www.cbo.gov/publication/54966'> voted against for H.J.Res. 37 </a> </b>
          </p>

          <p>
            <table class="ui celled table">
                <thead>
                  <tr><th>Competitive</th>
                  <th>Somewhat Competitive</th>
                  <th>Maybe Will Be Competitive</th>
                </tr></thead>
                <tbody>
                  <tr>
                    <td data-label="Competitive"><b>Congress</b></td>
                  </tr>
                  <tr>
                    <td style={{color:'red'}} data-label="Competitive">CA-25 Garcia</td>
                    <td style={{color:'red'}} data-label="Somewhat Competitive">FL-15 Spano</td>
                    <td style={{color:'red'}} data-label="Maybe Will Be Competitive"></td>
                  </tr>
                  <tr>
                    <td style={{color:'red'}} data-label="Competitive">IL-13 Davis</td>
                    <td style={{color:'red'}} data-label="Somewhat Competitive">MO-02 Wagner</td>
                    <td style={{color:'red'}} data-label="Maybe Will Be Competitive"></td>
                  </tr>
                  <tr>
                    <td style={{color:'red'}} data-label="Competitive">PA-10 Perry</td>
                    <td style={{color:'red'}} data-label="Somewhat Competitive">NE-02 Bacon</td>
                    <td style={{color:'red'}} data-label="Maybe Will Be Competitive"></td>
                  </tr>
                  <tr>
                    <td style={{color:'red'}} data-label="Competitive"></td>
                    <td style={{color:'red'}} data-label="Somewhat Competitive">NJ-02 Van Drew</td>
                    <td style={{color:'red'}} data-label="Maybe Will Be Competitive"></td>
                  </tr>
                  <tr>
                    <td style={{color:'red'}} data-label="Competitive"></td>
                    <td style={{color:'red'}} data-label="Somewhat Competitive">NY-24 Katko</td>
                    <td style={{color:'red'}} data-label="Maybe Will Be Competitive"></td>
                  </tr>
                  <tr>
                    <td style={{color:'red'}} data-label="Competitive"></td>
                    <td style={{color:'red'}} data-label="Somewhat Competitive">OH-01 Chabot</td>
                    <td style={{color:'red'}} data-label="Maybe Will Be Competitive"></td>
                  </tr>
                  <tr>
                    <td style={{color:'red'}} data-label="Competitive"></td>
                    <td style={{color:'red'}} data-label="Somewhat Competitive">PA-01 Fitzpatrick</td>
                    <td style={{color:'red'}} data-label="Maybe Will Be Competitive"></td>
                  </tr>
                  <tr>
                    <td style={{color:'red'}} data-label="Competitive"></td>
                    <td style={{color:'red'}} data-label="Somewhat Competitive">TX-10 McCaul</td>
                    <td style={{color:'red'}} data-label="Maybe Will Be Competitive"></td>
                  </tr>
                  <tr>
                    <td style={{color:'red'}} data-label="Competitive"></td>
                    <td style={{color:'red'}} data-label="Somewhat Competitive">TX-21 Roy</td>
                    <td style={{color:'red'}} data-label="Maybe Will Be Competitive"></td>
                  </tr>
                  <tr>
                    <td style={{color:'red'}} data-label="Competitive"></td>
                    <td style={{color:'blue'}} data-label="Somewhat Competitive">TX-32 Allred *No Vote</td>
                    <td style={{color:'red'}} data-label="Maybe Will Be Competitive"></td>
                  </tr>
                  <tr>
                    <td data-label="Competitive"><b>Senate</b></td>
                  </tr>
                  <tr>
                    <td style={{color:'red'}} data-label="Competitive">CO-Gardner</td>
                    <td style={{color:'red'}} data-label="Somewhat Competitive">GA-Perdue</td>
                    <td style={{color:'red'}} data-label="Maybe Will Be Competitive">KY-McConnell</td>
                  </tr>
                  <tr>
                    <td style={{color:'red'}} data-label="Competitive">NC-Tillis *no vote</td>
                    <td style={{color:'red'}} data-label="Somewhat Competitive">IA-Ernst</td>
                    <td style={{color:'red'}} data-label="Maybe Will Be Competitive">SC-Graham *no vote</td>
                  </tr>
                  <tr>
                    <td style={{color:'red'}} data-label="Competitive"></td>
                    <td style={{color:'red'}} data-label="Somewhat Competitive"></td>
                    <td style={{color:'red'}} data-label="Maybe Will Be Competitive">TX-Cornyn</td>
                  </tr>
                </tbody>
              </table>
          </p>

          <p>&nbsp;</p>

          <p>
            <b>Open Seats</b>
              <table class="ui celled table">
                  <thead>
                    <tr><th>Senate</th>
                    <th>Congress</th>
                  </tr></thead>
                  <tbody>
                    <tr>
                      <td style={{color:'blue'}} data-label="Senate"><b>NM-Open</b></td>
                      <td style={{color:'red'}} data-label="Congress"><b>TX-23 Open</b></td>
                    </tr>
                    <tr>
                      <td style={{color:'blue'}} data-label="Senate"><b>KS-Open</b></td>
                      <td style={{color:'red'}} data-label="Congress"><b>NY-02 Open</b></td>
                    </tr>
                    <tr>
                      <td style={{color:'blue'}} data-label="Senate"><b></b></td>
                      <td style={{color:'red'}} data-label="Congress"><b>MT-AL Open</b></td>
                    </tr>
                    <tr>
                      <td style={{color:'blue'}} data-label="Senate"><b></b></td>
                      <td style={{color:'red'}} data-label="Congress"><b>IN-05 Open</b></td>
                    </tr>
                    <tr>
                      <td style={{color:'blue'}} data-label="Senate"><b></b></td>
                      <td style={{color:'gold'}} data-label="Congress"><b>MI-03 Open</b></td>
                    </tr>
                    <tr>
                      <td style={{color:'blue'}} data-label="Senate"><b></b></td>
                      <td style={{color:'red'}} data-label="Congress"><b>VA-05 Open</b></td>
                    </tr>
                    <tr>
                      <td style={{color:'blue'}} data-label="Senate"><b></b></td>
                      <td style={{color:'blue'}} data-label="Congress"><b>IA-02 Open</b></td>
                    </tr>
                    <tr>
                      <td style={{color:'blue'}} data-label="Senate"><b></b></td>
                      <td style={{color:'red'}} data-label="Congress"><b>TX-22 Open</b></td>
                    </tr>
                    <tr>
                      <td style={{color:'blue'}} data-label="Senate"><b></b></td>
                      <td style={{color:'red'}} data-label="Congress"><b>TX-24 Open</b></td>
                    </tr>
                    <tr>
                      <td style={{color:'blue'}} data-label="Senate"><b></b></td>
                      <td style={{color:'red'}} data-label="Congress"><b>GA-07 Open</b></td>
                    </tr>
                  </tbody>
                </table>
          </p>

        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <h2 style={{ display: 'inline' }}>Champions</h2>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <b>Representatives</b>
            <List bulleted>
              <List.Item>Representative Eliot L. Engel of New York, the chairman of the Foreign Affairs Committee: “I have strong concerns about sending weapons to Saudi Arabia that could be used to kill civilians in Yemen or perpetrate human rights abuses, and I’ve tried to block those sales from going forward,”</List.Item>
              <List.Item>Representative Ro Khanna, California: <a target='blank' href='https://www.govtrack.us/congress/bills/116/sjres7/summary'>co-sponsored H.J.Res.37</a> that would have ended U.S.’s military involvement in Yemen</List.Item>
            </List>

          <b>Senators</b>
            <List bulleted>
              <List.Item>Senator Christopher S. Murphy, of Connecticut: “I don’t think we should ever sell arms to a dangerous country because it creates jobs,” Mr. Murphy said, but “this frankly robs the president of one of his primary arguments for why these sales are so necessary...If they’re going to kill civilians, further destabilize the Middle East, and it’s not going to create jobs, then what the hell is the point?”</List.Item>
              <List.Item>Senator Tim Kaine, Virginia: advocate for congressional prerogative on matters of war and warned of Trump favoritism toward Saudi Arabia</List.Item>
              <List.Item>Senator Bernie Sanders, Vermont</List.Item>
            </List>

        </Accordion.Content>
      </Accordion>
    );
  }
}

export default ElectionsInfo;
