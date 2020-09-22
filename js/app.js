const GOOLINK_URL = "http://goolnk.com/api/v1/shorten";



//const inputField = document.getElementById("url-input");
const outputArea = document.querySelector(".output-link");

let inputData;
function generateLink (){
    inputData = String(document.querySelector("#url-input").value);
    console.log(inputData);
    const promise = fetch(GOOLINK_URL, {
      method: "POST",
      headers: {
        "x-rapidapi-host": "url-shortener-service.p.rapidapi.com",
        "x-rapidapi-key": "72044130bcmsh909c0c1acdfe741p12589djsn8497214942bc",
        "content-type": "application/x-www-form-urlencoded",
      },
      body: {
        url: `${inputData}`,
      },  
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
}

document.querySelector(".generator-button").addEventListener('click', generateLink);


