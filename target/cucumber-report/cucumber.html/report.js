$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/purchase.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "As a user I want to purchase cheapest and costliest product from the saucedemo after sorting the products by Hight to Low filter.",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10763178400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User navigates saucedemo page and complete the item purchase",
  "description": "",
  "id": "search-functionality;user-navigates-saucedemo-page-and-complete-the-item-purchase",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on saucedemo page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with credential username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I filter the products by Price \"Price (high to low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select cheapest \u0026 costliest products and add to basket",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I open shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I go to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter details firstname \"Andrew\", lastName \"Smith\" and zipPostalCode \"CR8 9DE\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on finish button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should be able to see message \"THANK YOU FOR YOUR ORDER\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnSaucedemoPage()"
});
formatter.result({
  "duration": 215872500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 34
    },
    {
      "val": "secret_sauce",
      "offset": 63
    }
  ],
  "location": "MyStepdefs.iLoginWithCredentialUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 460054000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 431634800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (high to low)",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.iFilterTheProductsByPrice(String)"
});
formatter.result({
  "duration": 1337042600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectCheapestCostliestProductsAndAddToBasket()"
});
formatter.result({
  "duration": 361181100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iOpenShoppingCart()"
});
formatter.result({
  "duration": 218534700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iGoToCheckout()"
});
formatter.result({
  "duration": 156295200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Andrew",
      "offset": 27
    },
    {
      "val": "Smith",
      "offset": 46
    },
    {
      "val": "CR8 9DE",
      "offset": 72
    }
  ],
  "location": "MyStepdefs.iEnterDetailsFirstnameLastNameAndZipPostalCode(String,String,String)"
});
formatter.result({
  "duration": 587514300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnContinueButton()"
});
formatter.result({
  "duration": 214084200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnFinishButton()"
});
formatter.result({
  "duration": 168663800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "THANK YOU FOR YOUR ORDER",
      "offset": 33
    }
  ],
  "location": "MyStepdefs.iShouldBeAbleToSeeMessage(String)"
});
formatter.result({
  "duration": 100119100,
  "status": "passed"
});
formatter.after({
  "duration": 1771351100,
  "status": "passed"
});
});