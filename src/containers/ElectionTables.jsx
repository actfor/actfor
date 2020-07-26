import React, { Component } from 'react';

// semantic-ui
import {
  Accordion,
  Divider,
  Icon,
  Tab,
  Table,
} from 'semantic-ui-react';

class AccordionArticle extends Component {
  state = { activeIndex: -1, activeSecondaryIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  handleSecondaryClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeSecondaryIndex } = this.state
    const newIndex = activeSecondaryIndex === index ? -1 : index

    this.setState({ activeSecondaryIndex: newIndex })
  }

  render() {
    const { activeIndex, activeSecondaryIndex } = this.state;
    return (
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon style={{ }} name='dropdown' />
          <h2 style={{ display: 'inline' }}>Origins of the Crisis: The Yemeni Civil War</h2>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            Conflict in Yemen originates from the Arab Spring Revolution in 2011 and a subsequent failure to establish peace due to the corrupt transition from authoritarian leader Ali Abdullah Saleh to his deputy, Abdrabbuh Masour Hadi. The UN and other peace organizations attempted to facilitate a National Dialogue Conference to establish a democracy as Saleh handed power to Hadi, but general distrust of Hadi as a beneficiary of Saleh’s corruption resulted in its failure.  In 2015, conflict developed into a civil war between the former Hadi Yemeni government and the Houthi armed movement, champions of the Zaidi Shia Muslim minority in the country. Both the Hadi administration and the Houthis claim to be the official government of Yemen. The human rights violations of the Houthis, especially their use of child soldiers and diversion of critical aid, overstepped the initial goals of the Arab Spring. In the midst of the corruption of the Hadi government and its inability to address unemployment and food insecurity, Ali Abdulleh Saleh’s support of the Houthi movement further marred what should have been an Arab Spring Revolution. Yemenis thought that the involvement of Saleh marked an attempt to regain control of the country, the complete opposite of what was fought for in the Arab Spring four years before. Opposition of both the Hadi government and the Houthis for their perpetuation of the war and destruction of the Arab Spring is prevalent among the Yemeni population.
          </p>

          <p>
            In January of 2015, Houthi rebels kidnapped Hadi’s Chief of Staff Ahmed bin Mubarak and invaded the presidential palace, forcing President Hadi to resign shortly after. After initial phases of airstrikes and bombings from ISIS, Al-Qaeda in the Arabian Peninsula (AQAP), and a Saudi Arabia-led coalition of the United States, United Kingdom, France, and eight Sunni Arab states, the United Nations (UN) attempted to facilitate peace talks between the warring parties in Kuwait from April to August in 2016. However, Houthi rebels rejected the peace proposal. They then formed a new government in Yemen’s capital led by Abdul Aziz Habtoor. Although Saleh supported the Houthi movement, he was killed by Houthi rebels in December 2017. As of 2020, the Houthi rebels control western Yemen, including the capital, Sanaa, while Hadi loyalists maintain control of about two thirds of the country. To make the situation worse, ISIS and AQAP use the chaos for their own agenda - committing violent attacks and seizing territory in Yemen.
          </p>

        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <h2 style={{ display: 'inline' }}>Saudi Arabia and US Involvement</h2>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            Despite the claims of the Saudi government, the proxy conflict between Iran and Saudi Arabia does not fully manifest in the Yemeni civil war. While Iran provides logistical and technological support to the Houthis, Iran does not control Houthi efforts in the same way the Saudi coalition exerts complete influence on the Hadi government. Saudi Arabia already has a long history in Yemen and used Iran’s backing as a justification to interfere in the Yemeni Civil War. In fact, a 2009 Wikileaks Memo revealed that the “Houthis obtain their weapons from the Yemeni black market and even from the ROYG [Republic of Yemen government] military itself ‘by buying them from corrupt commanders and soldiers... the military covers up its failures by saying the weapons come from Iran” <a href="https://www.researchgate.net/publication/302064592_Iran%27s_policy_towards_the_Houthis_in_Yemen_A_limited_return_on_a_modest_investment?fbclid=IwAR0Do1Hye6Ymtx1uvEr-Xnc5rlH0JY88uqQiNePX8vD_jINJt2tzObm_Vuk" target="_blank">(Juneau 2016)</a>. In 2015, Hadi sought support from Saudi Arabia and encouraged their intervention. Even though Iran’s support of the Houthis is limited, Saudi Arabia retaliated in a disproportionate manner by forming a coalition to restore the Hadi government, killing hundreds of thousands of Yemenis in an airstrike campaign. <b>Ultimately, Iran’s limited support of the Houthi rebels does not justify the Saudi coalition’s violence in Yemen. </b>
          </p>

          <p>
            Now based in Saudi Arabia, Hadi has been ineffective in providing basic humanitarian services to the people of Yemen. In 2017, the Saudi Arabia-led coalition imposed a naval blockade on Yemen to prevent weapons from being smuggled to the Houthi rebels. However, the restrictions resulted in heavy taxes on food, healthcare supplies, and fuel for Yemenis. This blockade is the primary contributor to the severe crisis Yemen is experiencing today. The coalition also launched a major offensive on the Red Sea City of Hudayah in 2018, which contains a port that two-thirds of the Yemeni population depend on for importing basic needs. The UN warned that the destruction of the port would cause millions of more to die because of famine. After six months of fighting and then ceasefire negotiations in Sweden, the forces agreed to withdraw from Hudayah, but the full withdrawal has not taken place. There are valid fears that the agreement will collapse and fighting will resume.
          </p>

          <p>
            Throughout these events, the United States has supported Saudi-led coalition attacks in an effort to deter the Iranian-backed Houthi rebels. In fact, the United States sends more weapons to Saudi Arabia than any other nation -- allowing its and Saudi Arabia’s rivalry with Iran to dictate their policy choices. In late 2017, the U.S. secretly sent a team of elite forces, the Green Berets, to help the Saudi coalition defeat the Houthi rebels (<a href="https://www.businessinsider.com/green-berets-helping-saudi-arabia-yemen-destroy-houthi-missiles-2018-5" target="_blank">Brown</a>, 2018). Lockheed Martin, a company based in the United States, sold the very bomb Saudi Arabia coalition deployed, killing 40 Yemeni boys in 2018 (<a href="https://edition.cnn.com/2013/07/10/world/meast/yemen-fast-facts/index.html" target="_blank">CNN Editorial Research</a>, 2020). In 2019, CNN revealed that the coalition sent U.S.-manufactured weapons to AQAP (<a href="https://edition.cnn.com/2013/07/10/world/meast/yemen-fast-facts/index.html" target="_blank">CNN Editorial Research</a>, 2020). The Trump administration has increased U.S. aid to the Saudi coalition with little public attention or debate: President Trump approved a deal in May 2019 to sell eight billion dollars worth of U.S. weapons to Saudi Arabia and the UAE (<a href="https://www.aljazeera.com/news/2017/06/questions-raised-110bn-arms-deal-saudi-arabia-170608033511760.html" target="_blank">Roberts</a>, 2019). <b>Yemen is not just a humanitarian issue; it is a result of Western imperialist violence and domination, crippling the country and killing millions of civilians.</b>
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <h2 style={{ display: 'inline' }}>Full Effects of the War: The World’s Worst Crisis </h2>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            80 percent of the country needs humanitarian aid to survive, 60 percent do not have enough to eat day by day, 58 percent do not have access to clean water, 52 percent of the country has little or no access to health care, and 11 percent of the country is severely malnourished. Political conflict in Yemen prevented access to basic needs and services, destroyed the economy, and severely diminished healthcare access for the entire population.
          </p>

          <p>
            Because Yemen imports 90 percent of its food, even before the onset of the war, any cessation of imports would devastate Yemen. The naval blockade by the coalition greatly restricts the amount of humanitarian aid that can reach the Yemeni population. All warring parties, particularly the Houthis and the Hadi government, heavily tax and impede aid that does reach the ports, resulting in lengthy delivery dates: “Offloading [humanitarian goods at a port] takes an average of thirty days due to inefficient port management, financial disputes between shippers, and limited capacity at the al-Hodeidah port, which was severely damaged by airstrikes” (<a href="https://www.ipinst.org/wp-content/uploads/2018/01/IPI-Rpt-Humanitarian-Crisis-in-Yemen.pdf" target="_blank">Coppi</a>, 2018). To compensate for delivery and tariffs, goods are heavily priced and taxed -- to the point that Yemeni markets are often filled with food no one can afford.
          </p>

          <p>
            Yemen’s Central Bank faces difficulty trying to collect taxes that are to benefit humanitarian services and economic stability. Public servants have gone unpaid for months, more than 170 schools and 70 health facilities are significantly or completely damaged, and Yemen’s GDP has decreased by a cumulative 37.5 percent since 2015.
          </p>

          <p>
            The UN considers the lack of access to healthcare for 14.8 million people to be the greatest concern for Yemen’s population. Because of a lack of financial resources, Yemen’s public health sector is entirely reliant on humanitarian aid, healthcare workers are forced to leave, and facilities are destroyed or vulnerable to destruction. Less than 45 percent of basic health facilities are functional, especially since hospitals frequently run out of power due to weak electrical infrastructure. Facilities run extremely low on medical supplies, and when they are available, warring parties attempt to divert or heavily tax these supplies.
          </p>

          <p>
            Yemen’s remnants of a healthcare system cannot address the atypical spread of preventable diseases in the country. So far, two cholera outbreaks in Yemen, one in 2016 and one in 2017, are the fastest growing cholera epidemics in history. Additionally, Chikungunya virus, a mosquito transmitted outbreak, runs rampant in the country. Millions of children are declared at risk for malnutrition, cholera, and measles. The coronavirus exacerbates Yemen’s tragedy to a critical point: in the first two weeks of May, 951 Yemenis have died from the coronavirus, representing nearly half the amount of direct war casualties in all of 2015.
          </p>

          <p>
            Yemen simply cannot cope with war, three pandemics, economic destruction, and the coronavirus. It is on the brink of existence.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <h2 style={{ display: 'inline' }}>We Must Take Action, Do Something. </h2>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            The Yemeni crisis is not just a humanitarian disaster; it is a political, man-made tragedy. Aid is important, but not enough. While long term political instability between the Houthis and Hadi supporters should eventually be addressed, we now need to focus on the larger players that are responsible for the humanitarian crisis-- the Saudi coalition. As the general public, we need to put public pressure on Saudi Arabia, the United States, the UK, France, and other governments involved in the coalition to stop the naval blockade and air strikes, and to pay reparations to the civilians of Yemen. Here’s what you can do.
          </p>


          <Accordion.Title
            active={activeSecondaryIndex === 0}
            index={0}
            onClick={this.handleSecondaryClick}
          >
            <Icon name='dropdown' />
            <h3 style={{ display: 'inline' }}>Politics</h3>
          </Accordion.Title>
          <Accordion.Content active={activeSecondaryIndex === 0}>
            <p>
              Since the onset of the crisis, a plethora of resolutions and bills have been introduced to the United States Congress. Here are three <a href="https://www.govtrack.us/search?q=yemen" target="_blank">(of many)</a> pieces of resolution that still require further action:
              <ul>
                <li>
                  <a href="https://www.govtrack.us/congress/bills/116/hr910" target="_blank">H.R. 910</a>: Yemen Refueling Prohibition Act: To prohibit the use of funds to provide for in-flight refueling of Saudi or Saudi-led coalition aircraft conducting missions as part of the ongoing coalition intervention in Yemen.
                </li>

                <li>
                  <a href="https://www.govtrack.us/congress/bills/116/hjres56" target="_blank">H.J.Res. 56</a>: Directing the President to terminate the use of the United States Armed Forces with respect to the military intervention led by Saudi Arabia in the Republic of Yemen.
                </li>

                <li>
                  <a href="https://www.govtrack.us/congress/bills/116/sres243" target="_blank">S.Res. 243</a>: A resolution requesting information on Saudi Arabia’s human rights practices in Yemen pursuant to section 502B(c) of the Foreign Assistance Act of 1961
                </li>
              </ul>
            </p>

            <p>
              <b>Contact your house representatives and senators and ask that they cosponsor and pass these resolutions and bills.</b> Calling, emailing, and being present in government meetings can put significant pressure on government officials and demonstrate to them that the general public knows and cares about their actions (or lack thereof). To contact your congress members, click <a href="http://clerk.house.gov/member_info/TTD-116.pdf" target="_blank">here</a> for a list of telephone numbers for each member of the House of Representatives, and click <a href="https://contactsenators.com/senator-phone-numbers" target="_blank">here</a> for a list of telephone numbers for every U.S. senator.
            </p>

          </Accordion.Content>

          <Accordion.Title
            active={activeSecondaryIndex === 1}
            index={1}
            onClick={this.handleSecondaryClick}
          >
            <Icon name='dropdown' />
            <h3 style={{ display: 'inline' }}>Public Pressure</h3>
          </Accordion.Title>
          <Accordion.Content active={activeSecondaryIndex === 1}>
            <p>
              On January 20, 2019, Senator Bernie Sanders (Democrat, Vermont) introduced <a href="https://www.govtrack.us/congress/bills/116/sjres7" target="_blank">S.J.Res. 7</a>, a “ A joint resolution to direct the removal of United States Armed Forces from hostilities in the Republic of Yemen that have not been authorized by Congress.” On April 16, 2019, this became the first and only piece of legislation regarding the Yemeni crisis passed by both the senate and the house, but President Donald Trump vetoed the resolution. The senate attempted but failed to override the veto on May 2, 2019.
            </p>

            <p>
              <b>Put consistent pressure on President Trump for this egregious action.</b> This is not just a typical blunder of the Trump administration. It is intentional violence on millions of vulnerable people, resulting in hundreds of thousands of deaths. The crisis in Yemen cannot be a single headline in a single news cycle. The situation is ongoing, so the coverage, attention, and action needs to be ongoing. <b><a href="https://www.whitehouse.gov/get-involved/write-or-call/" target="_blank">Contact</a> the White House, call out President Trump on social media, and keep your efforts focused on this topic.</b>
            </p>

            <p>
            <b>Hold Mohammad bin Salman (MBS), the crown prince and deputy prime minister of Saudi Arabia, accountable for the violence he has committed on the Yemeni people.</b> In addition to being the architect of Yemen’s catastrophic war, MBS has a history of arresting and murdering political rivals, dissenters, and reporters who otherwise would have been able to provide real information to the international community. Despite his countless scandals and oppression of the Yemeni people, Western media positively portrays Mohammad bin Salman.  In 2018, 60 Minutes interviewed MBS (<a href="https://www.cbsnews.com/news/saudi-crown-prince-talks-to-60-minutes/" target="_blank">O'Donnell</a>, 2018), and TIME Magazine featured the crown prince on their front cover (<a href="https://time.com/5228006/mohammed-bin-salman-interview-transcript-full/" target="_blank">Time</a>, 2018). Ever since Saudi Arabia passed a law allowing women to drive, MBS has appeared to be progressive in the West, but this is only a distraction from the ongoing oppression of Yemen. Do not let MBS fool you. He is not a reformer. <b>Promote journalists and media that call out and criticize Muhammad Bin Salman for the violence he has committed on Yemen.</b>
            </p>

            <p>
              <b>Remember that public pressure is key.</b> Saudi Arabia and the United States continue to blockade and conduct airstrikes in Yemen because there is inadequate public awareness on the issue. Yemen has been “The Forgotten War”. But we cannot forget Yemen, and if we place enough public pressure on those who should be held accountable, <b>we will not forget Yemen</b>.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeSecondaryIndex === 2}
            index={2}
            onClick={this.handleSecondaryClick}
          >
          <Icon name='dropdown' />
          <h3 style={{ display: 'inline' }}>Humanitarian Aid</h3>
        </Accordion.Title>
          <Accordion.Content active={activeSecondaryIndex === 2}>
            <p>
              Donating to humanitarian aid organizations can help alleviate the needs of the Yemeni people. Researching the credibility of non-profit organizations before sending donations ensures that your money and provisions are efficiently used and directly benefiting the populations.
            </p>

            <p>
              Donate to:
              <ol>
                <li><a href="https://mwatana.org/en/" target="_blank">Mwatana for Human Rights</a></li>
                <li><a href="https://www.unicef.org/yemen/" target="_blank">UNICEF Yemen</a></li>
                <li><a href="https://www.monareliefye.org/" target="_blank">Mona Relief</a></li>
                <li><a href="https://zahratrust.org/" target="_blank">The Zahra Trust</a></li>
                <li><a href="https://www.oxfamamerica.org/explore/countries/yemen/" target="_blank">OXFAM</a></li>
              </ol>
            </p>
          </Accordion.Content>

        </Accordion.Content>

        <p>Do your part: hold the U.S. and Saudi governments accountable, raise awareness, and donate to humanitarian organizations. <b>We cannot and will not forget Yemen.</b></p>

        <Divider />

        <Accordion.Title
          active={activeIndex === 7}
          index={7}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <h2 style={{ display: 'inline' }}>References</h2>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 7}>
          <p>
            Al-Khayat, M. (2020, December 31). Checkpoint children: Armed Houthis under 18. Retrieved July 01, 2020, from <a href="https://web.archive.org/web/20150418002313/http://www.yementimes.com/en/1828/report/4489/Checkpoint-children-Armed-Houthis-under-18.htm" target="_blank">
              https://web.archive.org/web/20150418002313/http://www.yementimes.com/en/1828/report/4489/Checkpoint-children-Armed-Houthis-under-18.htm
            </a>
          </p>

          <p>
            Al-Samei, M. (2018, July 18). Yemen's Hadi has no regrets about seeking Saudi help. Retrieved July 01, 2020, from <a href="https://www.aa.com.tr/en/africa/yemen-s-hadi-has-no-regrets-about-seeking-saudi-help/1207407?fbclid=IwAR2h2cHERVYSmwu-Fe6T_4zmxF7YrtgMF-NYjz99fWLtEffMBarugISqySU" target="_blank">https://www.aa.com.tr/en/africa/yemen-s-hadi-has-no-regrets-about-seeking-saudi-help/1207407?fbclid=IwAR2h2cHERVYSmwu-Fe6T_4zmxF7YrtgMF-NYjz99fWLtEffMBarugISqySU </a>
          </p>

          <p>
            Bazzi, M. (2018, June 11). The war in Yemen is disastrous. America is only making things worse | Mohamad Bazzi. Retrieved June 23, 2020, from <a href="https://www.theguardian.com/commentisfree/2018/jun/11/trump-yemen-saudi-arabi-war-us-involvement-worsening-crisis" target="_blank">https://www.theguardian.com/commentisfree/2018/jun/11/trump-yemen-saudi-arabi-war-us-involvement-worsening-crisis</a>
          </p>

          <p>
            BBC. (2018, December 31). Yemen war: WFP accuses Houthi rebels of diverting food aid. Retrieved July 01, 2020, from <a href="https://www.bbc.com/news/world-middle-east-46722502" target="_blank">https://www.bbc.com/news/world-middle-east-46722502</a>
          </p>

          <p>
            Brehony, N. (2015). Yemen And The Houthis: Genesis Of The 2015 Crisis. Asian Affairs, 46(2), 232-250. doi:10.1080/03068374.2015.1037162
          </p>

          <p>
            Brown, D. (2018, May 03). Green Berets are reportedly helping Saudi Arabia destroy Houthi ballistic missiles in Yemen. Retrieved June 24, 2020, from <a href="https://www.businessinsider.com/green-berets-helping-saudi-arabia-yemen-destroy-houthi-missiles-2018-5" target="_blank">https://www.businessinsider.com/green-berets-helping-saudi-arabia-yemen-destroy-houthi-missiles-2018-5 </a>
          </p>

          <p>
            Coppi, G. (2018). The Humanitarian Crisis in Yemen: Beyond the Man-Made Disaster. International Peace Institute, 1-40. Retrieved June 22, 2020, from <a href="https://css.ethz.ch/content/dam/ethz/special-interest/gess/cis/center-for-securities-studies/resources/docs/IPI%20Humanitarian-Crisis-in-Yemen.pdf" target="_blank">
            https://css.ethz.ch/content/dam/ethz/special-interest/gess/cis/center-for-securities-studies/resources/docs/IPI%20Humanitarian-Crisis-in-Yemen.pdf
            </a>
          </p>

          <p>
            CNN Editorial Research. (2020, February 28). Yemen Fast Facts. Retrieved June 23, 2020, from <a href="https://edition.cnn.com/2013/07/10/world/meast/yemen-fast-facts/index.html" target="_blank">https://edition.cnn.com/2013/07/10/world/meast/yemen-fast-facts/index.html </a>
          </p>

          <p>
            Hasan, S. (2019, September 19). How much influence does Iran have on the Houthis? Retrieved June 29, 2020, from <a href="https://www.trtworld.com/middle-east/how-much-influence-does-iran-have-on-the-houthis-29911?fbclid=IwAR35kzqhGQqzNMIUfCkUbkh2jOGF7_zNUWmEeHaiYrtviajEcGUVVagdduo" target="_blank">https://www.trtworld.com/middle-east/how-much-influence-does-iran-have-on-the-houthis-29911?fbclid=IwAR35kzqhGQqzNMIUfCkUbkh2jOGF7_zNUWmEeHaiYrtviajEcGUVVagdduo</a>
          </p>

          <p>
          Humanitarian crisis in Yemen remains the worst in the world, warns UN | | UN News. (2019, February 14). Retrieved June 23, 2020, from <a href="https://news.un.org/en/story/2019/02/1032811" target="_blank">https://news.un.org/en/story/2019/02/1032811</a>
          </p>

          <p>
            Juneau, T. (2016). Iran's policy towards the Houthis in Yemen: A limited return on a modest investment. International Affairs, 92(3), 647-663. doi:10.1111/1468-2346.12599
          </p>

          <p>
            Nikbakht, D., & McKenzie, S. (2018, April 03). Yemen war is world's worst humanitarian crisis, UN says. Retrieved June 23, 2020, from <a href="https://www.cnn.com/2018/04/03/middleeast/yemen-worlds-worst-humanitarian-crisis-un-intl/index.html" target="_blank">https://www.cnn.com/2018/04/03/middleeast/yemen-worlds-worst-humanitarian-crisis-un-intl/index.html</a>
          </p>

          <p>
            O'Donnell, N. (2018, March 19). Saudi Arabia's heir to the throne talks to 60 Minutes. Retrieved June 23, 2020, from <a href="https://www.cbsnews.com/news/saudi-crown-prince-talks-to-60-minutes/" target="_blank">https://www.cbsnews.com/news/saudi-crown-prince-talks-to-60-minutes/</a>
          </p>

          <p>
            Roberts, W. (2017, June 08). Questions raised over $110bn arms deal to Saudi Arabia. Retrieved June 24, 2020, from <a href="https://www.aljazeera.com/news/2017/06/questions-raised-110bn-arms-deal-saudi-arabia-170608033511760.html" target="_blank">https://www.aljazeera.com/news/2017/06/questions-raised-110bn-arms-deal-saudi-arabia-170608033511760.html</a>
          </p>

          <p>
            Search GovTrack: Yemen. (n.d.). Retrieved June 23, 2020, from <a href="https://www.govtrack.us/search?q=yemen " target="_blank">https://www.govtrack.us/search?q=yemen</a>
          </p>

          <p>
            Snyder, S. (2018, December 14). Here is a list of organizations helping people in Yemen who are surviving in the world's worst humanitarian crisis. Retrieved June 23, 2020, from <a href="https://www.pri.org/stories/2017-11-29/heres-how-you-can-send-help-people-trapped-worlds-worst-humanitarian-crisis" target="_blank">https://www.pri.org/stories/2017-11-29/heres-how-you-can-send-help-people-trapped-worlds-worst-humanitarian-crisis</a>
          </p>

          <p>
            Time. (2018, April 05). Saudi Arabian Crown Prince Mohammed bin Salman Interview. Retrieved June 23, 2020, from <a href="https://time.com/5228006/mohammed-bin-salman-interview-transcript-full/" target="_blank">https://time.com/5228006/mohammed-bin-salman-interview-transcript-full/</a>
          </p>

          <p>
            Ward, C. (2017, December 19). In Yemen, the markets have food, but children are starving to death. Retrieved June 23, 2020, from <a href="https://edition.cnn.com/2017/12/19/middleeast/yemen-intl/index.html" target="_blank">https://edition.cnn.com/2017/12/19/middleeast/yemen-intl/index.html</a>
          </p>

          <p>
            Yemen crisis: Why is there a war? (2020, June 19). Retrieved June 23, 2020, from <a href="https://www.bbc.com/news/world-middle-east-29319423" target="_blank">https://www.bbc.com/news/world-middle-east-29319423</a>
          </p>
        </Accordion.Content>
      </Accordion>
    );
  }
}

export default AccordionArticle;
