import { log } from 'node:console';
import * as fs from 'node:fs';



export default async function handler(req, res) {
  if (req.method === 'POST') {
        // Process a POST request
        console.log(req.body);
        let data = await fs.promises.readdir('contactData');
        console.log(data);


        fs.promises.writeFile(`contactData/${data.length + 1}.json`, JSON.stringify(req.body))
        res.status(200).json(["yes post request "])

    } else {
        // Handle any other HTTP method
        res.status(200).json(["allBlogs"])
    }
}