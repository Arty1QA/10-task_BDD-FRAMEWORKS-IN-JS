const Globals = require('../utilities/Globals');
const { Given, When, Then} = require('cucumber');
const Login = require('../pageObjectModels/loginComponent.js');
const LogOut = require('../pageObjectModels/logOutComponent.js');
const globals = new Globals();
const expect = globals.expect;
const login = new Login();
const logOut = new LogOut();

Given('login to Web Client', function (callback) {
  login.get().then(callback);
});

When('I enter {string}', function (string, callback) {
  login.setName(string).then(callback);
});

When('I populate {string}', function (string, callback) {
  login.passwordInput(string).then(callback);
});

Then('I logged in', function (callback) {
  login.buttonClick().then(callback);

});

When('user click Sign Out', function (callback) {
  logOut.clicklogOut().then(callback);
 });
 
 Then('user is signed out', function () {
   return expect(logOut.verifyLogOutUrl()).to.eventually.equal(true);
 });



