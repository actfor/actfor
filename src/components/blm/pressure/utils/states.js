const states = [
  {
    key: 'al', 
    value: 'al',
    text: 'Alabama',
    contact: [
      {
        text: 'Contact Page State Legislature',
        link: 'http://www.legislature.state.al.us/aliswww/ISD/ContactUs.aspx'
      },
      {
        text: 'Email House Information',
        link: 'http://www.legislature.state.al.us/aliswww/ISD/ContactPerson.aspx?NAME=House%20Information%20&EmailAdd=alis.test@alsenate.gov&OID_PERSON=0&SESSNAME=Regular%20Session%202021&imgURL=',
      },
      {
        text: 'Email Senate Information',
        link: 'http://www.legislature.state.al.us/aliswww/ISD/ContactPerson.aspx?NAME=Senate%20Information%20&EmailAdd=alis.test@alsenate.gov&OID_PERSON=0&SESSNAME=Regular%20Session%202021&imgURL=',
      },
      {
        text: 'Contact Governor of Alabama',
        link: 'https://contact.governor.alabama.gov/contact.aspx',
      }
    ]
  },
  {
    key: 'ak',
    value: 'ak',
    text: 'Alaska',
    contact: [
      {
        text: 'Alaska State Senate',
        link: 'http://akleg.gov/senate.php',
      },
      {
        text: 'Alaska State House',
        link: 'http://akleg.gov/house.php',
      },
      {
        text: 'Commissioner for Public Safety: dps.commissioner.office@alaska.gov',
        link: 'mailto:dps.commissioner.office@alaska.gov',
      },
      {
        text: 'Contact Governor of Alaska',
        link: 'https://aws.state.ak.us/CrmForms/Home/Feedback',
      }
    ],
  },
  {
    key: 'az',
    value: 'az',
    text: 'Arizona',
    contact: [
      {
        text: 'Arizona Senate',
        link: 'https://www.azleg.gov/MemberRoster/?body=S',
      },
      {
        text: 'Arizona House',
        link: 'https://www.azleg.gov/MemberRoster/?body=H',
      },
      {
        text: 'Contact Governor of Arizona',
        link: 'https://azgovernor.gov/engage/form/contact-governor-ducey',
      }
    ],
  },
  {
    key: 'ar',
    value: 'ar',
    text: 'Arkansas',
    contact: [
      {
        text: 'List of Legislators',
        link: 'https://www.arkleg.state.ar.us/Legislators/List?ddBienniumSession=2019%2F2019R',
      },
      {
        text: 'Contact Governor of Arkansas',
        link: 'https://governor.arkansas.gov/online-services/contact-us/',
      },
    ]
  },
  {
    key: 'ca',
    value: 'ca',
    text: 'California',
    contact: [
      {
        text: 'Senate Roster',
        link: 'https://www.senate.ca.gov/senators',
      },
      {
        text: 'Assembly Roster',
        link: 'https://www.assembly.ca.gov/assemblymembers',
      },
      {
        text: 'Contact Governor Newsom',
        link: 'https://govapps.gov.ca.gov/gov40mail/',
      },
    ]
  },
  {
    key: 'co',
    value: 'co',
    text: 'Colorado',
    contact: [
      {
        text: 'List of Legislators',
        link: 'http://leg.colorado.gov/legislators',
      },
      {
        text: 'Contact the Governor',
        link: 'https://www.colorado.gov/governor/contact-us',
      },
    ]
  },
  {
    key: 'ct',
    value: 'ct',
    text: 'Connecticut',
    contact: [
      {
        text: 'List of House Representatives',
        link: 'https://www.cga.ct.gov/asp/menu/hlist.asp',
      },
      {
        text: 'List of Senators',
        link: 'https://www.cga.ct.gov/asp/menu/slist.asp',
      },
      {
        text: 'Contact Governor of Connecticut',
        link: 'https://portal.ct.gov/Office-of-the-Governor/Contact/Email-Governor-Lamont',
      },
    ]
  },
  {
    key: 'de',
    value: 'de',
    text: 'Delaware',
    contact: [
      {
        text: 'List of Senators',
        link: 'https://legis.delaware.gov/Senate',
      },
      {
        text: 'List of House Representatives',
        link: 'https://legis.delaware.gov/House',
      },
      {
        text: 'Contact the Governor',
        link: 'https://governor.delaware.gov/email-governor-carney/',
      },
    ]
  },
  {
    key: 'dc',
    value: 'dc',
    text: 'District of Columbia',
    contact: [
      {
        text: 'Council Members',
        link: 'https://dccouncil.us/councilmembers/',
      },
    ]
  },
  {
    key: 'fl',
    value: 'fl',
    text: 'Florida',
    contact: [
      {
        text: 'List of Senators',
        link: 'https://www.flsenate.gov/Senators',
      },
      {
        text: 'List of House Representatives',
        link: 'https://www.myfloridahouse.gov/Representatives',
      },
    ]
  },
  {
    key: 'ga',
    value: 'ga',
    text: 'Georgia',
    contact: [
      {
        text: 'House Members List',
        link: 'http://www.house.ga.gov/Representatives/en-US/HouseMembersList.aspx',
      },
      {
        text: 'Senate Members List',
        link: 'http://www.senate.ga.gov/senators/en-US/SenateMembersList.aspx',
      },
    ]
  },
  {
    key: 'hi',
    value: 'hi',
    text: 'Hawaii',
    contact: [
      {
        text: 'List of Legislators',
        link: 'https://www.capitol.hawaii.gov/members/legislators.aspx?chamber=S',
      },
      {
        text: 'Contact the Governor',
        link: 'https://governor.hawaii.gov/contact-us/contact-the-governor/',
      },
    ]
  },
  {
    key: 'id',
    value: 'id',
    text: 'Idaho',
    contact: [
      {
        text: 'Contact Governor of Idaho',
        link: 'https://gov.idaho.gov/contact-us/',
      },
    ]
  },
  {
    key: 'il',
    value: 'il',
    text: 'Illinois',
    contact: [
      {
        text: 'List of Senators',
        link: 'https://www.ilga.gov/senate/',
      },
      {
        text: 'List of House Representatives',
        link: 'https://www.ilga.gov/house/',
      },
      {
        text: 'Contact the Governor',
        link: 'https://www2.illinois.gov/sites/gov/contactus/Pages/VoiceAnOpinion.aspx',
      },
    ]
  },
  {
    key: 'in',
    value: 'in',
    text: 'Indiana',
    contact: [
      {
        text: 'Indiana Senate Democrats',
        link: 'https://www.indianasenatedemocrats.org/senators/',
      },
      {
        text: 'Indiana Senate Republicans',
        link: 'https://www.indianasenaterepublicans.com/senators',
      },
      {
        text: 'Indiana House Democrats',
        link: 'https://indianahousedemocrats.org/members',
      },
      {
        text: 'Indiana House Republicans',
        link: 'https://www.indianahouserepublicans.com/members/',
      },
      {
        text: 'Contact Governor of Indiana',
        link: 'https://www.in.gov/gov/2752.htm',
      },
    ]
  },
  {
    key: 'ia',
    value: 'ia',
    text: 'Iowa',
    contact: [
      {
        text: 'List of Iowa Senators',
        link: 'https://www.legis.iowa.gov/legislators/senate',
      },
      {
        text: 'List of Iowa House Representatives',
        link: 'https://www.legis.iowa.gov/legislators/house',
      },
      {
        text: 'Contact Governor of Iowa',
        link: 'https://iqconnect.lmhostediq.com/iqextranet/EForm.aspx?__cid=FSL_IA_GOV&__fid=100007',
      },
    ]
  },
  {
    key: 'ks',
    value: 'ks',
    text: 'Kansas',
    contact: [
      {
        text: 'House Roster',
        link: 'http://www.kslegislature.org/li/b2019_20/chamber/house/roster/',
      },
      {
        text: 'Senate Roster',
        link: 'http://www.kslegislature.org/li/b2019_20/chamber/senate/roster/',
      },
      {
        text: 'Contact the Governor',
        link: 'https://governor.kansas.gov/questions_form/',
      },
    ]
  },
  {
    key: 'ky',
    value: 'ky',
    text: 'Kentucky',
    contact: [
      {
        text: 'Kentucky List of Senate',
        link: 'https://legislature.ky.gov/Legislators/senate',
      },
      {
        text: 'Kentucky List of House Representatives',
        link: 'https://legislature.ky.gov/Legislators/house-of-representatives',
      },
      {
        text: 'Contact Governor of Kentucky',
        link: 'https://governor.ky.gov/contact/contact-us',
      },
    ]
  },
  {
    key: 'la',
    value: 'la',
    text: 'Louisiana',
    contact: [
      {
        text: 'List of House Representatives',
        link: 'https://house.louisiana.gov/H_Reps/H_Reps_FullInfo',
      },
      {
        text: 'List of Senators',
        link: 'http://senate.la.gov/Senators/default.asp',
      },
      {
        text: 'Contact Governor of Louisiana',
        link: 'https://gov.louisiana.gov/index.cfm/form/home/4',
      },
    ]
  },
  {
    key: 'me',
    value: 'me',
    text: 'Maine',
    contact: [
      {
        text: 'List of Senators',
        link: 'http://legislature.maine.gov/senate/senators/9536',
      },
      {
        text: 'List of House Representatives',
        link: 'https://legislature.maine.gov/house/house/MemberProfiles/ListAlpha',
      },
      {
        text: 'Contact the Governor',
        link: 'https://www.maine.gov/governor/mills/contact/share-your-opinion',
      },
    ]
  },
  {
    key: 'md',
    value: 'md',
    text: 'Maryland',
    contact: [
      {
        text: 'Maryland Senator List',
        link: 'http://mgaleg.maryland.gov/mgawebsite/Members/Index/senate',
      },
      {
        text: 'Maryland House of Reps List',
        link: 'http://mgaleg.maryland.gov/mgawebsite/Members/Index/house',
      },
      {
        text: 'Governor of Maryland',
        link: 'https://governor.maryland.gov/',
      },
    ]
  },
  {
    key: 'ma',
    value: 'ma',
    text: 'Massachusetts',
    contact: [
      {
        text: 'Senate Members',
        link: 'https://malegislature.gov/Legislators/Members/Senate',
      },
      {
        text: 'House Members',
        link: 'https://malegislature.gov/Legislators/Members/House',
      },
      {
        text: 'Contact the Governor',
        link: 'https://www.mass.gov/forms/email-the-governors-office',
      },
    ]
  },
  {
    key: 'mi',
    value: 'mi',
    text: 'Michigan'
  },
  {
    key: 'mn',
    value: 'mn',
    text: 'Minnesota'
  },
  {
    key: 'ms',
    value: 'ms',
    text: 'Mississippi'
  },
  {
    key: 'mo',
    value: 'mo',
    text: 'Missouri'
  },
  {
    key: 'mt',
    value: 'mt',
    text: 'Montana'
  },
  {
    key: 'ne',
    value: 'ne',
    text: 'Nebraska'
  },
  {
    key: 'nv',
    value: 'nv',
    text: 'Nevada'
  },
  {
    key: 'nh',
    value: 'nh',
    text: 'New Hampshire'
  },
  {
    key: 'nj',
    value: 'nj',
    text: 'New Jersey'
  },
  {
    key: 'nm',
    value: 'nm',
    text: 'New Mexico'
  },
  {
    key: 'ny',
    value: 'ny',
    text: 'New York'
  },
  {
    key: 'nc',
    value: 'nc',
    text: 'North Carolina'
  },
  { 
    key: 'nd', 
    value: 'nd', 
    text: 'North Dakota' 
  },
  { 
    key: 'oh', 
    value: 'oh', 
    text: 'Ohio' 
  },
  { 
    key: 'ok', 
    value: 'ok', 
    text: 'Oklahoma' 
  },
  { 
    key: 'or', 
    value: 'or', 
    text: 'Oregon' 
  },
  { 
    key: 'pa', 
    value: 'pa', 
    text: 'Pennsylvania' 
  },
  { 
    key: 'ri', 
    value: 'ri', 
    text: 'Rhode Island' 
  },
  { 
    key: 'sc', 
    value: 'sc', 
    text: 'South Carolina' 
  },
  { 
    key: 'sd', 
    value: 'sd', 
    text: 'South Dakota' 
  },
  { 
    key: 'tn', 
    value: 'tn', 
    text: 'Tennessee' 
  },
  { 
    key: 'tx', 
    value: 'tx', 
    text: 'Texas' 
  },
  { 
    key: 'ut', 
    value: 'ut', 
    text: 'Utah' 
  },
  { 
    key: 'vt', 
    value: 'vt', 
    text: 'Vermont' 
  },
  { 
    key: 'va', 
    value: 'va', 
    text: 'Virginia' 
  },
  { 
    key: 'wa', 
    value: 'wa', 
    text: 'Washington' 
  },
  { 
    key: 'wv', 
    value: 'wv', 
    text: 'West Virginia' 
  },
  { 
    key: 'wi', 
    value: 'wi', 
    text: 'Wisconsin' 
  },
  { 
    key: 'wy', 
    value: 'wy', 
    text: 'Wyoming' 
  },
];

