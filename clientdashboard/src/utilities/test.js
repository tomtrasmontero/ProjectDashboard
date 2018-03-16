// let updatedData = '';
let areaDataString = '';
// hca2was switched to hca2 for parsing
// const data = [{
//   hca2: 'AL',
//   name: 'Alabama',
//   region: 'South',
//   x: 6,
//   y: 7,
//   value: 4849377,
// }, {
//   hca2: 'AK',
//   name: 'Alaska',
//   region: 'West',
//   x: 0,
//   y: 0,
//   value: 737732,
// }, {
//   hca2: 'AZ',
//   name: 'Arizona',
//   region: 'West',
//   x: 5,
//   y: 3,
//   value: 6745408,
// }, {
//   hca2: 'AR',
//   name: 'Arkansas',
//   region: 'South',
//   x: 5,
//   y: 6,
//   value: 2994079,
// }, {
//   hca2: 'CA',
//   name: 'California',
//   region: 'West',
//   x: 5,
//   y: 2,
//   value: 39250017,
// }, {
//   hca2: 'CO',
//   name: 'Colorado',
//   region: 'West',
//   x: 4,
//   y: 3,
//   value: 5540545,
// }, {
//   hca2: 'CT',
//   name: 'Connecticut',
//   region: 'Northeast',
//   x: 3,
//   y: 11,
//   value: 3596677,
// }, {
//   hca2: 'DE',
//   name: 'Delaware',
//   region: 'South',
//   x: 4,
//   y: 9,
//   value: 935614,
// }, {
//   hca2: 'DC',
//   name: 'District of Columbia',
//   region: 'South',
//   x: 4,
//   y: 10,
//   value: 7288000,
// }, {
//   hca2: 'FL',
//   name: 'Florida',
//   region: 'South',
//   x: 8,
//   y: 8,
//   value: 20612439,
// }, {
//   hca2: 'GA',
//   name: 'Georgia',
//   region: 'South',
//   x: 7,
//   y: 8,
//   value: 10310371,
// }, {
//   hca2: 'HI',
//   name: 'Hawaii',
//   region: 'West',
//   x: 8,
//   y: 0,
//   value: 1419561,
// }, {
//   hca2: 'ID',
//   name: 'Idaho',
//   region: 'West',
//   x: 3,
//   y: 2,
//   value: 1634464,
// }, {
//   hca2: 'IL',
//   name: 'Illinois',
//   region: 'Midwest',
//   x: 3,
//   y: 6,
//   value: 12801539,
// }, {
//   hca2: 'IN',
//   name: 'Indiana',
//   region: 'Midwest',
//   x: 3,
//   y: 7,
//   value: 6596855,
// }, {
//   hca2: 'IA',
//   name: 'Iowa',
//   region: 'Midwest',
//   x: 3,
//   y: 5,
//   value: 3107126,
// }, {
//   hca2: 'KS',
//   name: 'Kansas',
//   region: 'Midwest',
//   x: 5,
//   y: 5,
//   value: 2904021,
// }, {
//   hca2: 'KY',
//   name: 'Kentucky',
//   region: 'South',
//   x: 4,
//   y: 6,
//   value: 4413457,
// }, {
//   hca2: 'LA',
//   name: 'Louisiana',
//   region: 'South',
//   x: 6,
//   y: 5,
//   value: 4649676,
// }, {
//   hca2: 'ME',
//   name: 'Maine',
//   region: 'Northeast',
//   x: 0,
//   y: 11,
//   value: 1330089,
// }, {
//   hca2: 'MD',
//   name: 'Maryland',
//   region: 'South',
//   x: 4,
//   y: 8,
//   value: 6016447,
// }, {
//   hca2: 'MA',
//   name: 'Massachusetts',
//   region: 'Northeast',
//   x: 2,
//   y: 10,
//   value: 6811779,
// }, {
//   hca2: 'MI',
//   name: 'Michigan',
//   region: 'Midwest',
//   x: 2,
//   y: 7,
//   value: 9928301,
// }, {
//   hca2: 'MN',
//   name: 'Minnesota',
//   region: 'Midwest',
//   x: 2,
//   y: 4,
//   value: 5519952,
// }, {
//   hca2: 'MS',
//   name: 'Mississippi',
//   region: 'South',
//   x: 6,
//   y: 6,
//   value: 2984926,
// }, {
//   hca2: 'MO',
//   name: 'Missouri',
//   region: 'Midwest',
//   x: 4,
//   y: 5,
//   value: 6093000,
// }, {
//   hca2: 'MT',
//   name: 'Montana',
//   region: 'West',
//   x: 2,
//   y: 2,
//   value: 1023579,
// }, {
//   hca2: 'NE',
//   name: 'Nebraska',
//   region: 'Midwest',
//   x: 4,
//   y: 4,
//   value: 1881503,
// }, {
//   hca2: 'NV',
//   name: 'Nevada',
//   region: 'West',
//   x: 4,
//   y: 2,
//   value: 2839099,
// }, {
//   hca2: 'NH',
//   name: 'New Hampshire',
//   region: 'Northeast',
//   x: 1,
//   y: 11,
//   value: 1326813,
// }, {
//   hca2: 'NJ',
//   name: 'New Jersey',
//   region: 'Northeast',
//   x: 3,
//   y: 10,
//   value: 8944469,
// }, {
//   hca2: 'NM',
//   name: 'New Mexico',
//   region: 'West',
//   x: 6,
//   y: 3,
//   value: 2085572,
// }, {
//   hca2: 'NY',
//   name: 'New York',
//   region: 'Northeast',
//   x: 2,
//   y: 9,
//   value: 19745289,
// }, {
//   hca2: 'NC',
//   name: 'North Carolina',
//   region: 'South',
//   x: 5,
//   y: 9,
//   value: 10146788,
// }, {
//   hca2: 'ND',
//   name: 'North Dakota',
//   region: 'Midwest',
//   x: 2,
//   y: 3,
//   value: 739482,
// }, {
//   hca2: 'OH',
//   name: 'Ohio',
//   region: 'Midwest',
//   x: 3,
//   y: 8,
//   value: 11614373,
// }, {
//   hca2: 'OK',
//   name: 'Oklahoma',
//   region: 'South',
//   x: 6,
//   y: 4,
//   value: 3878051,
// }, {
//   hca2: 'OR',
//   name: 'Oregon',
//   region: 'West',
//   x: 4,
//   y: 1,
//   value: 3970239,
// }, {
//   hca2: 'PA',
//   name: 'Pennsylvania',
//   region: 'Northeast',
//   x: 3,
//   y: 9,
//   value: 12784227,
// }, {
//   hca2: 'RI',
//   name: 'Rhode Island',
//   region: 'Northeast',
//   x: 2,
//   y: 11,
//   value: 1055173,
// }, {
//   hca2: 'SC',
//   name: 'South Carolina',
//   region: 'South',
//   x: 6,
//   y: 8,
//   value: 4832482,
// }, {
//   hca2: 'SD',
//   name: 'South Dakota',
//   region: 'Midwest',
//   x: 3,
//   y: 4,
//   value: 853175,
// }, {
//   hca2: 'TN',
//   name: 'Tennessee',
//   region: 'South',
//   x: 5,
//   y: 7,
//   value: 6651194,
// }, {
//   hca2: 'TX',
//   name: 'Texas',
//   region: 'South',
//   x: 7,
//   y: 4,
//   value: 27862596,
// }, {
//   hca2: 'UT',
//   name: 'Utah',
//   region: 'West',
//   x: 5,
//   y: 4,
//   value: 2942902,
// }, {
//   hca2: 'VT',
//   name: 'Vermont',
//   region: 'Northeast',
//   x: 1,
//   y: 10,
//   value: 626011,
// }, {
//   hca2: 'VA',
//   name: 'Virginia',
//   region: 'South',
//   x: 5,
//   y: 8,
//   value: 8411808,
// }, {
//   hca2: 'WA',
//   name: 'Washington',
//   region: 'West',
//   x: 2,
//   y: 1,
//   value: 7288000,
// }, {
//   hca2: 'WV',
//   name: 'West Virginia',
//   region: 'South',
//   x: 4,
//   y: 7,
//   value: 1850326,
// }, {
//   hca2: 'WI',
//   name: 'Wisconsin',
//   region: 'Midwest',
//   x: 2,
//   y: 5,
//   value: 5778708,
// }, {
//   hca2: 'WY',
//   name: 'Wyoming',
//   region: 'West',
//   x: 3,
//   y: 3,
//   value: 584153,
// }];

