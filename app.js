let express = require("express");
let path = require("path");
let open = require("open");
let app = express();
app.use("/dev",express.static(path.join(__dirname,"dev")));
app.use("/dist",express.static(path.join(__dirname,"dist")));
app.listen(7777,() => {
    console.log("服务开启 @7777");
    console.log((new Date()).toLocaleString());
});
open("http://localhost:7777/dev");