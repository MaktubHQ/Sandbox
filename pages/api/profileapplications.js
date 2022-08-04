import { Router } from "next/router";
import clientPromise from "../../utils/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("dejobs");
  switch (req.method) {
    case "POST":
      //try{
    
      let bodyObject = JSON.parse(JSON.stringify(req.body));
      let newPost = await db.collection("applications").insertOne(bodyObject);
      res.status(200).json(newPost).redirect([200], '/dejobs')
     
      // if(res.body.acknowledged == true){
      //   res.redirect([200, 307], '/dejobs')
      // }
      // }
      // catch{
      //   res.status(500).json({ error: 'failed to load data' })
      // }
      break;
  }
}
