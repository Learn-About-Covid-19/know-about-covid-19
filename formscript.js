   // might not need in case we use this global var in event listener.
   var accessToken = null

    async function main() {

        accessToken = await getAccessToken();
        if (accessToken === null)
            return;

        console.log("success: " + accessToken);

        let covidData = await getReferenceData(accessToken, countryCode);
        covidData.data

        console.log(covidData) 
            /* possibly use????
        button.addEventListener('click', (event) => {
            ...
            accessToken
        }));    */
    }

    async function getAccessToken() {
        let response = null;
        try {
            response = await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'grant_type=client_credentials&client_id=vorx3ze1n1AFKPaKoZO9xd90oDkxQ2hn&client_secret=28bcOUERvU3fGAAw'
            }).then (response => {
                if (response.status != 200)
                    throw "Connection Error";
                return response.json()
            })
        } catch (e) {
            console.log("error 2");
            console.error(e);
            return null;
        }
        return response.access_token; 
    }

    async function getReferenceData(accessToken, countryCode) {
        let response = null;
        try {
            response = await fetch("https://test.api.amadeus.com/v1/duty-of-care/diseases/covid19-area-report?countryCode=" + countryCode, {
                method: 'GET',
                headers: {
                    'Content-Type': 'accept: application/json',
                    'Authorization': 'Bearer ' + accessToken
                },
            }).then (response => {
                if (response.status != 200)
                    throw "Connection Error";
                return response.json()
            })
        } catch (e) {
            console.log("error 2");
            console.error(e);
            return null;
        }
        return response;
    } 

main();

