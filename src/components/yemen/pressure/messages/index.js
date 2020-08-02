import React from 'react';

const whiteHouseMessage = (name, location, custom) => (
  <div>
    <p>
      Dear President Trump,
    </p>
    <br />
    { custom && <p>{custom}</p> }
    <p>
      <b>I am writing to urge you to stop United States funding and support of the Saudi Arabia led coalition for their violence in Yemen. I strongly oppose your veto of S.J.Res. 7: A joint resolution to direct the removal of United States Armed Forces from hostilities in the Republic of Yemen that have not been authorized by Congress. </b> The humanitarian crisis in Yemen, the worst crisis in the world, has been primarily and directly caused by the Saudi coalition’s airstrikes, naval blockade on Yemen, and destruction of Yemeni ports. We need to do all we can to stop US backing of the Saudi coalition in Yemen.
    </p>
    <br />
    <p>
      The man-made crisis in Yemen is the world’s worst catastrophe. Over 24 million people in Yemen desperately need aid, of which 12.2 million are children. 3.2 million people have “acute malnutrition”, including two million children under five and one million pregnant and lactating women. 17.8 million people lack water and sanitation, resulting in the world's fastest cholera epidemic. 14.8 million people lack access to healthcare. 10 million people are expected to starve by the end of the year.
    </p>
    <br />
    <p>
      United States support of Saudi Arabia is unacceptable. It means that the United States partakes in the unspeakable violence caused by the Saudi-led coalition. By enforcing a naval blockade, destroying ports, and launching airstrikes, the US-backed coalition has prevented critical humanitarian aid from reaching Yemen. Because Yemen imports 90 percent of its food, even before the onset of the war, imposing a blockade means that little to no aid reaches a starving country.
    </p>
    <br />
    <p>
      The United States sends more weapons to Saudi Arabia than any other nation. This is unacceptable. Do the right thing. <b>Please save lives by ending US support for Saudi intervention in Yemen.</b>
    </p>
    <br />
    <p>
      Thank you,
    </p>
    <p>
      {name || '[INSERT YOUR NAME]'}
    </p>
    <p>
      {location || '[STATE, ZIPCODE]'}
    </p>
  </div>
)

const mediaMessTime = (name, location, custom) => (
  <div>
    <p>
      Dear TIME Magazine,
    </p>
    <br />
    { custom && <p>{custom}</p> }
    <p>
      I’m writing because your feature with Muhmmad Bin Salman (MBS) on TIME Magazine is unacceptable. MBS is a serial human rights abuser. In addition to being the architect of Saudi Arabia's involvement in Yemen’s catastrophic war, MBS has a history of arresting and murdering political rivals, dissenters, and reporters who otherwise would have been able to provide real information on Yemen to the international community. MBS is responsible for the humanitarian crisis in Yemen. He should not be viewed favorably in our press.
    </p>
    <br />
    <p>
      In 2018, TIME magazine featured MBS on their front cover and had an interview with the dictator after he passed a law allowing women to drive in Saudi Arabia. This was only a distraction from the real violence he has committed. The humanitarian crisis in Yemen, the worst crisis in the world, has been primarily and directly caused by the Saudi coalition’s airstrikes, naval blockade on Yemen, and destruction of Yemeni ports.
    </p>
    <br />
    <p>
      The man-made crisis in Yemen is the world’s worst catastrophe. Over 24 million people in Yemen desperately need aid, of which 12.2 million are children. 3.2 million people have “acute malnutrition”, including two million children under five and one million pregnant and lactating women. 17.8 million people lack water and sanitation, resulting in the world's fastest cholera epidemic. 14.8 million people lack access to healthcare. 10 million people are expected to starve by the end of the year.
    </p>
    <br />
    <p>
      TIME magazine has a responsibility to accurately portray MBS’s heinous acts. They also must accurately portray the situation in Yemen. <b>I urge you to put more effort into reporting activists in Yemen who are doing all they can to alleviate the humanitarian crisis.</b> Effective, critical, and accurate reporting can make a huge difference in resolving Yemen’s disaster.
    </p>
    <br />
    <p>
      Thank you,
    </p>
    <p>
      {name || '[INSERT YOUR NAME]'}
    </p>
    <p>
      {location || '[STATE, ZIPCODE]'}
    </p>
  </div>
)

