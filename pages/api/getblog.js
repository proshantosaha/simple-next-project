import * as fs from 'node:fs';

// http://localhost:3000/api/getblog?slug=how-to-learn-javascript

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8',(err,data)=>{
   if(err){
    res.status(500).json({error:"interner server error"})
   }
    res.status(200).json(JSON.parse(data))
  })
  
}
