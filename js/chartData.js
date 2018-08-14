let dailyAvg, amount, getValues, latestPrices;

const dayData = 'https://data.fixer.io/api/timeseries?access_key=05989f30f0f7bcb0f23c3913ea80e662&start_date=2018-07-13&end_date=2018-08-13&base=GBP&symbols=USD';

fetchGraphs = async (e) => {
  e.preventDefault();
    try {
      response = await fetch(dayData)
      data = await response.json();
      dailyAvg = data.rates;
      dailyAvg = Object.values(dailyAvg);
      const prices = dailyAvg.map(price => {
        amount = price;
        getValues = Object.values(amount);
        return getValues;
      });
      latestPrices = [].concat.apply([], prices);
      addData(latestPrices);
    } catch (error) {
      console.log(error);
    }
  };

window.onload = fetchGraphs;

