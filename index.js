import express from "express";
import morgan from "morgan";
const app = express();

app.use(morgan("dev"));
app.get("/", (req, res) => {
    res.send("homepage");
});

app.get("/about", (req, res) => {
    res.send1("aboutpage");
});

app.get("/wait", (req, res) => 
  {  setTimeout(() => {
        res.send("Waited for 5 seconds");
    }, 1000);
});

app.get("/error", (req, res) => {
   const error = new Error('')
   error.status = 404;
   next(error);
});

function errorHandling(err, req, res, next) {
    res.status(err.status || 500).send("Try after some time");
}
app.use(errorHandling);
    
app.listen(3200);