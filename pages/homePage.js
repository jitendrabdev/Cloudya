const { I } = inject();
//Element locator for  Home page
module.exports = {
  userInfo: "//div[@class='user-info__container']",
  logoutBtn: "//app-button[@hovertexttranslationkey='title.logout']",
  userName: "//input[@type='email']",
  pageTitle: "//title[contains(text(),'Cloudya:')]",
}
