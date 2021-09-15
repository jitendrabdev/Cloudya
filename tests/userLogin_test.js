Feature("userLogin");
const userInputData = require("../data/userInput");
Before(async ({ I }) => {
  I.amOnPage("/login");
  let langSelList = await I.getLangList();
  userInputData.langList = await langSelList;
});

Scenario("Verify user login", ({ I }) => {
  userInputData.langList.forEach((langOption) => {
    I.langSelect(langOption);
    I.userLogin(
      userInputData.email,
      userInputData.password,
      userInputData.antiRobotBtnTex.langOption
    );
    I.userLogout();
  });
}).tag("@login");

Scenario("Verify error message for invalid login", ({ I }) => {
  userInputData.langList.forEach((langOption) => {
    I.langSelect(langOption);
    I.invalidUserLogin(
      userInputData.email,
      "InvalidPassword",
      userInputData.loginError.langOption
    );
  });
}).tag("@invalidlogin");

Scenario(
  "Verify Anti-Robot validation button for 3 invalid login attempt",
  ({ I }) => {
    for (let i = 0; i < 3; i++) {
      I.langSelect("EN");
      I.invalidUserLogin(
        userInputData.email,
        "InvalidPassword",
        userInputData.loginError.EN
      );
    }
    I.antiRobot(userInputData.antiRobotBtnTex.EN);
    I.userLogin(
      userInputData.email,
      userInputData.password,
      userInputData.antiRobotBtnTex.EN
    );
  }
).tag("@3invalidlogin");
