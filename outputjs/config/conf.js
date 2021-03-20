"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { reportFolderName } from './../utils/reporter';
var path_1 = require("path");
exports.config = {
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
        require: [path_1.resolve("outputjs/e2e/src/stepDefinitions/stepdefinition.js")],
        format: "json:reports/result.json",
    },
    capabilities: {
        browserName: "chrome",
    },
    // specs: ["../specs/*.js"],
    specs: [path_1.resolve("e2e/src/features/*.feature")],
};
//# sourceMappingURL=conf.js.map