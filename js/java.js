const url = "https://kea22-38f9.restdb.io/rest/stardust?max=20"

const options = {
    headers: {
        "x-apikey": "63346a8032330102d591d281",
    },
};

fetch(url, options)
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.error("An error occured:", e.message);
    });