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
  console.log(donutChartData);
  return [areaChartData, barChartData, Object.entries(donutChartData)];
};

export const transformMapData = (mapData) => {
  const mapChartData = [];
  mapData.forEach(({
    abbr, state, region, x, y, value,
  }) => {
    const dataSetup = {
      'hc-a2': abbr,
      name: state,
      region,
      x: parseInt(x, 10),
      y: parseInt(y, 10),
      value: parseInt(value, 10),
    };

    mapChartData.push(dataSetup);
  });

  return mapChartData;
};
