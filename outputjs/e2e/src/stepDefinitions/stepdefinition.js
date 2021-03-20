"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Then, When } from "@cucumber/cucumber";
var protractor_1 = require("protractor");
var cucumber_1 = require("cucumber");
cucumber_1.When(/^I login into the application$/, function () {
    protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
    // throw new Error("not valid");
    console.log("step1");
    return true;
});
cucumber_1.When(/^I verify title$/, function () {
    console.log("step2");
    return true;
});
cucumber_1.Then(/^I add two numbers$/, function () {
    console.log("step-3");
    return true;
});
//# sourceMappingURL=stepdefinition.js.map