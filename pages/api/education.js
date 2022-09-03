import clientPromise from "../../utils/mongodb";

export default async function handler(req, res) {

  const client = await clientPromise;
  const db = client.db("dejobs");
  switch (req.method) {
    case "POST":
        let bodyObject = JSON.parse(JSON.stringify(req.body));
        let newPost = await db.collection("education").insertOne(bodyObject);
        res.json(newPost);
      
      break;
    case "GET":
      const joblist = await db.collection("education").find({}).toArray();
      res.json({ status: 200, data: joblist });
      break;
  }

}