// data.forEach((state) => {
// const stringFormat = `('${state.region}', '${state.name}', '${state.hca2}',
//  '${state.x}', '${state.y}', '${state.value}' ),\n`;
//   updatedData += stringFormat;
// });

const areaData = [
  [1516233600000, 3867488.57],
  [1516320000000, 1456384.83],
  [1516406400000, 1351560.1],
  [1516492800000, 1450560.14],
  [1516579200000, 1270665.31],
  [1516665600000, 1173388.36],
  [1516752000000, 1474028.72],
  [1516838400000, 702261.93],
  [1516924800000, 1096115.66],
  [1517011200000, 849904.98],
  [1517097600000, 991763.06],
  [1517184000000, 683635.03],
  [1517270400000, 1004559.19],
  [1517356800000, 722256.67],
  [1517443200000, 979648.45],
  [1517529600000, 1371128.78],
  [1517616000000, 1064799.33],
  [1517702400000, 909145.27],
  [1517788800000, 1997487.25],
  [1517875200000, 3144536.57],
  [1517961600000, 2886402.12],
  [1518048000000, 1488810.5],
  [1518134400000, 3169599.44],
  [1518220800000, 5515945.22],
  [1518307200000, 2553929.81],
  [1518393600000, 1958326.75],
  [1518480000000, 1519732.9],
  [1518566400000, 1979480.94],
  [1518652800000, 2296375.81],
  [1518739200000, 3744960.07],
  [1518825600000, 2673484.88],
  [1518912000000, 2730967.91],
  [1518998400000, 1257505.2],
  [1519084800000, 1961116.66],
  [1519171200000, 2052235.96],
  [1519257600000, 1564196.41],
  [1519344000000, 1245572.52],
  [1519430400000, 1276240.13],
  [1519516800000, 820436.83],
  [1519603200000, 1086740.3],
  [1519689600000, 1112999.99],
  [1519776000000, 2638571.29],
  [1519862400000, 1949685.7],
  [1519948800000, 4889133.61],
  [1520035200000, 1957332.39],
  [1520121600000, 1432861.99],
  [1520208000000, 1364904.97],
  [1520294400000, 1225108.4],
  [1520380800000, 2044761.47],
  [1520467200000, 1090591.19],
  [1520553600000, 1497573.84],
  [1520640000000, 1026967.34],
  [1520726400000, 921161.75],
  [1520812800000, 971406.31],
  [1520899200000, 641934.77],
  [1520985600000, 936742.09],
  [1521072000000, 905013.75],
];

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() *(max-min+1)+min);
}

areaData.forEach((state) => {
  const region = ['South', 'West', 'Northeast', 'Midwest'];
  for (let i = 0; i < region.length; i += 1) {
    const stringFormat = `( '${region[i]}', '${state[0]}', '${state[1].toFixed(0)}', '${randomIntFromInterval(200000, 5000000)}'),\n`;
    areaDataString += stringFormat;
  }
});

console.log(areaDataString);
