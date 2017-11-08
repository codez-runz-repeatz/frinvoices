
export const getEmailBody = JSON.stringify( {
      "from": {
      "name": "From name",
      "email": "duncan.ross@myob.com"
    },
    "reply_to": {
      "name": "Reply-to name",
      "email": "duncan.ross@myob.com"
    },
    "meta": {
      "company": {
        "uid": "12345",
        "name": "Jim's Haberdashery"
      }
    },
    "to": [
      {
        "name": "The Champ",
        "email": "duncan.ross@myob.com"
      }
    ],
    "cc": [
      {
        "name": "CC email",
        "email": "duncan.ross@myob.com"
      }
    ],
    "subject": "SIT email for object testing From My Mobile App",
    "template": {
      "name": "generic",
      "variables": {
        "text": "This has new lines\nsee!",
        "company_name": "Jim's Haberdashery"
      }
    }
  }
)

export const getAPI = (text = '') => {
if (text === 'Invoice'){
    "https://api-sit.popeye.dev.myob.com/invoice"
}

return "https://api-sit.popeye.dev.myob.com/email"
};

export const capitalizeFirstLetter = (string = '') => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const postToPopeye = (string = '') => {
    console.log("starting");

    fetch(getAPI(string), {method: "POST",
    headers:{
        'x-myobapi-key': "26d5478393ff4ea580f95215",
        'Content-Type': 'application/json'
    },
    body: getEmailBody
    }).then(response => {
        if (response.ok) {
            response.json().then(json => {console.log(json);
                });
            }
        });
    };
