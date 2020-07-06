import React from 'react';

const whiteHouseMessage = (name, location) => (
  <div>
    <p>
      Dear President Trump,
    </p>
    <br />
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

const mediaMessTime = (name, location) => (
  <div>
    <p>
      Dear TIME Magazine,
    </p>
    <br />
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

const mediaMess60 = (name, location) => (
  <div>
    <p>
      Dear 60 Minutes,
    </p>
    <br />
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

const congressS398 = (repName, name, location) => (
  <div>
    <p>
      Dear {repName || '[INSERT SENATOR]'},
    </p>
    <br />
    <p>
      <b>I am writing to urge you to vote for S. 398, the Saudi Arabia Accountability and Yemen Act of 2019.</b> The humanitarian crisis in Yemen, the worst crisis in the world, has been primarily and directly caused by the Saudi coalition’s airstrikes, naval blockade on Yemen, and destruction of Yemeni ports. We need to do all we can to stop US backing of the Saudi coalition in Yemen.
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
      The United States sends more weapons to Saudi Arabia than any other nation. This is unacceptable. Passing S. 398 means that the United States can no longer authorize transfers to Saudi Arabia of missiles, ammunition, ground vehicles, aircraft, or other weapons that fall within Categories III, IV, VII, or VIII of the U.S. Munitions List. Do the right thing. Please save lives by voting for S. 398.
    </p>
    <br />
    <p>
      <b>Please vote for S. 398, the Saudi Arabia Accountability and Yemen Act of 2019.</b>
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

const congressHR910 = (repName, name, location) => (
  <div>
    <p>
      Dear {repName || '[INSERT HOUSE REP NAME]'},
    </p>
    <br />
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

const congressHJ56 = (repName, name, location) => (
  <div>
    <p>
      Dear {repName || '[INSERT HOUSE REP NAME]'},
    </p>
    <br />
    <p>
      <b>I’m contacting you to urge you to cosponsor, vote for, and pass H.J.Res. 56: Directing the President to terminate the use of the United States Armed Forces with respect to the military intervention led by Saudi Arabia in the Republic of Yemen.</b> The humanitarian crisis in Yemen, the worst crisis in the world, has been primarily and directly caused by the Saudi coalition’s airstrikes, naval blockade on Yemen, and destruction of Yemeni ports. We need to do all we can to stop US backing of the Saudi coalition in Yemen.
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
  congressS398,
  congressHR910,
  congressHJ56,
};
