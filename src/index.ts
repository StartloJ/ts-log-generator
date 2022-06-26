import { ILogObject, Logger } from "tslog";
import { LoggerDelay, LoggerName, LogToFile, LogPath, LogType } from "./config";
import { appendFileSync } from "fs";

// This line show --> how to include environment variable from OS!!

function logToTransport(logObject: ILogObject) {
  appendFileSync(LogPath + "tsdev.log", JSON.stringify(logObject) + "\n");
}

type DefineLogType = 'pretty' | 'json' | 'hidden' | undefined;
let mytype = LogType as DefineLogType;

const log: Logger = new Logger({ name: LoggerName, type: mytype });

log.info('This app running with', LoggerName)

if (LogToFile.toLowerCase() == "true") {
  log.attachTransport(
    {
      silly: logToTransport,
      debug: logToTransport,
      trace: logToTransport,
      info: logToTransport,
      warn: logToTransport,
      error: logToTransport,
      fatal: logToTransport,
    },
    "debug"
  );
}

const delay = (ms: number) => {
    return new Promise(res => setTimeout(res, ms))
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

const genLog = async () => {
    log.info('Start writing logs.')
    while(true) {
        var ranNum = getRandomInt(LoggerDelay);
        // console.log('random number is: %d',ranNum)
        await delay(ranNum * 1000)
        switch(ranNum) {
            case 0: {
              console.log('In 0 case')
              log.silly("I am a silly log.");
              break;
            }
            case 1: {
              console.log('In 1 case')
              log.trace("I am a trace log with a stack trace.");
              break;
            }
            case 2: {
              console.log('In 2 case')
              log.debug("I am a debug log.");
              break;
            }
            case 3: {
              console.log('In 3 case')
              log.fatal(new Error("I am a pretty Error with a stacktrace."));
              break;
            }
            case 4: {
              console.log('In 4 case')
              log.warn("I am a warn log with a json object:", {foo: "bar"});
              break;
            }
            case 5: {
              console.log('In 5 case')
              log.error("I am an error log.");
              break;
            }
            default: {
              console.log('In default case')
              log.info("I am an info log.");
              break;
            }
        }
    }
}
log.info('Go to log generator.')
genLog()