const mediaMess60 = (name, location, custom) => (
  <div>
    <p>
      Dear 60 Minutes,
    </p>
    <br />
    { custom && <p>{custom}</p> }
    <p>
      I’m writing because your feature with Muhmmad Bin Salman (MBS) on 60 Minutes is unacceptable. MBS is a serial human rights abuser. In addition to being the architect of Saudi Arabia's involvement in Yemen’s catastrophic war, MBS has a history of arresting and murdering political rivals, dissenters, and reporters who otherwise would have been able to provide real information on Yemen to the international community. MBS is responsible for the humanitarian crisis in Yemen. He should not be viewed favorably in our press.
    </p>
    <br />
    <p>
      In 2018, 60 Minutes had an interview with MBS after he passed a law allowing women to drive in Saudi Arabia. It was thought that MBS could be a progressive voice for Saudi Arabia, but this is only a distraction from the real violence he has committed. The humanitarian crisis in Yemen, the worst crisis in the world, has been primarily and directly caused by the Saudi coalition’s airstrikes, naval blockade on Yemen, and destruction of Yemeni ports.
    </p>
    <br />
    <p>
      The man-made crisis in Yemen is the world’s worst catastrophe. Over 24 million people in Yemen desperately need aid, of which 12.2 million are children. 3.2 million people have “acute malnutrition”, including two million children under five and one million pregnant and lactating women. 17.8 million people lack water and sanitation, resulting in the world's fastest cholera epidemic. 14.8 million people lack access to healthcare. 10 million people are expected to starve by the end of the year.
    </p>
    <br />
    <p>
      60 Minutes has a responsibility to accurately portray MBS’s heinous acts. They also must accurately portray the situation in Yemen. <b>I urge 60 Minutes to put more effort into reporting activists in Yemen who are doing all they can to alleviate the humanitarian crisis.</b> Effective, critical, and accurate reporting can make a huge difference in resolving Yemen’s disaster.
    </p>
    <br />
    <p>
      Thank you,
    </p>
    <p>
      {name || '[INSERT YOUR NAME]'}
    </p>
    <p>
      {location || '[STATE, ZIPCODE]'}
    </p>
  </div>
)

const congressS243 = (name, location, custom) => (
  <div>
    <p>
      Dear Senator,
    </p>
    <br />
    { custom && <p>{custom}</p> }
    <p>
      <b>I am writing to urge you to vote for S.Res. 243: A resolution requesting information on Saudi Arabia’s human rights practices in Yemen pursuant to section 502B(c) of the Foreign Assistance Act of 1961.</b> The humanitarian crisis in Yemen, the worst crisis in the world, has been primarily and directly caused by the Saudi coalition’s airstrikes, naval blockade on Yemen, and destruction of Yemeni ports. We need to do all we can to stop US backing of the Saudi coalition in Yemen.
    </p>
    <br />
    <p>
      The man-made crisis in Yemen is the world’s worst catastrophe. Over 24 million people in Yemen desperately need aid, of which 12.2 million are children. 3.2 million people have “acute malnutrition”, including two million children under five and one million pregnant and lactating women. 17.8 million people lack water and sanitation, resulting in the world's fastest cholera epidemic. 14.8 million people lack access to healthcare. 10 million people are expected to starve by the end of the year.
    </p>
    <br />
    <p>
      United States support of Saudi Arabia is unacceptable. It means that the United States partakes in the unspeakable violence caused by the Saudi-led coalition. By enforcing a naval blockade, destroying ports, and launching airstrikes, the US-backed coalition has prevented critical humanitarian aid from reaching Yemen. Because Yemen imports 90 percent of its food, even before the onset of the war, imposing a blockade means that little to no aid reaches a starving country.
    </p>
    <br />
    <p>
      The United States sends more weapons to Saudi Arabia than any other nation. This is unacceptable. Passing S. Res. 243 means that the Department of State must transmit to the Senate a statement including (1) information on alleged Saudi Arabian human rights violations in Yemen; (2) a description of U.S. government steps to promote human rights as part of Saudi Arabia's activities in Yemen; (3) an assessment of whether security assistance to Saudi Arabia should be continued; and (4) other specified information related to Saudi Arabia, Yemen, and Israel. Do the right thing. Please save lives by voting for S. Res. 243.
    </p>
    <br />
    <p>
      <b>Please vote for S. Res. 243.</b>
    </p>
    <br />
    <p>
      Thank you,
    </p>
    <p>
      {name || '[INSERT YOUR NAME]'}
    </p>
    <p>
      {location || '[STATE, ZIPCODE]'}
    </p>
  </div>
)

