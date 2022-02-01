// Client credentials
var id = '5G86Omm91FMlsMe2e9NfzDPDJs4IBs4b';
var secret = 'YcHCWlgbbsAy54gS';

//List of the other variables
var areaEl = document.querySelector('#area')
var areavaxEl = document.querySelector('#areavax')
var areavax2El = document.querySelector('#areavax2')
var casesEl = document.querySelector('#cases')
var deathsEl = document.querySelector('#deaths')
var infectionsEl = document.querySelector('#infections')
var riskEl = document.querySelector('#riskLevel')
var maskEl = document.querySelector('#mask')
var maskTEl = document.querySelector('#maskText')
var banEl = document.querySelector('#ban')
var bTEl = document.querySelector('#mI')
var sPEl = document.querySelector('#sP')
var exitEl = document.querySelector('#eI')
var summaryEl = document.querySelector('#summary')
var countryEl = document.getElementById("country")

//Variable list of all countries for search list.
let countries = {
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia (Plurinational State of)",
    "BQ": "Bonaire, Sint Eustatius and Saba",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cabo Verde",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "KY": "Cayman Islands",
    "CF": "Central African Republic",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos (Keeling) Islands",
    "CO": "Colombia",
    "KM": "Comoros",
    "CD": "Congo (the Democratic Republic of the)",
    "CG": "Congo",
    "CK": "Cook Islands",
    "CR": "Costa Rica",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curaçao",
    "CY": "Cyprus",
    "CZ": "Czechia",
    "CI": "Côte d'Ivoire",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "SZ": "Eswatini",
    "ET": "Ethiopia",
    "FK": "Falkland Islands [Malvinas]",
    "FO": "Faroe Islands",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories",
    "GA": "Gabon",
    "GM": "Gambia",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island and McDonald Islands",
    "VA": "Holy See",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran (Islamic Republic of)",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KP": "Korea (the Democratic People's Republic of)",
    "KR": "Korea (the Republic of)",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Lao People's Democratic Republic",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia (Federated States of)",
    "MD": "Moldova (the Republic of)",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestine, State of",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "MK": "Republic of North Macedonia",
    "RO": "Romania",
    "RU": "Russian Federation",
    "RW": "Rwanda",
    "RE": "Réunion",
    "BL": "Saint Barthélemy",
    "SH": "Saint Helena, Ascension and Tristan da Cunha",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin (French part)",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SX": "Sint Maarten (Dutch part)",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia and the South Sandwich Islands",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan",
    "SR": "Suriname",
    "SJ": "Svalbard and Jan Mayen",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syrian Arab Republic",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania, United Republic of",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks and Caicos Islands",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom of Great Britain and Northern Ireland",
    "UM": "United States Minor Outlying Islands",
    "US": "United States of America",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela (Bolivarian Republic of)",
    "VN": "Vietnam",
    "VG": "Virgin Islands (British)",
    "VI": "Virgin Islands (U.S.)",
    "WF": "Wallis and Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
    "AX": "Åland Islands"
};
let optionList = document.getElementById('countries')
for (const key in countries) {
    let option = document.createElement('option')
    option.value = countries[key]
    option.id = key

    optionList.append(option)
}

// let countryCode = ""
// document.getElementById('country').addEventListener('click', function (event) {
//     // let input = document.querySelector('input[name=countries]')
//     // event.preventDefault()
//     // for (const key in countries) {
//     //     if (countries[key] == input.value) {
//     //         countryCode = key
//     //         console.log(countryCode)
//     //     }
//     // }
// })

var nameEl = ""
var areavaxVal = ""
var areavax2Val = ""
var casesVal = ""
var summaryVal = ""
var maskVal = ""
var maskTVAl = ""

