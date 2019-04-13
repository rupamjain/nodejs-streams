const express=require('express');
const fs = require('fs');
const app=express();

app.get('/',(req,res)=>{
   
    const src = fs.createReadStream('./bible.txt');
    src.pipe(res);
});
app.get('/2',(req,res)=>{
     
    fs.readFile('./bible.txt', (err, data) => {
        if (err) throw err;     
        res.end(data);       
      });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});