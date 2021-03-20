"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
// // const aa: boolean = true;
// const dateToday1: Date = browser.params.dateToday1;
var dateToday1 = new Date();
// // console.log("aa");
// // console.log(browser.params.glob);
// // console.log(dateToday1);
// // console.log("aa");
exports.reportFolderName = "Report" + dateToday1.getDate() + dateToday1.getMonth() + "\n" + dateToday1.getFullYear() + dateToday1.getHours() + dateToday1.getMinutes() + dateToday1.getSeconds();
console.log(exports.reportFolderName);
fs.mkdir("reports/" + exports.reportFolderName, { recursive: true }, function (e) {
    if (e) {
        console.log(e);
    }
});
//# sourceMappingURL=reporter.js.map