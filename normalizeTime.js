const moment = require("moment");
const fs = require("fs");

var fn = process.argv[2];
var data = fs.readFileSync("raw/" + fn + ".txt").toString().split("\n");
data.slice(0, -1).forEach(function (d) {
    var dt = moment(d, "ddd, DD MMM YYYY HH:mm:ss Z");
    if (dt.toString() != "Invalid date")
        console.log(moment.utc(dt).toString());
});
