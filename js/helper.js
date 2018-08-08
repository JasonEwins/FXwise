function convertTime() {
  let lastUpdate = new Date(data.info.timestamp * 1000);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const date = lastUpdate.getDate();
  const month = months[lastUpdate.getMonth()];
  const year = lastUpdate.getFullYear();
  const hours = lastUpdate.getHours();
  let minutes = lastUpdate.getMinutes();
    if (minutes < 9) {
      minutes = '0' + minutes;
    }
  const seconds = lastUpdate.getSeconds();
  lastUpdate =  hours + ':' + minutes + ':' + seconds + ' - ' + date + ' ' + month + ' ' + year;
  updated.textContent = 'price correct as of: ' + lastUpdate;
}

function getCurrency() {
  currencyFrom = from.options[from.selectedIndex].value;
  currencyTo = to.options[to.selectedIndex].value;
};