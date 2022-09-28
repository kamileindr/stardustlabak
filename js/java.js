const url = "https://kea22-38f9.restdb.io/rest/stardust?max=3";

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
        //console.log(data);
        handleData(data);
    })
    .catch((e) => {
        console.error("An error occured:", e.message);
    });

function handleData(stardust){
    stardust.forEach((item) => {
        console.log(item);
        // make a template
        //grab it
        const template = document.querySelector("template").content;
        //clone it
        const clone = template.cloneNode(true);
        //populate with data
        clone.querySelector("img").src = item.img_url;
        clone.querySelector("h2").textContent = item.name;
        clone.querySelector("h3").textContent = item.price;
        //append it to the dom
        const mainEl = document.querySelector("main");
        mainEl.appendChild(clone);
    });
}