const isPendingBillState = state => {
  if (state === 'ca') {
    return [
      'CA A 329',
      'CA A 1196',
      'CA A 1314',
    ];
  }
  if (state === 'co') {
    return [
      'CO H 1393'
    ];
  }
  if (state === 'de') {
    return [
      'DE H 350'
    ];
  }
  if (state === 'dc') {
    return [
      'DC B 771'
    ];
  }
  if (state === 'ga') {
    return [
      'GA S 514',
      'GA S 525',
      'GA H 1204',
      'GA H 1207',
      'GA HR 1599',
    ];
  }
  if (state === 'hi') {
    return [
      'HI H 1278',
      'HI H 1901',
    ];
  }
  if (state === 'il') {
    return [
      'IL H 5810'
    ];
  }
  if (state === 'ks') {
    return [
      'KS H 2010',
      'KS HCR 5002',
    ];
  }
  if (state === 'me') {
    return [
      'ME H 812',
      'ME H 1208'
    ]
  }
  if (state === 'ma') {
    return [
      'MA S 2820',
      'MA H 2141',
    ]
  }
  if (state === 'mi') {
    return [
      'MI H 5832',
      'MI H 5837',
    ];
  }
  if (state === 'mn') {
    return [
      'MN H 1',
      'MN H 3',
      'MN H 27',
    ];
  }
  if (state === 'nv') {
    return [
      'NV BDR 106'
    ];
  }
  if (state === 'nj') {
    return [
      'NJ S 2581',
      'NJ SJR 84',
      'NJ S 2581',
      'NJ S 2589',
    ];
  }
  if (state === 'nm') {
    return [
      'NM SM 1'
    ];
  }
  if (state === 'ny') {
    return [
      'NY A 1601',
      'NY S 2575',
      'NY S 8495',
      'NY S 8580',
      'NY S 8626',
      'NY S 8668',
      'NY A 10755'
    ];
  }
  if (state === 'oh') {
    return [
      'OH H 706',
      'OH H 709',
      'OH H 720',
    ];
  }
  if (state === 'or') {
    return [
      'OR D 78',
      'OR D 80',
    ];
  }
  if (state === 'pa') {
    return [
      'PA S 459',
      'PA S 1193',
    ];
  }
  if (state === 'ri') {
    return [
      'RI H 8036'
    ];
  }
  if (state === 'sc') {
    return [
      'SC H 3465',
      'SC S 1244',
    ];
  }
  if (state === 'tn') {
    return [
      'TN H 2936'
    ];
  }
  return false;
}

export default states;

export {
  isPendingBillState,
}