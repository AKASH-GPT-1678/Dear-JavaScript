const express = require("express");
const app = express();
const rateLimit = require('express-rate-limit');;
const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes (in milliseconds)
    max: 3, // allow only 3 requests per IP during that time
    message: "Too many requests from this IP, please try again after 5 minutes",
    standardHeaders: true, // adds RateLimit-* headers
    legacyHeaders: false,  // disables the X-RateLimit-* headers
  });
  

// Add the limiter function to the express middleware
// so that every request coming from user passes
// through this middleware.
app.use(limiter);


app.get("/", (req, res) => {
    res.send("Jhatu World");


})


app.listen(3000, () => {
    console.log("Server is listening on prot 30000")
})