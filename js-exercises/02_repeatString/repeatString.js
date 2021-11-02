const repeatString = function(string, times) {
    if (typeof (string) === "string" && times >= 0) {
        let result = ""
        for (i = 0; i < times; i++) {
            result = result + string;
        }
        return result;
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
