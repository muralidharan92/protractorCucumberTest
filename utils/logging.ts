import { configure, getLogger } from "log4js";
    configure("../logFile.log");
    export const logger: any = getLogger();
    logger.level = "debug";
    logger.debug("Some debug messages");
    configure({
      appenders: { cheese: { type: "file", filename: "cheese.log" } },
      categories: { default: { appenders: ["cheese"], level: "error" } }
    });