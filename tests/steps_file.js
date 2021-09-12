const loginPage = require("../pages/loginPage");
const homePage = require("../pages/homePage");
// in this file you can append custom step methods to 'I' object

module.exports =  function() {

  return actor({

   userLogin:  function(userLoginName, userPassword){
      this.fillField(loginPage.username, userLoginName);
      this.fillField(loginPage.passwordelement, userPassword);
      this.click(loginPage.loginBtn);
      this.waitForElement(homePage.userName, 10);
      this.seeInField(homePage.userName, userLoginName);
      this.waitForElement(homePage.pageTitle, 10);
      this.see("Cloudya", homePage.pageTitle);
      this.seeInCurrentUrl("/main/settings/user");
      
    },

    userLogout: function(){
      this.waitForElement(homePage.userInfo, 5);
      this.click(homePage.userInfo);
      this.waitForElement(homePage.logoutBtn, 5);
      this.click(homePage.logoutBtn);
    },

    langSelect: function(langOpton){
      this.waitForElement(loginPage.langSelect, 5);
      this.click(loginPage.langSelect);
      this.click("//button[contains(text(),'"+ langOpton +"')]")
      this.waitForElement(loginPage.username, 5);
    },

    getLangList: async function(){
      this.waitForElement(loginPage.langSelect, 5);
      this.click(loginPage.langSelect);
      let lst = await this.grabTextFromAll("//button[@role='menuitem']", "#text");
      //this.pressKey("CommandOrControl", "Escape");
      this.refreshPage();
      return lst;
    }
    
  });
}
