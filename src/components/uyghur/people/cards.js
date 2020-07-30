import React from 'react';

// images
import * as dawut from './images/2.png';
import * as tursay from './images/3.png';
import * as rebiya from './images/4.png';
import * as nury from './images/5.png';
import * as tursun from './images/6.png';
import * as tohti from './images/7.png';
import * as imin from './images/8.png';

const activists = [
  {
    header: 'Rebiya Kadeer',
    image: rebiya,
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
    image: tohti,
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
    image: nury,
    content: (
      <div>
        <p>
          Nury Turkel is an Uyghur lawyer and activist that is currently serving as the commissioner for the US Commission on International Religious Freedoms. Born in a re-education camp at the height of the cultural revolution, Turkel came to the US as a student in 1995. Before his appointment as commissioner, he helped co-found the Uyghur Human Rights Project in 2003. With many policy-oriented commentaries in publications such as The Wall Street Journal, The Independent, and Foreign Policy, Turkel’s has served as an outspoken advocate for Uyghur rights and his recommendations have been incorporated into pending bills in Congress.            
        </p>
      </div>
    ),
  },
]

const journalists = [
  {
    header: 'Gulmira Imin',
    image: imin,
    description: 'Gulmira Imin is an Uyghur Muslim who was a moderator of Salkin, an Uyghur-language culture and news website. Many of her online writings and the posts on Salkin criticized government policies against Uyghurs. Following a demonstration protesting the death of Uyghur migrant workers, Chinese authorities arrested Imin for allegedly organizing the demonstration and leaking state secrets. Her family was not notified of her arrest and she was not allowed to meet with a lawyer before her trial. She was sentenced to life in prison in 2010 and has been tortured during her detention.',
  }
]

const stories = [
  {
    header: 'Mihrigul Tursun',
    image: tursun,
    description: 'Mihrigul Tursun is a young Uyghur mother who was detained and tortured by the Chinese government numerous times. After giving birth to triplets in Egypt and returning to China afterwards, the authorities arrested her at the airport. They separated her from her children and did not allow her to see them during her detention. Under the Chinese government’s negligent watch, Mihrigul’s son died in custody. She wasn’t allowed to see him at the hospital before he passed away. Although she was later able to escape custody, Mihrigul found out that her husband had been sentenced to 16 years in prison.',
    link: 'https://uhrp.org/news/uighur-survivor-story-video',
  },
  {
    header: 'Tursunay Ziyawudun',
    image: tursay,
    description: 'Tursunay Ziyawudun is a 41-year-old Uyghur woman who spent a total of nine months at a Chinese concentration camp. During her time there, Tursunay witnessed authorities forcefully sterilize, rape, and torture inmates. She says that even after release, the willful neglect and abuse she and other detainees suffered at the hands of guards left lasting psychological and physical impacts.',
    link: 'https://www.rfa.org/english/news/uyghur/abuse-10302019142433.html',
  },
  {
    header: 'Zumrat Dawut',
    image: dawut,
    description: 'Zumrat Dawut is an Uyghur woman who was detained by Chinese authorities for 62 days. She explains that the business she ran with her husband was destroyed by the government. With the help of outside pressure from Pakistani diplomats, she was able to be released from the camps and eventually from China. Although she now safely resides in Virginia, Zumrat’s family and friends in East Turkestan will likely never see her again.',
    link: 'https://www.washingtonpost.com/video/world/first-she-survived-a-uighur-internment-camp-then-she-made-it-out-of-china/2019/11/17/a7a7639e-c003-4965-94a0-1944b5c40722_video.html',
  }
]

export {
  activists,
  journalists,
  stories
};