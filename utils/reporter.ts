// import { reportFolderName } from './reporter';
import { browser } from "protractor";
import * as fs from "fs";

// // const aa: boolean = true;
// const dateToday1: Date = browser.params.dateToday1;
const dateToday1: Date = new Date();
// // console.log("aa");
// // console.log(browser.params.glob);
// // console.log(dateToday1);
// // console.log("aa");

export const reportFolderName: String = `Report${dateToday1.getDate()}${dateToday1.getMonth()}
${dateToday1.getFullYear()}${dateToday1.getHours()}${dateToday1.getMinutes()}${dateToday1.getSeconds()}`;
console.log(reportFolderName);
fs.mkdir(`reports/${reportFolderName}`, { recursive: true }, (e) => {
  if (e) {
    console.log(e);
  }
});
