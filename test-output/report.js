$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyAccount-Login.feature");
formatter.feature({
  "line": 1,
  "name": "MyAccount-Login Feature",
  "description": "Description: This feature will test a Login feature",
  "id": "myaccount-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#Simple login without parameters"
    }
  ],
  "line": 5,
  "name": "Log-in with valid username and password",
  "description": "",
  "id": "myaccount-login-feature;log-in-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the URL \"http://practice.automationtesting.in/\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on My Account Menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter registered username and password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User must successfully login to the web page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyAccountLoginStepDefinitions.open_the_browser()"
});
formatter.result({
  "duration": 7642560900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://practice.automationtesting.in/",
      "offset": 15
    }
  ],
  "location": "MyAccountLoginStepDefinitions.enter_the_URL(String)"
});
formatter.result({
  "duration": 12738384200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinitions.click_on_My_Account_Menu()"
});
formatter.result({
  "duration": 6810192800,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinitions.enter_registered_username_and_password()"
});
formatter.result({
  "duration": 689955900,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 5862121600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountLoginStepDefinitions.user_must_successfully_login_to_the_web_page()"
});
formatter.result({
  "duration": 2394622500,
  "status": "passed"
});
});