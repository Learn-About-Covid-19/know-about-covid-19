function searchApi(query, format) {
    var locQueryUrl = 'https://test.api.amadeus.com/v1/duty-of-care/diseases/covid19-area-report?countryCode=US';
  
    if (format) {
      locQueryUrl = 'https://test.api.amadeus.com/v1/duty-of-care/diseases/covid19-area-report?countryCode=US' + format + '/?fo=json';
    }
  
    locQueryUrl = locQueryUrl + '&q=' + query;

fetch(locQueryUrl)
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      }

      return response.json();
    })
    .then(function (locRes) {
      resultTextEl.textContent = locRes.search.query;

      console.log(locRes);

      if (!locRes.results.length) {
        console.log('No results found!');
        resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
      } else {
        resultContentEl.textContent = '';
        for (var i = 0; i < locRes.results.length; i++) {
          printResults(locRes.results[i]);
        }
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}
