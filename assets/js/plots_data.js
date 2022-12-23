const barcharts = ["barchart_test"];
const pies = ["pie_gamecount_by_year", "pie_path_count"];
const piesLabel = ["pie_politicians", "pie_quotes", "pie_climate_quotes"]
const timeseries = ["gdp2011", "gdp2012", "gdp2013"]

pies.forEach(chart => parseData(chart, generatePie));
piesLabel.forEach(chart => parseData(chart, generatePieLabel));
barcharts.forEach(chart => parseData(chart, generateBarchart));
timeseries.forEach(chart => parseData(chart, generateTimeseriesChart));