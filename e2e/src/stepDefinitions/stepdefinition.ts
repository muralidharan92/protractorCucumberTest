// import { Then, When } from "@cucumber/cucumber";
import { browser } from "protractor";

import { Then, When } from "cucumber";
import { assert } from "console";

When(/^I login into the application$/, () => {
	browser.get("https://juliemr.github.io/protractor-demo/");
	// throw new Error("not valid");
	console.log("step1");
	return true;
});

When(/^I verify title$/, () => {
	console.log("step2");
	return true;
});

Then(/^I add two numbers$/, () => {
	console.log("step-3");
	return true;
});
