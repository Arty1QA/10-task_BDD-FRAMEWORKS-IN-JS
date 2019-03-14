@run
Feature: Files are opened in Web Client

  Scenario Outline: Login to Web Client
  Given login to Web Client
  When I enter '<username>'
  When I populate '<password>'
  Then I logged in
  
  When user click Sign Out
  Then user is signed out

  Examples:
       | username   | password |
       | Admin      | *****    | 
       | User_2     | User_2   |
     
      


  
   
    

