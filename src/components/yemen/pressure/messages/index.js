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

export {
  whiteHouseMessage,
};
