'use strict';

class Login {
    get() {
        browser.ignoreSynchronization = true; 
        return browser.get('https://testEnv') 
    }

    setName(user) {
        return element(by.id('UserName')).sendKeys(user)
    }

    passwordInput(password){
        return element(by.name('Password')).sendKeys(password)
        
    };

    buttonClick(){
        return element(by.className('loginBtn')).click().then(function() {
            return browser.ignoreSynchronization = false; 
        })
    }

}

module.exports = Login;





