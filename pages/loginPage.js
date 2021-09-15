const { I } = inject();
//Element locator for  Login page
module.exports = {
  username: "//input[@name='loginUsername']",
  passwordelement: "//input[@name='loginPassword']",
  loginBtn: "//button[@type='submit']",
  langSelect: "//app-svg-icon[@class='ng-star-inserted']",
  loginErr: "//div[@class='login__error-message ng-star-inserted']",
  anitRobotValidationBtn: "//button[@class='frc-button']",
  antiRobotValidationMsg: "//span[@class='frc-text']",
};
