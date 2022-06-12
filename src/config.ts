import * as dotenv from "dotenv";

/**
 * This file is show you to import > .env < file from rootDir
 * and load them to global variables in OS(NodeJS.process),
 * then you can used like OS variable.
 */
require('dotenv').config();

export const LoggerName = process.env.OPSTA_LOGGER_NAME;
export const LogType = process.env.LOG_TYPE ?? "pretty";
export const LogToFile = process.env.LOG_TO_FILE ?? "false";
export const LogPath = process.env.LOG_PATH ?? "./";
export const LoggerDelay = parseInt(process.env.OPSTA_LOGGER_DELAY ?? "10");