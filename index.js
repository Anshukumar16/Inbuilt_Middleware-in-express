import express from 'express';
import path from 'path';
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));


app.get("/",(req,res)=>{
    const absolutePath = path.resolve("view/home.html");
    res.sendFile(absolutePath);
    
})


app.get("/login",(req,res)=>{
    res.send(`
        <form action="/submit" method="post">
            <input type="text" name="username" placeholder="username"/>
            <input type="password" name="password" placeholder="password"/>
            <button type="submit">login</button>
        </form>
    `);
})

app.post("/submit",(req,res)=>{
    res.send(req.body);
})

app.get("/users",(req,res)=>{
    res.send("users page");
})

app.listen(3001);
