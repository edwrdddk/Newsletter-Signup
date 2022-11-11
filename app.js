const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const mailchimp = require('@mailchimp/mailchimp_marketing')

const app = express()

// CSS & image r static files, so we use express.static in order css and image tp be applied
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

mailchimp.setConfig({
  apiKey: "df80c36961d5c9711f9f47024a2fb10f-us9",
  server: "us9",
});


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {

  // const firstName = req.body.fName;
  // const lastName = req.body.lName;
  // const email = req.body.email;
  //
  // console.log(firstName, lastName, email);

  console.log(req.body.fName);
  console.log(req.body.lName);
  console.log(req.body.email);

  const listId = "c967185e99";
  const subscribingUser = {
    firstName: req.body.fName,
    lastName: req.body.lName,
    email: req.body.email
  };

  async function run() {
    try {
      const response = await mailchimp.lists.addListMember(listId, {
        email_address: subscribingUser.email,
        status: "subscribed",
        merge_fields: {
          FNAME: subscribingUser.firstName,
          LNAME: subscribingUser.lastName
        }
      });

      console.log("Successfully added contact as an audience member.");

      res.sendFile(__dirname + "/success.html");
    } catch (e) {
      res.sendFile(__dirname + "/failure.html");
    }
  }

  run();

});

app.post("/failure", function(req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
});

// API key
// df80c36961d5c9711f9f47024a2fb10f-us9

//Audience ID
//c967185e99
