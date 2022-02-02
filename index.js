const app = require('express')();    
const port = 3000;

app.use(require('express').json());
app.use('/', require('./routes'));

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
})  

// (*) Overwrite JSON with fs
    // const fs = require('fs');
    // const updateProducts = () => {
    //     fs.writeFile("products.json", JSON.stringify(products), "utf-8", (error)=>{
    //         if (error) { return {"message" : error.message}}
    //     });
    // }
// (?) DB connection 