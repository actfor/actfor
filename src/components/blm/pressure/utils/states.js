const states = [
  { key: 'al', value: 'al', text: 'Alabama' },
  { key: 'ak', value: 'ak', text: 'Alaska' },
  { key: 'az', value: 'az', text: 'Arizona' },
  { key: 'ar', value: 'ar', text: 'Arkansas' },
  { key: 'ca', value: 'ca', text: 'California' },
  { key: 'co', value: 'co', text: 'Colorado' },
  { key: 'ct', value: 'ct', text: 'Connecticut' },
  { key: 'de', value: 'de', text: 'Delaware' },
  { key: 'dc', value: 'dc', text: 'District of Columbia' },
  { key: 'fl', value: 'fl', text: 'Florida' },
  { key: 'ga', value: 'ga', text: 'Georgia' },
  { key: 'id', value: 'id', text: 'Idaho' },
  { key: 'il', value: 'il', text: 'Illinois' },
  { key: 'ia', value: 'ia', text: 'Iowa' },
  { key: 'ks', value: 'ks', text: 'Kansas' },
  { key: 'ky', value: 'ky', text: 'Kentucky' },
  { key: 'la', value: 'la', text: 'Louisiana' },
  { key: 'me', value: 'me', text: 'Maine' },
  { key: 'md', value: 'md', text: 'Maryland' },
  { key: 'ma', value: 'ma', text: 'Massachusetts' },
  { key: 'mi', value: 'mi', text: 'Michigan' },
  { key: 'mn', value: 'mn', text: 'Minnesota' },
  { key: 'ms', value: 'ms', text: 'Mississippi' },
  { key: 'mo', value: 'mo', text: 'Missouri' },
  { key: 'mt', value: 'mt', text: 'Montana' },
  { key: 'ne', value: 'ne', text: 'Nebraska' },
  { key: 'nv', value: 'nv', text: 'Nevada' },
  { key: 'nh', value: 'nh', text: 'New Hampshire' },
  { key: 'nj', value: 'nj', text: 'New Jersey' },
  { key: 'nm', value: 'nm', text: 'New Mexico' },
  { key: 'ny', value: 'ny', text: 'New York' },
  { key: 'nc', value: 'nc', text: 'North Carolina' },
  { key: 'nd', value: 'nd', text: 'North Dakota' },
  { key: 'oh', value: 'oh', text: 'Ohio' },
  { key: 'ok', value: 'ok', text: 'Oklahoma' },
  { key: 'or', value: 'or', text: 'Oregon' },
  { key: 'pa', value: 'pa', text: 'Pennsylvania' },
  { key: 'ri', value: 'ri', text: 'Rhode Island' },
  { key: 'sc', value: 'sc', text: 'South Carolina' },
  { key: 'sd', value: 'sd', text: 'South Dakota' },
  { key: 'tn', value: 'tn', text: 'Tennessee' },
  { key: 'tx', value: 'tx', text: 'Texas' },
  { key: 'ut', value: 'ut', text: 'Utah' },
  { key: 'vt', value: 'vt', text: 'Vermont' },
  { key: 'va', value: 'va', text: 'Virginia' },
  { key: 'wa', value: 'wa', text: 'Washington' },
  { key: 'wv', value: 'wv', text: 'West Virginia' },
  { key: 'wi', value: 'wi', text: 'Wisconsin' },
  { key: 'wy', value: 'wy', text: 'Wyoming' },
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