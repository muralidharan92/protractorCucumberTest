"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_html_reporter_1 = __importDefault(require("cucumber-html-reporter"));
var path_1 = require("path");
// import { reportFolderName } from "../utils/reporter";
var options = {
    theme: "bootstrap",
    jsonFile: path_1.resolve("reports/result.json"),
    output: path_1.resolve("reports/cucumber_report.html"),
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    Type: "smokeReport",
    storeScreenshots: true,
    screenshotsDirectory: "screenshots",
    noInlineScreenshots: true,
    metadata: {
        "Test Environment": "Test",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};
cucumber_html_reporter_1.default.generate(options);
//# sourceMappingURL=reportConfig.js.map