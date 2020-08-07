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

const isPendingBillState = state => (
  state === 'ca' ||
  state === 'co' ||
  state === 'de' ||
  state === 'dc' ||
  state === 'ga' ||
  state === 'hi' ||
  state === 'il' ||
  state === 'ks' ||
  state === 'me' ||
  state === 'ma' ||
  state === 'mi' ||
  state === 'mn' ||
  state === 'nv' ||
  state === 'nj' ||
  state === 'nm' ||
  state === 'ny' ||
  state === 'oh' ||
  state === 'or' ||
  state === 'pa' ||
  state === 'ri' ||
  state === 'sc' ||
  state === 'tn'
)

export default states;

export {
  isPendingBillState,
}