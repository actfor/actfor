import React from 'react';

// images
import * as abdel from './images/abdel.png'
import * as alfaqih from './images/alfaqih.png';
import * as almigdad from './images/almigdad.png'
import * as hisham from './images/hisham.png';
import * as jamalk from './images/jamalk.png';
import * as muna from './images/muna.png';
import * as radhya from './images/radhya.png';
import * as rees from './images/rees.png';

const academia = [
  {
    header: 'Yvonne McDermott Rees',
    content: (
      <div>
        <p>
          Dr. Yvonne McDermott Rees is a professor of law at Swansea University leading an <a href="https://www.technologyreview.com/2020/06/25/1004466/ai-could-help-human-rights-activists-prove-war-crimes/" target="_blank">initiative</a> on the use of AI to document war crimes in Yemen.
        </p>
      </div>
    ),
    image: rees,
  }
]

const activists = [
  {
    header: 'Abdulrasheed Alfaqih',
    image: alfaqih,
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
    image: muna,
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
    image: hisham,
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
    image: radhya,
    content: (
      <div>
        Radhya Almutawakel is the Yemeni co-founder of the <a href="https://mwatana.org/en/about/" target="_blank">Mwatana Organization for Human Rights</a>. She is the first person to brief the UN Security Council on Yemen, and has written for The Guardian, The New Internationalist, and Vice News. In 2018, Almutawakel was <a href="https://www.hrw.org/sites/default/files/supporting_resources/joint_civilsociety_statement_mwatana_two.pdf" target="_blank">detained</a> by the Saudi led-coalition at the Seiyun City Airport for at least 12 hours.
      </div>
    ),
  },
];

const journalists = [
  {
    header: 'Abdel Karim al-Khaiwani',
    description: 'Abdel Karim al-Khaiwani was a politician, human rights activist, and journalist. Al-Khawaini also made efforts towards peace in Yemen through his participation in the National Dialogue Conference and as a goodwill ambassador of the International Council for Human Rights in Yemen.  After Khaiwani published several articles critical of Saleh and Yemeni government corruption, government officials harassed, beat, searched, and imprisoned Saleh; on March 18 2015, three gunmen assassinated Khaiwani in his home.',
    image: abdel,
  },
  {
    header: 'Almigdad Mojalli',
    description: "Almigdad Mojalli was a journalist for The Daily Telegraph, Al Jazeera, IRIN for the UNited Nations, and Voice of America. His work focused on Yemen's humanitarian crisis and the impact of foreign intervention on Yemen. Accused as a spy for Saudi Arabia and the United States, Mojalli received threats of confinement from the Houthi government in 2016. On January 17, 2016, Mojalli was killed by a Saudi airstrike while on assignment to find witnesses of an airstrike that occurred the week before.",
    image: almigdad,
  },
  {
    header: 'Jamal al-Sharabi',
    description: 'Jamal al-Sharabi was the first journalist to die covering the 2011 Yemen Spring Revolution. While Sharabi was reporting at Change Square in Sana’a, Yemen security forces shot into the crowd. In addition to 600 people injured, Sharabi was among 50 people killed by the security forces.',
  },
  {
    header: 'Jamal Khashoggi',
    description: 'Jamal Khashoggi was a columnist for The Washington Post and editor in chief of Al-Arab News Channel. Khashoggi was a known dissident of Saudi Arabia, criticizing Saudi-coalition intervention in Yemen and the actions of Muhammad bin Salman (MBS). He was assassinated at the Saudi consulate by Saudi agents on October 2, 2018, which led to international uproar.',
    image: jamalk,
  },
  {
    header: 'Ziad al-Sharabi',
    description: 'Born in Taiz but raised and educated in Sana’a, Ziad al-Sharabi was a journalist for Abu Dhabi TV, a UAE run broadcaster. He was killed on January 28, 2019 by a Houthi set motorcycle bomb attack in Mokha.',
  }
]

const stories = [
  {
    header: 'Asma',
    description: 'Asma, a fifth grade student in Ajyal Al-Wehda School, experienced the detrimental effects of war on public schools in Yemen. Asma says she studied on stairs due to an insufficient number of classrooms. In addition, a lack of sanitation in schools meant that many students caught cholera.',
    link: 'http://pubdocs.worldbank.org/en/861341563799030822/Yemen-YECRP-brochure-eng.pdf',
  },
  {
    header: 'Muhtab Al-Beraik Salem',
    description: 'Muhtab Al-Beraik Salem, a Yemeni midwife for 30 years, has established a clinic in Al-Khaisa, a rural area in Yemen with little to no health services. Salem has dedicated her life to caring for women and children, and to save lives. Despite the sacrifices she has made to leave her family and work in an underserved area, Salem’s clinic has greatly enhanced healthcare in Al-Khaisa. Today, the clinic receives support from the Emergency health and Nutrition Project funded by the World Bank IDA.',
    link: 'https://www.unicef.org/yemen/stories/30-years-midwife',
  },
  {
    header: 'Samiah',
    description: 'Samiah, a mother of three children, felt safe in Hodeidah until conflict broke out in the region. After they fled Hodeidah, Samiah and her family faced extreme food insecurity issues, often unable to find enough food to eat. Samiah then found an opportunity to earn money from a non-profit organization by painting in her community. She paints schools, parks, and street curbs with “pride and dignity.”',
    link: 'http://pubdocs.worldbank.org/en/861341563799030822/Yemen-YECRP-brochure-eng.pdf',
  },
  {
    header: 'Siham',
    description: 'Siham is a 37-year-old mother who has been a community health worker since May of 2018. She works at a clinic in Mahweet helping malnourished children and mothers who do not have proper access to food due to the civil war. She uses her experience as a mother to bond and better communicate with other mothers who come to the clinic.',
    link: 'https://www.mercycorps.org/blog/stories-yemen-community-health',
  },
  {
    header: 'Shamia',
    description: 'Shamia is a 35-year-old mother of 8 children who met Siham when her 11-month-old child needed care for acute malnutrition. The war has impacted Shamia’s family greatly; they don’t have enough food to eat and they often resort to skipping meals or asking neighbors for food. She bonded with Siham at the Mahweet clinic while receiving key health and nutrition education from Siham.',
    link: 'https://www.mercycorps.org/blog/stories-yemen-community-health',
  }
]

export {
  academia,
  activists,
  journalists,
  stories,
}
