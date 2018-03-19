export const transformChartData = (salesData) => {
  const barChartData = [];
  const areaChartData = [];
  const donutChartData = {
    West: 0,
    South: 0,
    Northeast: 0,
    Midwest: 0,
  };

  salesData.forEach((data) => {
    barChartData.push([data.time * 1, data.line * 1]);
    areaChartData.push([data.time * 1, data.area * 1]);
    donutChartData[data.region] += data.area * 1;
  });
  return [areaChartData, barChartData, Object.entries(donutChartData)];
};

export const transformMapData = (mapData) => {
  const mapChartData = [];
  mapData.forEach(({
    abbr, value,
  }) => {
    mapChartData.push([`us-${abbr.toLowerCase()}`, parseInt(value, 10)]);
  });

  return mapChartData;
};


export const numFormat = (number) => {
  let isNegative = '';
  let dec = '';
  let numToStr = number.toString().split('.');
  let formatNum = '';
  if (number < 0) {
    isNegative = '-';
    numToStr = number.toString().substr(1).split('.');
  }
  if (numToStr[1]) {
    dec = `.${numToStr[1].toString()}`;
  }

  const int = numToStr[0];

  for (let i = 0; i < int.length; i += 1) {
    let substring = int[int.length - i - 1];
    if ((i + 1) % 3 === 0 && i > 0 && i !== int.length - 1) {
      substring = `,${substring}`;
    }
    formatNum = substring + formatNum;
  }
  return [isNegative, formatNum, dec].join('');
};
