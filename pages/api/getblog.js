// import { log } from 'node:console';
import * as fs from 'node:fs';


// http://localhost:3000/api/getblog?slug=how-to-learn-javascript

export default function handler(req,res) {
  fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8', (err, data) => {

    res.status(200).json(json.parse(data))
  })

}
