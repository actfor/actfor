import React, { Component } from 'react';

import {
  Card,
  Divider,
} from 'semantic-ui-react';

class ActivistsCards extends Component {
  render() {

    const cards = [
      {
        header: 'Abdulrasheed Alfaqih',
        content: (
          <div>
            <p>
              Abdulrasheed Alfaqih is the executive director of the <a href="https://mwatana.org/en/about/" target="_blank">Mwatana Organization for Human Rights</a>. Alfaqih has also written extensively on Yemen for <a href="https://www.justsecurity.org/author/alfaqihabdulrasheed/" target="_blank">Just Security</a> and <a href="https://foreignpolicy.com/author/abdulrasheed-alfaqih/" target="_blank">Foreign Policy Magazine</a>, In an interview with <a href="https://www.usatoday.com/story/news/world/2018/11/29/jamal-khashoggi-yemen-war-human-rights-saudi-arabia-united-states-congress-trump-administration/2131388002/" target="_blank">USA Today</a> on the murder of Jamal Kashoggi, Alfaqih strikingly said, “All Yemenis are like Khashoggi...but without the Washington Post” to expose and broadcast their fate.”
            </p>
            <p>
              In 2016, Alfaqih was <a href="https://www.frontlinedefenders.org/en/case/case-history-abdulrasheed-al-faqih" target="_blank">interrogated</a> by the Houthi militia at the Sana’a International Airport, and in 2018, Alfaqih was <a href="https://www.hrw.org/sites/default/files/supporting_resources/joint_civilsociety_statement_mwatana_two.pdf" target="_blank">detained</a> by the Saudi led-coalition at the Seiyun City Airport for at least 12 hours.
            </p>
          </div>
        ),
      },
      {
        header: 'Muna Luqman',
        content: (
          <div>
            <p>
              Muna Luqman is a co-founder of the Women’s Solidarity Network, chairperson of Food4Humanity, and a member of the Women’s Alliance for Security Leadership. A former resident of Taiz, Luqman witnessed the destruction of her home by a Saudi-coalition airstrike and suffered from the Houthi siege on her provisions.
            </p>
            <p>
              Muna Luqman advocates for the involvement of women in peace talks between the warring parties in Yemen, as Houthi and pro-Hadi women have been able to foster dialogue more than their male counterparts. According to Luqman, women are also adept at accessing remote areas and understanding local communities within Yemen.
            </p>
            <p>
              <ul>
                <li>
                  <a href="https://peacetrack.files.wordpress.com/2019/04/muna-luqman-unsc-statement-final-15-april-2019.pdf" target="_blank">Briefing to the UN Security Council on Yemen in 2019</a>
                </li>
                <li>
                  <a href="https://icanpeacework.org/2019/03/18/peace-heroes-muna-luqman-and-the-role-of-women-in-war-stricken-yemen/" target="_blank">Interview with International Civil Society Action Network</a>
                </li>
              </ul>
            </p>
          </div>
        ),
      },
      {
        header: 'Hisham al-Omeisy',
        content: (
          <div>
            <p>
              Hisham al-Omeisy is a prominent activist that has served as an important public voice in Yemen throughout the conflict. He has provided critical commentary on the war with pieces in <a href="https://www.theguardian.com/profile/hisham-al-omeisy" target="_blank">The Guardian</a>, <a href="https://www.independent.co.uk/author/hisham-omeisy" target="_blank">Independent</a>, <a href="https://www.thenewhumanitarian.org/authors/hisham-al-omeisy" target="_blank">The New Humanitarian</a>, and more. His large social media presence has allowed him to report on events in real-time and bring attention to the devastation that ravages the country.
            </p>
            <p>
              In 2017, al-Omeisy was <a href="https://www.hrw.org/news/2017/08/18/yemen-houthis-detain-prominent-activist" target="_blank">detained</a> by Houthi authorities and held in captivity for five months. Although he was eventually released, <a href="https://www.bbc.com/news/world-middle-east-42694603" target="_blank">reports</a> say that he was never charged nor given access to his lawyer or family. 
            </p>
          </div>
        ),
      },
      {
        header: 'Radhya Almutawakel',
        content: (
          <div>
            Radhya Almutawakel is the Yemeni co-founder of the <a href="https://mwatana.org/en/about/" target="_blank">Mwatana Organization for Human Rights</a>. She is the first person to brief the UN Security Council on Yemen, and has written for The Guardian, The New Internationalist, and Vice News. In 2018, Almutawakel was <a href="https://www.hrw.org/sites/default/files/supporting_resources/joint_civilsociety_statement_mwatana_two.pdf" target="_blank">detained</a> by the Saudi led-coalition at the Seiyun City Airport for at least 12 hours.
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

export default ActivistsCards;