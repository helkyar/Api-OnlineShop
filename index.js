const app = require('express')();    
const port = 3000;

app.use(require('express').json());
app.use('/api', require('./routes'));

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
})  