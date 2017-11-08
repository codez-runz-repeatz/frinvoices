import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import styles, {ICON_SIZE} from './styles';


import Icon from 'react-native-vector-icons/Ionicons';

const ActionFooter = ({ uid,type,amount,core }) => {
        return (
                <View style={styles.FooterContainer}>
                      <Button onPress={postToPopeye} title='Email' />
                      <Button onPress={postToPopeyeInv} title='Invoice' />
                      <Button onPress={postToPopeye} title='Save' />  

</View>

     );
};

export const sendEmailToPopeye = (
        From,
        FromName,
        FromEmail,
        ReplyTo,
        ReplyToName,
        ReplyToEmail,
        MetaCompanyUID,
        MetaCompanyName,
        ToName,
        ToEmail,
        SubjectLine,
        Template,
        TemplateText
) => {

};

export const getInvoiceBody = JSON.stringify({
    "meta": {
      "id": "8771471333",
      "number": "inv-o0kYj4gm",
      "due_date": "2017-11-19T10:15:02.921Z",
      "status": "DUE",
      "total_amount": 30,
      "tax_amount": 0,
      "due_amount": 30,
      "currency": "AUD",
      "issue_date": "2017-10-30T13:58:57+11:00"
    },
    "options": {
      "allow_online_payment": true
    },
    "company": {
      "uid": "1919191919",
      "name": "Test Company Name",
      "email": "rikki.roverato@myob.com",
      "country": "AU",
      "serial_number": "611919191919",
      "website": "www.paydirectonline.com"
    },
    "customer": {
      "id": "1919191",
      "name": "QA Popeye",
      "email": "rikki.roverato@myob.com",
      "phone": "0499 999 999"
    },
    "actions": [
      {
        "type": "email",
        "email-message": {
          "copy_owner": false,
          "meta": {
            "company": {
              "uid": "1919191919",
              "name": "Test Company Name",
              "arl_version": "2014.4"
            }
          },
          "options": {
          "send_bounce": true
          },
          "to": [{
            "name": "QA Popeye",
            "email": "duncan.ross@myob.com"
          }],
          "from": {
            "name": "MYOB Rikki",
            "email": "rikki.roverato@myob.com"
          },
          "subject": "Test invoice AlLaMUXhc0",
          "template": {
            "name": "invoice_view_v1",
            "variables": {
              "html": "",
              "text": "Test text change",
              "company_name": "Jim's Haberdashery",
              "heading_colour": "003f7f",
              "invoice_heading": "NEW INVOICE"
            }
          }
        },
        "invoice_attachment": "attach-and-link"
      }
    ],
  "attachments": [    {
      "type": "invoice",
      "filename": "invoice.pdf",
      "body": ""
    }
  ]
})

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
    return "https://api-sit.popeye.dev.myob.com/invoice"
}

return "https://api-sit.popeye.dev.myob.com/email"
};

export const getBody = (text) => {
if (text === 'Invoice'){
    return getInvoiceBody;
}
return getEmailBody;
};

export const postToPopeyeInv = (string) => {
    console.log("starting");

    fetch(getAPI("Invoice"), {method: "POST",
    headers:{
 
        'Content-Type': 'application/json'
    },
    body: getBody("Invoice")
    }).then(response => {
        if (response.ok) {
            response.json().then(json => {console.log(json);
                });
            }
        });
    };

export const postToPopeye = (string) => {
    console.log("starting");

    fetch(getAPI(string), {method: "POST",
    headers:{

        'Content-Type': 'application/json'
    },
    body: getBody(string)
    }).then(response => {
        if (response.ok) {
            response.json().then(json => {console.log(json);
                });
            }
        });
    };


export default ActionFooter;