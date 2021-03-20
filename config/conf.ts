// import { reportFolderName } from './../utils/reporter';
import { resolve } from "path";
import { browser, Config } from "protractor";
import { reportFolderName } from "../utils/reporter";

export let config: Config = {
//   // ...

//   params: {
//     glob: "test"
// },

// ...
  // params: {
  //   reportFolderName : "aabb",
  // },
  // onPrepare: function (): any {
  //   browser.params.reportFolderName = "aabb";
  //   // browser.dateToday = new Date();
  //   // fs.mkdir(`reports/report1`, { recursive: true }, (e) => {
  //   //   if (e) {
  //   //     console.log(e);
  //   //   }
  //   // });
  // },
  // framework : "jasmine",
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  SELENIUM_PROMISE_MANAGER: false,
  cucumberOpts: {
    require: [resolve("outputjs/e2e/src/stepDefinitions/stepdefinition.js")],
    format: `json:reports/result.json`,
    // reportFolder: reportFolderName,
    // tags: ["@Smoke"]
  },
  capabilities: {
    browserName: "chrome",
    // browserName: "firefox",
    // marionette: true,
    // acceptSSLCerts: true
  },
  // specs: ["../specs/*.js"],
  specs: [resolve("e2e/src/features/*.feature")],
  // seleniumAddress: "http://localhost:4444/wd/hub",
};


