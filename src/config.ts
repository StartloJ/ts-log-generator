import * as dotenv from "dotenv";

require('dotenv').config();

export const LoggerName = process.env.OPSTA_LOGGER_NAME;
export const LoggerDelay = parseInt(process.env.OPSTA_LOGGER_DELAY ?? "10");