const congressHR910 = (name, location, custom) => (
  <div>
    <p>
      Dear Representative,
    </p>
    <br />
    { custom && <p>{custom}</p> }
    <p>
      <b>I am writing to urge you to cosponsor, vote for, and pass H.R. 910, the Yemen Refueling Prohibition Act.</b> The humanitarian crisis in Yemen, the worst crisis in the world, has been primarily and directly caused by the Saudi coalition’s airstrikes, naval blockade on Yemen, and destruction of Yemeni ports. We need to do all we can to stop US backing of the Saudi coalition in Yemen.
    </p>
    <br />
    <p>
      The man-made crisis in Yemen is the world’s worst catastrophe. Over 24 million people in Yemen desperately need aid, of which 12.2 million are children. 3.2 million people have “acute malnutrition”, including two million children under five and one million pregnant and lactating women. 17.8 million people lack water and sanitation, resulting in the world's fastest cholera epidemic. 14.8 million people lack access to healthcare. 10 million people are expected to starve by the end of the year.
    </p>
    <br />
    <p>
      United States support of Saudi Arabia is unacceptable. It means that the United States partakes in the unspeakable violence caused by the Saudi-led coalition. By enforcing a naval blockade, destroying ports, and launching airstrikes, the US-backed coalition has prevented critical humanitarian aid from reaching Yemen. Because Yemen imports 90 percent of its food, even before the onset of the war, imposing a blockade means that little to no aid reaches a starving country.
    </p>
    <br />
    <p>
      The United States sends more weapons to Saudi Arabia than any other nation. This is unacceptable. Passing H.R. 910 means that the United States is prohibited from obligating or expending federal funds to provide in-flight refueling for aircraft belonging to Saudi Arabia or the Saudi-led coalition as part of the ongoing military intervention in Yemen. Do the right thing. Please save lives by voting for H.R. 910.
    </p>
    <br />
    <p>
      <b>Please cosponsor, vote for, and pass H.R. 910, the Yemen Refueling Prohibition Act.</b>
    </p>
    <br />
    <p>
      Thank you,
    </p>
    <p>
      {name || '[INSERT YOUR NAME]'}
    </p>
    <p>
      {location || '[STATE, ZIPCODE]'}
    </p>
  </div>
)

const congressHJ56 = (name, location, custom) => (
  <div>
    <p>
      Dear Representative,
    </p>
    <br />
    { custom && <p>{custom}</p> }
    <p>
      <b />I am contacting you to urge that you co-sponsor or support the H.R. 1025: UIGHUR Act of 2019. It is imperative that we condemn the detention of Uyghur Muslims in Xinjiang and the cultural genocide of Uyghur Muslims. The United States must hold China accountable for the oppression of Uyghur Muslims and ensure that American-made technologies do not assist in mass detention and surveillance.
    </p>
    <br />
    <p>
      The man-made crisis in Yemen is the world’s worst catastrophe. Over 24 million people in Yemen desperately need aid, of which 12.2 million are children. 3.2 million people have “acute malnutrition”, including two million children under five and one million pregnant and lactating women. 17.8 million people lack water and sanitation, resulting in the world's fastest cholera epidemic. 14.8 million people lack access to healthcare. 10 million people are expected to starve by the end of the year.
    </p>
    <br />
    <p>
      United States support of Saudi Arabia is unacceptable. It means that the United States partakes in the unspeakable violence caused by the Saudi-led coalition. By enforcing a naval blockade, destroying ports, and launching airstrikes, the US-backed coalition has prevented critical humanitarian aid from reaching Yemen. Because Yemen imports 90 percent of its food, even before the onset of the war, imposing a blockade means that little to no aid reaches a starving country.
    </p>
    <br />
    <p>
      The United States sends more weapons to Saudi Arabia than any other nation. This is unacceptable. Passing H.R. 910 means that the United States is prohibited from obligating or expending federal funds to provide in-flight refueling for aircraft belonging to Saudi Arabia or the Saudi-led coalition as part of the ongoing military intervention in Yemen. Do the right thing. Please save lives by voting for H.R. 910.
    </p>
    <br />
    <p>
      <b>Please cosponsor, vote for, and pass H.R. 910, the Yemen Refueling Prohibition Act.</b>
    </p>
    <br />
    <p>
      Thank you,
    </p>
    <p>
      {name || '[INSERT YOUR NAME]'}
    </p>
    <p>
      {location || '[STATE, ZIPCODE]'}
    </p>
  </div>
)

export {
  whiteHouseMessage,
  mediaMessTime,
  mediaMess60,
  congressS243,
  congressHR910,
  congressHJ56,
};
