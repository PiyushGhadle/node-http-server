const http=require("http")
const fs=require("fs")
const { callbackify } = require("util")

const app=http.createServer((req,res)=>{
    if(req.url==="/"){
        const pageData=fs.readFileSync("pages/index.html")
    // res.write("<h1>Server started......</h1>")
    res.write(pageData)
    res.end()
    } else if(req.url==="/about"){
        const pageData=fs.readFileSync("pages/about.html")
        // res.write("<h1>About page......</h1>") 
        res.write(pageData)
        res.end()
    } else if(req.url==="/contact"){
        const pageData=fs.readFileSync("pages/contact.html")
        // res.write("<h1>Contact page......</h1>") 
        res.write(pageData)
        res.end()
    } else{
        res.writeHead(404,{"Content-Type":"text/html"}) // html code will send as a plain text then tags will not work
        // res.write("<h1>404 error page not found......</h1>") 
        const pageData=fs.readFileSync("pages/404.html")
        res.write(pageData)
        res.end()
    }
    
})

// app.listen(port,ip,callback-function)
app.listen(3000,()=>{
    console.log("Server started on http://127.0.0.1:3000")
})

// req/res Status Codes

// 200-299 ok state req & res both success
// 300-399 information req & res both success
// 400-499 req failed req invalid
// 500-599 req success but res failed

