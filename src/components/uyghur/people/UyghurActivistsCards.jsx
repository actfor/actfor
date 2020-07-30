import React, { Component } from 'react';

import {
  Card,
  Divider,
  Image,
} from 'semantic-ui-react';

class UyghurActivistsCards extends Component {
  render() {

    const cards = [
      {
        header: 'Rebiya Kadeer',
        content: (
          <div>
            <p>
              Rebiya Kadeer, a former president of the <a href="http://www.uyghurcongress.org/en/" target="_blank">World Uyghur Congress</a>, is a prominent Uyghur political leader and human rights advocate. After denouncing the state oppression of Uyghurs in 1999, she was charged with “providing secret information to foreigners” and sentenced to eight years in prison. She was incarcerated for more than five years, with two of those years in solitary confinement, before finally being released and fleeing to the US. She was awarded the Rafto Prize in 2004 for her outstanding work in pursuing human rights for her people and has authored a <a href="https://www.amazon.com/Dragon-Fighter-Womans-Struggle-Peace/dp/0979845653" target="_blank">book</a> detailing her struggle.
            </p>
          </div>
        ),
      },
      {
        header: 'Ilham Tohti',
        content: (
          <div>
            <p>
              Ilham Tohti served as an economics professor at the Minzu University of China and has been recognized internationally for his staunch opposition to violence and his support of Uyghur-Han dialogue. He has been awarded the PEN/Barbey Freedom to Write Award, the Martin Ennals Award for Human Rights Defenders, and the Sakharov Prize for Freedom of Thought.           
            </p>
            <p>
              In 2014, Tohti’s home was raided and he was detained. During his detention, he was denied access to lawyers, family, or adequate food or water. Eventually, he was sentenced to life in prison for allegedly advocating separatism. This sentence has been denounced internationally, including by Amnesty International, the US, the UK, and the EU.            
            </p>
          </div>
        ),
      },
      {
        header: 'Nury Turkel',
        content: (
          <div>
            <p>
              Nury Turkel is an Uyghur lawyer and activist that is currently serving as the commissioner for the US Commission on International Religious Freedoms. Born in a re-education camp at the height of the cultural revolution, Turkel came to the US as a student in 1995. Before his appointment as commissioner, he helped co-found the Uyghur Human Rights Project in 2003. With many policy-oriented commentaries in publications such as The Wall Street Journal, The Independent, and Foreign Policy, Turkel’s has served as an outspoken advocate for Uyghur rights and his recommendations have been incorporated into pending bills in Congress.            
            </p>
          </div>
        ),
      },
    ]

    return (
      <div>
        <Card.Group stackable>
          {
            cards.map(card => (
              <Card color="secondary">
                {card.image && <Image src={card.image} wrapped />}
                <Card.Content>
                  <Card.Header>{card.header}</Card.Header>
                  <Divider />
                  <Card.Description>
                    {card.content}
                  </Card.Description>
                </Card.Content>
              </Card>
            ))
          }
        </Card.Group>
      </div>
    );
  }
}

export default UyghurActivistsCards;