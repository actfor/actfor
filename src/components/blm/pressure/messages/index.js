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
}