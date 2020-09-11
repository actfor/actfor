import React from 'react';

const noPendingBills = (name, location, custom) => (
  <div>
    <p>To Whom This May Concern,</p>
    {custom && <p>{custom}</p>}
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
    {custom && <p>{custom}</p>}
    <p>
      My name is {name || '[INSERT YOUR NAME]'}, and I urge you to cosponsor and pass {createBillString(bills) || 'legislation'}. This is a great first step towards comprehensive police reform.
    </p>
    <p>
      I also urge you to pass legislation that will divest from police funding and instead invest in community resources for Black and marginalized communities. Funding community resources plays a large role in Black empowerment. From there, we can begin to dismantle the centuries of systemic oppression this country has imposed on Black people.
    </p>
    <p>
      Please address systemic racism in your future legislation and policies. Racism is prevalent in our healthcare, education, economic, and law enforcement systems. Redlining, the racial wealth gap, environmental racism, and mass incarceration are still huge issues for Black communities today. We need to acknowledge and address the centuries long oppression of the Black community from which our country was founded.
    </p>
    {createBillString(bills) &&
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
    {custom && <p>{custom}</p>}
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
    {custom && <p>{custom}</p>}
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
    {custom && <p>{custom}</p>}
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
    {custom && <p>{custom}</p>}
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

// CASE DEMAND MESSAGES


const caseMcatee = (name, location, custom, bills) => (
  <div>
    <p>Dear Representative,</p>
    {custom && <p>{custom}</p>}
    <p>
      My name is {name || '[INSERT YOUR NAME]'}, and I demand justice for the racist murder of  David Mcattee. I demand that all officers involved in the murder are arrested, charged, and convicted, there is an appointment of a citizen review panel with subpoena power to investigate the murders, and that the mayor immediately fire the officers involved responsible for the murder of David Mcattee.
    </p>
    <p>
      This is one of countless racist hate crimes, an abuse of power, and it should never happen again. Systemic change must also happen in police departments in Kentucky to prevent police brutality. Please divest from the police and invest in community alternatives.
    </p>
    <p>
      {name || '[INSERT YOUR NAME]'}
    </p>
    <p>
      {location || '[STATE, ZIPCODE]'}
    </p>
  </div>
)

const caseMcdade = (name, location, custom, bills) => (
  <div>
    <p>Dear Representative,</p>
    {custom && <p>{custom}</p>}
    <p>
      My name is {name || '[INSERT YOUR NAME]'}, and I demand justice for the murder of Tony McDade. I demand that Police Chief Lawrence Revell is removed, all the police officers involved are arrested, charged, and convicted, all body camera footage is released, that there is a response from the Mayor, City Commission, and the Mayor’s “LGBTQ Advisory Board”, and that the TPD Citizens Advisory Committee is dissolved and replaced with a free elected Citizens Police Accountability Council. This is one of countless hate crimes, an abuse of power, and it should never happen again. Systemic change must also happen in the police department in Tallahassee to prevent police brutality. Please divest from the police and invest in community alternatives.
    </p>
    <p>
      {name || '[INSERT YOUR NAME]'}
    </p>
    <p>
      {location || '[STATE, ZIPCODE]'}
    </p>
  </div>
)

const caseArbery = (name, location, custom, bills) => (
  <div>
    <p>Dear Representative,</p>
    {custom && <p>{custom}</p>}
    <p>
      My name is {name || '[INSERT YOUR NAME]'}, and I demand justice and change for the murder of Ahmaud Arbery. I demand  immediate resignation of District Attorneys Jackie Johnson and George Barnhill, that all officers involved in the murder of Ahmaud Arbery are charged and convicted for murder, and complete repeal of Georgia’s Citizens Arrest Statute (OCGA 17-4-60).
    </p>
    <p>
      This is one of countless racist hate crimes, an abuse of power, and it should never happen again. Systemic change must also happen in the police department in Georgia to prevent police brutality. Please divest from the police and invest in community alternatives.

    </p>
    <p>
      {name || '[INSERT YOUR NAME]'}
    </p>
    <p>
      {location || '[STATE, ZIPCODE]'}
    </p>
  </div>
)

const caseReed = (name, location, custom, bills) => (
  <div>
    <p>Dear Representative,</p>
    {custom && <p>{custom}</p>}
    <p>
      My name is {name || '[INSERT YOUR NAME]'}, and I demand justice for the racist murder of Sean Reed. I demand that all officers involved in the murder are arrested, charged, and convicted. This is one of countless racist hate crimes, an abuse of power, and it should never happen again. Systemic change must also happen in the police department in Indiana to prevent police brutality in the future. Please divest from the police and invest in community alternatives.
    </p>
    <p>
      {name || '[INSERT YOUR NAME]'}
    </p>
    <p>
      {location || '[STATE, ZIPCODE]'}
    </p>
  </div>
)

const caseBlake = (name, location, custom, bills) => (
  <div>
    <p>Dear Representative,</p>
    {custom && <p>{custom}</p>}
    <p>
      My name is {name || '[INSERT YOUR NAME]'}, and I demand justice for the racist police brutality against Jacob Blake. I demand that all officers involved, especially Luke Courtier, in the murder are fired, arrested, charged, and convicted. This is one of countless racist hate crimes, an abuse of power, and it should never happen again. Systemic change must also happen in the police department in Wisconsin to prevent police brutality in the future. Please divest from the police and invest in community alternatives.
    </p>
    <p>
      {name || '[INSERT YOUR NAME]'}
    </p>
    <p>
      {location || '[STATE, ZIPCODE]'}
    </p>
  </div>
)

const caseHollowell = (name, location, custom, bills) => (
  <div>
    <p>Dear Representative,</p>
    {custom && <p>{custom}</p>}
    <p>
      My name is {name || '[INSERT YOUR NAME]'}, and I demand justice for the racist assault and critical injury of Justin Hollowell. I demand that Austin Mayor Steve Adler, City Manager Spencer Cronk, and Austin City Council Members fire Austin Police Chief Brian Manley, and I demand the immediate implementation of training reforms about de-escalation.
    </p>
    <p>
      This is one of countless racist hate crimes, an abuse of power, and it should never happen again. Systemic change must also happen in Texas, starting from the government and positions of power, to prevent racism and hate crimes in the future. Please divest from the police and invest in community alternatives.
    </p>
    <p>
      {name || '[INSERT YOUR NAME]'}
    </p>
    <p>
      {location || '[STATE, ZIPCODE]'}
    </p>
  </div>
)

const caseTaylor = (name, location, custom, bills) => (
  <div>
    <p>Dear Representative,</p>
    {custom && <p>{custom}</p>}
    <p>
      My name is {name || '[INSERT YOUR NAME]'}, and I demand justice and change for the racist murder of Breonna Taylor. From you and other Kentucky government officials, I demand the following:
    </p>
    <p>
      We demand that you fire and revoke the pensions of the officers that murdered Breonna. Arrest, charge, and convict John Mattingly, Detective Brett Hankinson, and Detective Miles Cosgrove for manslaughter and negligence. Ensure the newly requested special prosecutor, State AG Daniel Cameron, seeks full transparency and accountability. We demand that a special prosecutor be appointed to investigate the Louisville Police Department immediately. We demand that you create policies for transparent investigation due to law enforcement misconduct. We demand that you provide all necessary information to a local, independent civilian community police accountability council #CPAC.
    </p>
    <p>
      This is one of countless racist hate crimes, an abuse of power, and it should never happen again. Systemic change must also happen in the police department in Kentucky to prevent police brutality in the future. We demand justice for Breonna Taylor. You cannot shoot an innocent civilian and call it a “clerical error”-- we will not have it. Please divest from the police and invest in community alternatives.
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
  caseMcatee,
  caseMcdade,
  caseArbery,
  caseReed,
  caseBlake,
  caseHollowell,
  caseTaylor
}
