import { Logger } from "tslog";

const log: Logger = new Logger({ name: "OpstaDeburger", type: "json" });
const delay = (ms: number) => {
    return new Promise(res => setTimeout(res, ms))
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

const genLog = async () => {
    while(true) {
        var ranNum = getRandomInt(6);
        await delay(ranNum * 1000)
        switch(ranNum) {
            case 0: {
                log.silly("I am a silly log.");
                break;
            }
            case 1: {
                log.trace("I am a trace log with a stack trace.");
                break;
            }
            case 2: {
                log.debug("I am a debug log.");
                break;
            }
            case 3: {
                log.info("I am an info log.");
                break;
            }
            case 4: {
                log.warn("I am a warn log with a json object:", {foo: "bar"});
                break;
            }
            case 5: {
                log.error("I am an error log.");
                break;
            }
            default: {
                log.fatal(new Error("I am a pretty Error with a stacktrace."));
                break;
            }
        }
    }
}
genLog()

// var ranNum = getRandomInt(6);
// switch(ranNum) {
//     case 0: {
//         log.silly("I am a silly log.");
//         break;
//     }
//     case 1: {
//         log.trace("I am a trace log with a stack trace.");
//         break;
//     }
//     case 2: {
//         log.debug("I am a debug log.");
//         break;
//     }
//     case 3: {
//         log.info("I am an info log.");
//         break;
//     }
//     case 4: {
//         log.warn("I am a warn log with a json object:", {foo: "bar"});
//         break;
//     }
//     case 5: {
//         log.error("I am an error log.");
//         break;
//     }
//     default: {
//         log.fatal(new Error("I am a pretty Error with a stacktrace."));
//         break;
//     }
// }