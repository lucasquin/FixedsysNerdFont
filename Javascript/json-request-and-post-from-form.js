/*
 *This script is just the basis for future reference.
 *It is necessary that the script be customized to fill the object in which the json is sent.
 */

const requestUrl = ""; // get json from any api
const referrerUrl = ""; // origin request
const requestApi = ""; // post json in yor api

fetch()
    .then((response) => response.json())
    .then(save);

async function save(data) {
    for (var value in data.features) {
        await fetch(requestApi, {
            "headers": {
                "accept": "text/plain",
                "accept-language": "pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryhAe4yPqbK2PvJ9O1",
                "sec-ch-ua": "\"Chromium\";v=\"112\", \"Microsoft Edge\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": `${referrerUrl}`,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `------WebKitFormBoundaryhAe4yPqbK2PvJ9O1\r\nContent-Disposition: form-data; name=\"json\"\r\n\r\n${JSON.stringify(data[value])}\r\n------WebKitFormBoundaryhAe4yPqbK2PvJ9O1--\r\n`,
            "method": "POST",
            "mode": "cors",
            "credentials": "omit"
        });
    }
}
