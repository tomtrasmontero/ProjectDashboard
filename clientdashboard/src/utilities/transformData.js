export const transformChartData = (salesData) => {
  const barChartData = [];
  const areaChartData = [];
  salesData.forEach((data) => {
    barChartData.push([data.time, data.line]);
    areaChartData.push([data.time, data.area]);
  });

  return [areaChartData, barChartData];
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
      x,
      y,
      value,
    };

    mapChartData.push(dataSetup);
  });

  return mapChartData;
};
