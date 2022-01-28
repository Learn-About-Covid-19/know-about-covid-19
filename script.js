/*

var searchForm = document.querySelector('#prompt');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchinputVal = document.querySelector('#prompt');

  If (!searchinputVal) 
    console.error('You need a search input value!');
    return;
}
  
  let n = document.getElementById("prompt").value;
  document.getElementById("prompt").innerHTML = n;

document.getElementById("button").addEventListener("click", searchForm);


var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value;
  var formatInputVal = document.querySelector('#format-input').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit); 

*/ 

Javascript:
// Client credentials
var id = 'MwpgXWarnvcadjhT4uZd88o9pn3qvRJi';
var secret = 'EFAoHdp6QWQXMXam';
var areaEl = document.querySelector('#area')
var areavaxEl = document.querySelector('#areavax')
var areavax2El = document.querySelector('#areavax2')
var casesEl = document.querySelector('#cases')
var infectionsEl = document.querySelector('#infections')
var riskEl = document.querySelector('#riskLevel')
var typeEl = document.querySelector('#type')
var summaryEl = document.querySelector('#summary')
 var sendEmail = document.querySelector('#email')
 
function SearchInfo() {
fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
   method: 'POST',
   body: 'grant_type=client_credentials&client_id=' + i + '&client_secret=' + secret,
   headers: {
       "Content-Type": "application/x-www-form-urlencoded"
   },
})
   .then(response => response.json())
   .then(data => {
       var token = data['access_token']
       var ACCESS_TOKEN = 'Bearer ' + token;
       // console.log('Success:', data);
   fetch("https://test.api.amadeus.com/v1/duty-of-care/diseases/covid19-area-report?countryCode=US", {
       headers: {
           Authorization: ACCESS_TOKEN,
           "Content-Type": 'application/json'
       }
   })
 
 .then(response => response.json())
 .then(data => {
     var nameEl = data['data']['area']['name']
     var areavaxVal = data['data']['areaVaccinated']['0']['percentage'];
     var areavax2Val = data['data']['areaVaccinated']['1']['percentage'];
     var casesVal = data['data']['diseaseCases']['confirmed'];
     var risksVal = data['data']['diseaseRiskLevel'];
     var typeVal = data['data']['type'];
     var summaryVal = data['data']['summary'];
 
     areaEl.innerHTML = nameEl;
     areavaxEl.innerHTML = areavaxVal + ' %';
     areavax2El.innerHTML = areavax2Val + ' %';
     casesEl.innerHTML = casesVal;
     riskEl.innerHTML = risksVal;
     typeEl.innerHTML = typeVal;
     summaryEl.innerHTML = summaryVal;
 
      .addEventListner("click", sendEmail).function (Event){
       fetch("https://submit-form.com/zj6diEJw", {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           Accept: "application/json",
       },
       body: JSON.stringify({
           message: "Hello, World",
           'Country Name': nameEl,
           'percentage with 1 dose': areavaxVal + ' %',
           'percentage fully vaxed': areavax2Val + ' %',
       }),
       })
       .then(function (response) {
           console.log(response);
       })
       .catch(function (error) {
           console.error(error);
          
       });
   console.log('Success:', data)
   })
 .catch((error) => {
   console.error('Error:', error);
  
});})}
 
 var send = document.querySelector('#send');
 send.addEventListener("click",sendEmail());
 
Handlebars.registerHelper("json", function (context) {
   return JSON.stringify(context);
});
 
SearchInfo()