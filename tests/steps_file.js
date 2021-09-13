const loginPage = require("../pages/loginPage");
const homePage = require("../pages/homePage");

module.exports = function () {
  return actor({
    /**
     * This funiction to login to application and verify the home page
     * @param {*} userLoginName User name for login
     * @param {*} userPassword User password for login
     */
    userLogin: function (userLoginName, userPassword) {
      this.fillField(loginPage.username, userLoginName);
      this.fillField(loginPage.passwordelement, userPassword);
      this.click(loginPage.loginBtn);
      this.waitForElement(homePage.userName, 10);
      this.seeInField(homePage.userName, userLoginName);
      this.waitForElement(homePage.pageTitle, 10);
      this.see("Cloudya", homePage.pageTitle);
      this.seeInCurrentUrl("/main/settings/user");
    },
    /**
     * This function used for logout user from application
     */
    userLogout: function () {
      this.waitForElement(homePage.userInfo, 5);
      this.click(homePage.userInfo);
      this.waitForElement(homePage.logoutBtn, 5);
      this.click(homePage.logoutBtn);
    },
    /**
     * This function take localization code and change the the language of the application
     * @param {*} langOpton Localization code
     */
    langSelect: function (langOpton) {
      this.waitForElement(loginPage.langSelect, 5);
      this.click(loginPage.langSelect);
      this.click("//button[contains(text(),'" + langOpton + "')]");
      this.waitForElement(loginPage.username, 5);
    },
    /**
     * This function returns the list of all localization code in list
     * @returns
     */
    getLangList: async function () {
      this.waitForElement(loginPage.langSelect, 5);
      this.click(loginPage.langSelect);
      let langCode = await this.grabTextFromAll(
        "//button[@role='menuitem']",
        "#text"
      );
      this.refreshPage();
      return langCode;
    },
  });
};
