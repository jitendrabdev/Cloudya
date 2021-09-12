Feature('userLogin');
const userInputData = require("../data/userInput");
Before( async ({ I }) => {
    I.amOnPage("/login");
    let langSelList = await I.getLangList();
    userInputData.langList = await langSelList;
  });

Scenario('Verify user login', ({ I  }) => {
    
    //console.log(userInputData.langList);
    userInputData.langList.forEach(langOption =>{
        I.langSelect(langOption);
        I.userLogin(userInputData.email, userInputData.password);
        I.userLogout();
    });
});
