"use strict";
exports.__esModule = true;
exports.logger = void 0;
var log4js_1 = require("log4js");
log4js_1.configure("../logFile.log");
exports.logger = log4js_1.getLogger();
exports.logger.level = "debug";
exports.logger.debug("Some debug messages");
log4js_1.configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" } },
    categories: { "default": { appenders: ["cheese"], level: "error" } }
});
