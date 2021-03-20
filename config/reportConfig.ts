import reporter from "cucumber-html-reporter";
import { resolve } from "path";
import { browser } from "protractor";
import { reportFolderName } from "../utils/reporter";
import { config } from "./conf";
// import { reportFolderName } from "../utils/reporter";

var options: any = {
        theme: "bootstrap",
        jsonFile: resolve(`reports/result.json`),
        output: resolve(`reports/cucumber_report.html`),
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

    reporter.generate(options);