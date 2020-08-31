import React from 'react';

const noPendingBills = (name, location, custom) => (
  <div>
    <p>To Whom This May Concern,</p>
    { custom && <p>{custom}</p> }
    <p>
      My name is {name || '[INSERT YOUR NAME]'}, and I urge you to pass legislation that will divest from police funding and instead invest in community resources for Black and marginalized communities. Funding community resources plays a large role in Black empowerment. From there, we can begin to dismantle the centuries of systemic oppression this country has imposed on Black people.
    </p>
    <p>
      In general, I ask that you address systemic racism in your future legislation and policies. Racism is prevalent in our healthcare, education, economic, and law enforcement systems. Redlining, the racial wealth gap, environmental racism, and mass incarceration are still huge issues for Black communities today. We need to acknowledge and address the centuries long oppression of the Black community from which our country was founded.
    </p>
    <p>Thank you,</p>
    <p>
      {name || '[INSERT YOUR NAME]'}
    </p>
    <p>
      {location || '[STATE, ZIPCODE]'}
    </p>
  </div>
);

const pendingBills = (name, location, custom, bills) => (
  <div>
    <p>To Whom This May Concern,</p>
    { custom && <p>{custom}</p> }
    <p>
      My name is {name || '[INSERT YOUR NAME]'}, and I urge you to cosponsor and pass { createBillString(bills) || 'legislation'}. This is a great first step towards comprehensive police reform.
    </p>
    <p>
      I also urge you to pass legislation that will divest from police funding and instead invest in community resources for Black and marginalized communities. Funding community resources plays a large role in Black empowerment. From there, we can begin to dismantle the centuries of systemic oppression this country has imposed on Black people.
    </p>
    <p>
      Please address systemic racism in your future legislation and policies. Racism is prevalent in our healthcare, education, economic, and law enforcement systems. Redlining, the racial wealth gap, environmental racism, and mass incarceration are still huge issues for Black communities today. We need to acknowledge and address the centuries long oppression of the Black community from which our country was founded.
    </p>
    { createBillString(bills) &&
      <p>Please <b>cosponsor and pass {createBillString(bills)}.</b></p>
    }
    <p>Thank you,</p>
    <p>
      {name || '[INSERT YOUR NAME]'}
    </p>
    <p>
      {location || '[STATE, ZIPCODE]'}
    </p>
  </div>
)

const congressHR1027 = (name, location, custom, bills) => (
  <div>
    <p>Dear Representative,</p>
    { custom && <p>{custom}</p> }
    <p>
      My name is {name || '[INSERT YOUR NAME]'}, and I urge you to help introduce, cosponsor and pass H.Res. 1027: “Expressing the sense of the House of Representatives that the wrongs and hardships of Black women are often equal to those experienced by Black men yet receive less attention and justice, and that any legislation passed in the House of Representatives to remedy racial inequities in the United States, especially those present in the criminal justice system, must include reforms to address concerns for Black women.” This bill is a great first step to comprehensively address the centuries of systemic racism this country has imposed on our Black communities. When passing legislation, congress must also understand the intersectionality of the Black Lives Matter movement and feminism.
    </p>
    <p>
      I also urge you to pass legislation that will divest from police funding and instead invest in community resources for Black and marginalized communities. Funding community resources plays a large role in Black empowerment. From there, we can begin to dismantle the centuries of systemic oppression this country has imposed on Black people.
    </p>
    <p>
      {name || '[INSERT YOUR NAME]'}
    </p>
    <p>
      {location || '[STATE, ZIPCODE]'}
    </p>
  </div>
)

const congressS3912 = (name, location, custom, bills) => (
  <div>
    <p>Dear Senator,</p>
    { custom && <p>{custom}</p> }
    <p>
      My name is {name || '[INSERT YOUR NAME]'}, and I’m contacting you to urge you to cosponsor and pass S. 3912: Justice in Policing Act of 2020, to hold law enforcement accountable for racial profiling and the use of excessive and militarized tactics throughout the country. This is a great first step towards comprehensive police reform.
    </p>
    <p>
      I also urge you to pass legislation that will divest from police funding and instead invest in community resources for Black and marginalized communities. Funding community resources plays a large role in Black empowerment. From there, we can begin to dismantle the centuries of systemic oppression this country has imposed on Black people.
    </p>
    <p>
      {name || '[INSERT YOUR NAME]'}
    </p>
    <p>
      {location || '[STATE, ZIPCODE]'}
    </p>
  </div>
)

const congressBreathe = (name, location, custom, bills) => (
  <div>
    <p>Dear Representative,</p>
    { custom && <p>{custom}</p> }
    <p>
      My name is {name || '[INSERT YOUR NAME]'}, and I urge you to help introduce, cosponsor and pass The BREATHE Act: a visionary bill that divests our taxpayer dollars from brutal and discriminatory policing and invests in a new vision of public safety—a vision that answers the call to defund the police and allows all communities to finally BREATHE free. This bill, introduced by Representative Ayanna Pressley and Representative Rashida Talib, is a great first step towards comprehensive police reform.
    </p>
    <p>
      I also urge you to pass legislation that will divest from police funding and instead invest in community resources for Black and marginalized communities. Funding community resources plays a large role in Black empowerment. From there, we can begin to dismantle the centuries of systemic oppression this country has imposed on Black people.
    </p>
    <p>
      {name || '[INSERT YOUR NAME]'}
    </p>
    <p>
      {location || '[STATE, ZIPCODE]'}
    </p>
  </div>
)

const congressHR988 = (name, location, custom, bills) => (
  <div>
    <p>Dear Representative,</p>
    { custom && <p>{custom}</p> }
    <p>
      My name is {name || '[INSERT YOUR NAME]'}, and I’m contacting you to urge you to cosponsor and pass House Resolution 988: Condemning all acts of police brutality, racial profiling, and the use of excessive and militarized force throughout the country. This is a great first step towards comprehensive police reform.
    </p>
    <p>
      I also urge you to pass legislation that will divest from police funding and instead invest in community resources for Black and marginalized communities. Funding community resources plays a large role in Black empowerment. From there, we can begin to dismantle the centuries of systemic oppression this country has imposed on Black people.
    </p>
    <p>
      {name || '[INSERT YOUR NAME]'}
    </p>
    <p>
      {location || '[STATE, ZIPCODE]'}
    </p>
  </div>
)

const createBillString = bills => {
  if (bills.length == 0) {
    return false;
  }
  let string = '';
  string = string.concat(bills[0])
  if (bills.length == 1) {
    return string;
  }
  for (let i = 1; i < bills.length; i++) {
    string = string.concat(',')
    if (i == bills.length - 1) {
      string = string.concat(' and')
    }
    string = string.concat(` ${bills[i]}`)
  }
  return string;
}

export {
  noPendingBills,
  pendingBills,
  congressHR1027,
  congressS3912,
  congressBreathe,
  congressHR988,
}
