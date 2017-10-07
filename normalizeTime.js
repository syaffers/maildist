const moment = require("moment");
const fs = require("fs");

var data = fs.readFileSync("raw/linkedin.txt").toString().split("\n");
data.slice(0, -1).forEach(function (d) {
    var dt = moment(d, "ddd, DD MMM YYYY HH:mm:ss Z");
    console.log(moment.utc(dt).toString());
});
