import React, { Component } from 'react';

import {
  Header,
  Image,
} from 'semantic-ui-react';

// images
import * as land from './images/land.png';

class UyghurArticle extends Component {
  render() {
    return (
      <div style={{ fontSize: '20px' }}>
        <Header as="h2">
          Who are the Uyghurs?
        </Header>
        <p>
          Situated in the heart of Asia, the Uyghurs are ethnically and culturally Turkic people have lived in <a href="https://www.uyghurcongress.org/en/east-turkestan-2/" target="_blank">East Turkestan</a> for the past <a href="http://www.iuhrdf.org/uyghurs" target="_blank">4000 years</a>. There are an estimated 20 million Uyghurs—the majority of them Muslim—living there, although Chinese sources put the number around 11 million. Also referred to as the Xinjiang Uyghur Autonomous Region, East Turkestan is situated in northwestern China (highlighted in red below). 
        </p>
        <Image rounded fluid centered wrapped size="medium" src={land} />
        <br />
        <p>
          Situated along the fabled Silk Road, East Turkestan has historically been a center for commerce and agriculture. This centrality allowed Uyghurs to play an important role in cultural exchange between the East and West while building a unique and rich culture of their own.
        </p>
        <p>
          In the vast history of the Uyghur people, only a small part of it has been associated with Chinese occupation. East Turkestan maintained its independence and prosperity until the Manchu Empire <a href="http://www.iuhrdf.org/uyghurs" target="_blank">invaded</a> the region in 1876. After 8 years of war, East Turkestan was finally conquered and formally annexed into the empire as “Xinjiang” (meaning “New Territory”) in 1884. After this annexation, Uyghur power and culture went into a steep decline. Uyghur occupation lasted through the uprising that overthrew the Manchu Empire and established the Chinese government. Although there were numerous uprisings against Chinese rule—some of which were successful in declaring independence—<a href="https://nationalawakening.org/modern-history-of-east-turkistan/" target="_blank">none of them were long-lasting.</a>
        </p>
        <p>
          Despite past failures, the East Turkestan independence movement has been a constant political force since occupation began. Despite the long history of separatist movements, the Chinese government post-9/11 has sought to establish that all separatist ideas are connected to Islamic terrorism. They use this excuse to justify harsh policies that crackdown on the Uyghur people, specifically their expression of religion.
        </p>


        <Header as="h2">
          The Surveillance State, Mass Detention, and Genocide
        </Header>
        <p>
          Starting in late 2016, a sweeping crackdown turned East Turkestan into a <a href="https://www.hrw.org/video-photos/interactive/2019/05/02/china-how-mass-surveillance-works-xinjiang#:~:text=Chinese%20authorities%20are%20using%20a,in%20China's%20western%20Xinjiang%20region.&text=%E2%80%9CThe%20Chinese%20government%20is%20monitoring,subjecting%20them%20to%20extra%20scrutiny.%E2%80%9D" target="_blank">draconian police state</a>. The Chinese government’s use of mobile apps, biometric data collection, and <a href="https://www.wired.com/story/inside-chinas-massive-surveillance-operation/" target="_blank">facial recognition</a> all subjugate the Uyghur people and raise scrutiny on those that are deemed suspicious. This mass surveillance not only infringes on the freedoms of Uyghurs, it also serves as a means of psychological warfare. Combined with restrictions on freedoms of religion and assembly in East Turkestan, mass surveillance instills fear in Uyghurs as they live their daily lives. Additionally, the Chinese government has implemented <a href="https://www.hrw.org/sites/default/files/report_pdf/china0918_web.pdf" target="_blank">political indoctrination</a> programs that many Uyghurs are required to attend.
        </p>
        <p>
          Through invasive surveillance, Chinese authorities authorize mass detentions. Since April of 2017, the US government estimates that <a href="https://www.foreign.senate.gov/imo/media/doc/120418_Busby_Testimony.pdf" target="_blank">over 2 million Uyghurs</a> have been detained by the Chinese government and sent to modern-day concentration camps. <a href="https://edition.cnn.com/interactive/2020/02/asia/xinjiang-china-karakax-document-intl-hnk/" target="_blank">Leaked Chinese documents</a> show that many of these detentions were “justified” by actions that did not remotely resemble a crime. While the Chinese government first denied the existence of these camps, they quickly repositioned by saying they were vocational and educational <a href="http://www.xinhuanet.com/english/2018-10/16/c_137535821.htm" target="_blank">training camps</a>. Survivors and outside organizations report mass abuse, rape, tiorture, and <a href="https://www.hrw.org/sites/default/files/report_pdf/china0918_web.pdf" target="_blank">rampant human rights abuses</a> within these detention centers.
        </p>
        <p>
          Although the Chinese government has oppressed and scrutinized its Uyghur population for decades, these recent actions have rejuvenated the calls of activists to denounce the Chinese government. While many have called the current situation a cultural genocide for many years, a recent <a href="https://jamestown.org/wp-content/uploads/2020/06/Zenz-Internment-Sterilizations-and-IUDs.pdf?x60014" target="_blank">report</a> soldifies that the extermination of Uyghurs (especially through forced sterilizations and abortions) <b>meets the criteria of an actual genocide as well.</b>
        </p>

        <Header as="h2">
          International Response to Uyghur Occupation
        </Header>
        <p>
          China’s oppression of Uyghurs has been met with criticism from across the world. The US officially condemned China by accusing them of putting Uyghurs in <a href="https://www.reuters.com/article/us-usa-china-concentrationcamps/china-putting-minority-muslims-in-concentration-camps-us-says-idUSKCN1S925K" target="_blank">concentration camps</a> while also <a href="https://www.npr.org/2020/07/09/889406296/u-s-sanctions-chinese-officials-including-politburo-member-for-xinjiang-abuses" target="_blank">sanctioning</a> certain Chinese officials involved in these human rights abuses. While these steps are long overdue, they are a welcome development from the US. <b>However, it’s important for the US to go even further and support Uyghur’s right to self-determination and the East Turkestan independence movement.</b>
        </p>
        <p>
          It is also important to note that <b>many international corporations are complicit in the oppression of the Uyghurs</b>. Many of them <a href="https://www.wsj.com/articles/u-s-tech-companies-prop-up-chinas-vast-surveillance-network-11574786846#:~:text=U.S.%20companies%2C%20including%20Seagate%20Technology,involved%20since%20the%20industry's%20infancy." target="_blank">profited</a> off China’s surveillance state in East Turkestan by supplying technology while tech giants like Amazon and Microsoft <a href="https://www.cnbc.com/2020/05/23/amazon-google-microsoft-reportedly-providing-web-services-to-blacklisted-china-firms.html" target="_blank">provide web services</a> to blacklisted Chinese surveillance firms. Additionally, a <a href="https://s3-ap-southeast-2.amazonaws.com/ad-aspi/2020-03/Uyghurs%20for%20sale_Final.pdf" target="_blank">report</a> by the Australian Strategic Policy Institute identified 83 companies linked to forced labor in Uyghur detention camps.
        </p>
        <br />
        <br />
      </div>
    );
  }
}

export default UyghurArticle;