//Function that grabs allows us to access token for the API then pull data from the API.
function SearchInfo(countryCode) {
    console.log("the country code is", countryCode)
    $('#init').addClass('hide')
    $('#secondPage').removeClass('hide')
    $('#infoResult').removeClass('hide')
    $('#infoResultTwo').removeClass('hide')
    $('#emailSender').removeClass('hide')

    $("#root").css("background-image", "url(https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)")

    fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + id + '&client_secret=' + secret,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    })
        .then(response => response.json())
        .then(data => {
            var token = data['access_token']
            var ACCESS_TOKEN = 'Bearer ' + token;
            console.log('Success:', data);
            fetch("https://test.api.amadeus.com/v1/duty-of-care/diseases/covid19-area-report?countryCode=" + countryCode, {
                headers: {
                    Authorization: ACCESS_TOKEN,
                    "Content-Type": 'application/json'
                }
            })

                .then(response => response.json())
                .then(data => {
                    nameEl = data['data']['area']['name'] || ""
                    areavaxVal = data['data']['areaVaccinated']['0']['percentage']|| "not found";
                    areavax2Val = data['data']['areaVaccinated']['1']['percentage']|| "not found";
                    casesVal = data['data']['diseaseCases']['confirmed']|| "not found";
                    var deathsVal = data['data']['diseaseCases']['deaths']|| "not found";
                    summaryVal = data['data']['summary']|| "not found";
                    maskVal = data['data']['areaAccessRestriction']['mask']['isRequired']|| "not found";
                    maskTVAl = data['data']['areaAccessRestriction']['mask']['text']|| "not found";
                    var banVal = data['data']['areaAccessRestriction']['entry']['ban']|| "not found";
                    var bTextVal = data['data']['areaAccessRestriction']['entry']['text']|| "not found";
                    var sPVal = data['data']['areaAccessRestriction']['exit']['specialRequirements']|| "not found";
                    var eIVal = data['data']['areaAccessRestriction']['exit']['text']|| "not found";

                    areaEl.innerHTML = nameEl;
                    areaEl.value = nameEl;
                    areavaxEl.innerHTML = areavaxVal + ' %';
                    areavax2El.innerHTML = areavax2Val + ' %';
                    casesEl.innerHTML = casesVal;
                    summaryEl.innerHTML = summaryVal;
                    deathsEl.innerHTML = deathsVal;
                    maskEl.innerHTML = maskVal;
                    maskTEl.innerHTML = maskTVAl;
                    banEl.innerHTML = banVal;
                    bTEl.innerHTML = bTextVal;
                    sPEl.innerHTML = sPVal;
                    exitEl.innerHTML = eIVal;

                    var risksVal = data['data']['diseaseRiskLevel'];

                    if (risksVal === 'Low') {
                        riskEl.style.background = 'green'
                    } else if (risksVal === 'Medium') {
                        riskEl.style.background = 'yellow'
                    } else if (risksVal === 'High') {
                        riskEl.style.background = 'red'
                    } else if (risksVal === 'Extreme') {
                        riskEl.style.background = 'violet'
                    }
                    riskEl.innerHTML = risksVal;

                    console.log('Success:', data)
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        })
}

// Sends email with all of the information of the country searched to the user.
function sendEmail() {
    console.log("im clicked")
    fetch("https://submit-form.com/zj6diEJw", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            message: "COVID-19 Information",
            'Country Name': nameEl,
            'Mask required?: ': maskVal,
            'More info on Masks: ': maskTVAl,
            'confirmed cases' : casesVal,
            'percentage with 1 dose': areavaxVal + ' %',
            'percentage fully vaxed': areavax2Val + ' %',
            'more info' : summaryVal,
        }),
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
}

$('#emailSender').click(sendEmail)
function getCountryCode() {
    let input = document.querySelector('input[name=countries]')

    for (const key in countries) {
        if (countries[key] == input.value) {
            countryCode = key
            return countryCode
        }
    }
}

function getCountryCodeFromString(country) {
    for (const key in countries) {
        if (countries[key] == country) {
            countryCode = key
            return countryCode
        }
    }
}
//Local storage for search history
var searchHistoryButtonEl = document.querySelector('#prevHistory-buttons');

var saveSearch = function (countryCode) {

    if (!countryCode) {
        return
    }

    var country = countries[countryCode]
    var historyAr = JSON.parse(localStorage.getItem('historyArray')) || []
    if (historyAr.includes(country)) {
        return
    }
    historyAr.push(country)
    localStorage.setItem("historyArray", JSON.stringify(historyAr));
};

//List of all previous saved searches you can click on
var createButton = function (pastSearch) {
    var prevSearchEl = document.createElement("button");
    prevSearchEl.textContent = pastSearch;
    prevSearchEl.classList = "";
    prevSearchEl.setAttribute("data-country", pastSearch)
    prevSearchEl.setAttribute("type", "submit");
    searchHistoryButtonEl.prepend(prevSearchEl);
    prevSearchEl.addEventListener("click", function () {
        let countryCode = getCountryCodeFromString(pastSearch)
        SearchInfo(countryCode)
    })
};

var searchHistory = function () {

    var country = document.getElementById('c').value
    let countryCode = getCountryCodeFromString(country)

    saveSearch(countryCode)
    loadData()
    if (country) {
        SearchInfo(countryCode);
    };

};

var loadData = function (event) {

    searchHistoryButtonEl.innerHTML = ''

    var loadData = localStorage.getItem("historyArray")
    if (loadData == null || loadData == "") return;

    var countryButtonArr = JSON.parse(loadData)

    for (i = 0; i < countryButtonArr.length; i++) {
        createButton(countryButtonArr[i])
    }

}
loadData()
document.getElementById('country').addEventListener('click', (event) => {
    event.preventDefault()
    console.log("we are here")
    searchHistory(event)
})

//Clears page and deletes previously saved searches
function deleteChild() {
    var e = document.querySelector("#prevHistory-buttons");
    
    //e.firstElementChild can be used.
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

$("#clear").on("click", function(){
    deleteChild();
    localStorage.clear();
    $('#init').removeClass('hide')
    $('#secondPage').addClass('hide');
    $('#infoResult').addClass('hide');
    $('#infoResultTwo').addClass('hide');
    $('#emailSender').addClass('hide');
    $("#root").css("background-image", "url(https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)")
})