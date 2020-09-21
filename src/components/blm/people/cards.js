import React from 'react';

// images
import * as angela from './images/AngelaDavis.png';
import * as cullors from './images/PatriseCullors.png';
import * as garza from './images/AliciaGarza.png';
import * as mckesson from './images/DerayMckesson.png';
import * as packnett from './images/BrittanyPacknett.png';
import * as elzie from './images/JohnettaElzie.png';
import * as sinyanwe from './images/SamuelSinyangwe.png';
import * as johnson from './images/MarissaJohnson.png';
import * as newsome from './images/BreeNewsome.png';
import * as mallory from './images/TamikaMallory.png';
import * as robinson from './images/RashadRobinson.png';
import * as sarsour from './images/LindaSarsour.png';
import * as mccarrel from './images/MashawnMcCarrel.png';
import * as moye from './images/MuhiyindinMoye.png';

const activists = [
  {
    header: 'Patrisse Cullors',
    image: cullors,
    content: (
      <div>
        <p>
        Patrisse Cullors is a co-founder of the Black Lives Matter movement. She advocates for the abolition of prisons in Los Angeles as executive director of the L.A. Coalition to End Violence in Jails. The group proposed a legislative commission that would oversee the Los Angeles County Sheriff’s Department with a goal to reduce police brutality. Cullors co-founded the Dignity and Power Now, a jail lobbying organization that serves to advocate for a national advisory council. She was also a board member of the Ella Baker Center for Human Rights, having led a think tank for the 2014 Without Borders Conference. She created the hashtag #BlackLivesMatter and won numerous awards in 2015 for activism such as an NAACP History Maker. 
        </p>
      </div>
    ),
  },
  {
    header: 'Alicia Garza',
    image: garza,
    content: (
      <div>
        <p>
            Alicia Garza is a co-founder of the Black Lives Matter. Garza has also won the Justice Seekers Glamour Awards. She has helped coordinate the very first 2002 Women of Color Conference, a university-wide meeting that took place at UCSD. Garza created Black Labin 2018, which aims is to partner alongside community organizations to support black communities developing strategies. It utilizes surveys that examine topics such as political beliefs, community engagement, experiences of inequality and police violence and abuse, perceptions of civic demonstrations, access to healthcare and economic well-being, the results are also used to identify important policy and regulatory concerns.        </p>
      </div>
    ),
  },
  {
    header: 'DeRay Mckesson',
    image: mckesson,
    content: (
      <div>
        <p>
            DeRay Mckesson was an early member of the Black Lives Matter Movement who was involved in the Ferguson, Missouri, and Baltimore, Maryland marches and social networking sites including Twitter and Instagram. Along with Johnetta Elzie, Brittany Packnett, and Samuel Sinyangwe, Mckesson introduced Campaign Zero, an advocacy forum to stop excessive brutality. Some main issues covered by Campaign Zero include the decriminalization of trespassing, distribution of drugs, loitering, public nuisance, and drinking of beverages in public as such offenses do not endanger public protection but are used to intimidate African Americans. In July 2017, Baton Rouge police charged Mckesson, who suffered life-altering injury in an arson assault, alleging that Black Lives Matter “incited the violence against police in retaliation for the death of black men shot by police”.         
        </p>
      </div>
    ),
  },
  {
    header: 'Brittany Packnett',
    image: packnett,
    content: (
      <div>
        <p>
            Brittany Packnett is the co-founder of Campaign Zero and co-host of Pod Save the People, an American activist show. She was a part of Obama’s 21st Century Policing Task Force, under President Barack Obama’s presidency. She was Teach for America’s executive director in St. Louis, she was active in the rallies that occurred when a police officer murdered young Michael Brown, and used Facebook and other social outlets to push back against the false image that the media created about the rallies. Packnett was a prominent Black Twitter icon, where she spoke about employment, civil rights, and fair pay. In an appearance on MSNBC in May 2020 regarding Ahmaud Arbery’s death, Oacknett said, “America needs to ask itself why only a viral consumption of black suffering can actually bring action”.        </p>
      </div>
    ),
  },
  {
    header: 'Johnetta Elzie',
    image: elzie,
    content: (
      <div>
        <p>
        Johnetta Elzie is one of the leaders in the activist group We The Protestors and co-edits the Ferguson protest newsletter This Is The Movement with fellow activist DeRay Mckesson. She became involved with activism following the shooting of Michael Brown. In January 2015 The Atlantic named her one of the leaders of the Black Lives Matter Movement and The Los Angeles Times has named Elzie to its list of “The new civil rights leaders: Emerging voices in the 21st Century”. Elzie has also been a  field organizer for Amnesty International, and has volunteered with a girls group called the Sophia Project in St. Louis.         </p>
      </div>
    ),
  },
  {
    header: 'Samuel Sinyanwe',
    image: sinyanwe,
    content: (
      <div>
        <p>
        Samuel Sinyanwe is a multicultural protester and American political analyst. He is also a leader of the Black Lives Matter Movement and a co-founder of We the Protesters, a collection of multimedia platforms to map police violence. Sinyanwe is a co-host of Pod Save the People show, a show featuring a group of other progressives debating the week’s coverage. Sinyangwe also works as a data scientist with OutStates.org (a state legislature-oriented organization) and created the Resistance Manual with Mckesson and Brittney Packnett, an open-source initiative intended to link anti-racists with activists focusing on interesting topics.         </p>
      </div>
    ),
  },
  {
    header: 'Marissa Johnson',
    image: johnson,
    content: (
      <div>
        <p>
            Marissa Johnson is a member of Outside Agitators 206, an advocacy organization founded in Seattle that was dissolved after she was co-chair of Black Lives Matter’s Seattle branch during September 2015. In December 2015, Seattle political analyst Maria Tomchich described Johnson as an integral part of the “biggest news story of 2015”, the extension of Black Lives Matter campaign onto the mainstream political landscape, as a consequence of the interruption of Bernie Sanders’ speech.         </p>
      </div>
    ),
  },
  {
    header: 'Bree Newsome',
    image: newsome,
    content: (
      <div>
        <p>
        Bree Newsome is a producer, artist, writer and protester. She is well recognized for her act of protest on June 27, 2015, when she was charged in the wake of the Charleston Shooting for taking the Confederate flag from South Carolina state house grounds. The ensuing outrage forced state authorities to drop the flag, and on July 10, 2015, it was officially taken down. She gave interviews to publications and magazines like The Crisis, Vox and Marie Claire, made statements on tv, and delivered public remarks at universities and other venues.         
        </p>
      </div>
    ),
  },
  {
    header: 'Tamika Mallory',
    image: mallory,
    content: (
      <div>
        <p>
        Tamika Mallory is one of the 2017 Women’s March’s main promoters, for which she and her three other co-chairs were honored at that year’s Time 100. Mallory is a supporter of weapons control, feminism, and the activism surrounding Black Lives Matter. At 11, she started her interest in politics by becoming a part of NAN, a community advocacy network to know more about the civil rights movement and in 2011 she became the youngest executive director at the NAN. she helped develop the NYC Crisis Management System in 2014, an approved gun violence reduction initiative that provides $20 million annually to groups seeking to combat gun abuse. On January 21, 2017, Mallory, Bob Bland, Carmen Perez, and Linda Sarsour led the 2017 Women’s March rally around the globe. The march was a demonstration against President Donald Trump's U.S. inauguration, and promoted women’s empowerment, legal reform, LGBTIA+ rights, educational care, economic change, social inequality, and racial justice.         </p>
      </div>
    ),
  },
  {
    header: 'Rashad Robinson',
    image: robinson,
    content: (
      <div>
        <p>
            Rashad Robinson is a pioneer in human rights and a charity founder. He serves as president of Color of Change, entering the association in May 2011 and acting as a board member for RaveForward, Demos, State Voices and the Hazen Foundation. Under Robinson’s leadership, Color of Change rose by one million people, growing to four branches in New York, Washington D.C., Los Angeles, and Oakland, California.         </p>
      </div>
    ),
  },
  {
    header: 'Linda Sarsour',
    image: sarsour,
    content: (
      <div>
        <p>
            Linda Sarsour was co-chair of the 2017 Women’s March, the 2017 Day Without a Woman. Sarsour initially received notoriety for opposing American Muslims police repression, subsequently getting active with many human rights concerns such as racial abuse, racism, foreign reform, and mass incarceration. She has led protests for Black Lives Matter and was the sole plaintiff in a case opposing the Trump immigration ban’s legitimacy. In 2012 the White House honored Sarsour as a Champion of Change under Barack Obama’s administration. Sarouer helped lead demonstrations over Black Lives Matter in 2014. Sarsour helped create “Muslims for Ferguson,” and she traveled with other demonstrators to Ferguson, and has since continued to work widely with BLM.         </p>
      </div>
    ),
  },
  {
    header: 'Angela Davis',
    image: angela,
    content: (
      <div>
        <p>
          Angela Davis is an American political activist, professor, philosopher, and journalist. Davis is a founding member of the Committees of Correspondence for Democracy and Socialism. Davis was active in various movements, such as the second-wave feminist movement, the Black Panther Party, and anti-Vietnam War campaigns. Most of her research focused on abolishing prisons and she co-founded Critical Resistance, a group working to dismantle the prison-industrial complex. Davis was an honorary co-chair of the Women's March in Washington, January 21, 2017, which happened the day after the inauguration of President Trump. Davis was active in the second-wave feminist movement, the Black Panther Party, and anti-Vietnam War campaigns. She co-founded Critical Resistance, a group working to dismantle the prison-industrial complex. Davis was an honorary co-chair of the Women’s March in Washington. 
        </p>
      </div>
    )
  },
  {
    header: 'Marshawn McCarrel',
    image: mccarrel,
    content: (
      <div>
        <p>
        Marshawn McCarrel was a well-known protester for Black Lives Matter. McCarrel created Pursuing Our Dreams, an organization that coordinated weekly “ feed the streets” gatherings to include prepared lunches for homeless people. He was one of the activists who helped to organize a massive, multi-organization rally named “Freedom Summer” in 2014, plans that were eventually abandoned when a white policeman shot and killed Michael Brown.         </p>
      </div>
    ),
  },
  {
    header: 'Muhiyindin Moye',
    image: moye,
    content: (
      <div>
        <p>
        In February 2017, Muhiyindin Moye was a prominent black Lives Matter protester known nationwide for breaching a yellow police tape line to remove a Confederate flag from a live television demonstrator in Charleston, South Carolina. In 2016, Moye was detained for disturbing a committee meeting of the North Charleston City Council when petitioning for a commission of people to investigate police conduct. The town then created the Citizens Advisory Commission on Community-Police Relations.        </p>
      </div>
    ),
  },
  
]

export {
  activists
};