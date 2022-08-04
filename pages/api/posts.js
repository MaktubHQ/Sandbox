import clientPromise from "../../utils/mongodb";

export default async function handler(req, res) {

  const client = await clientPromise;
  const db = client.db("dejobs");
  switch (req.method) {
    case "POST":
      try{
        let bodyObject = JSON.parse(JSON.stringify(req.body));
        let newPost = await db.collection("joblist").insertOne(bodyObject);
        res.status(200).json(newPost);
      }
      catch{
        res.status(500).json({ error: 'failed to load data' })
      }


      break;
    case "GET":
      const joblist = await db.collection("joblist").find({}).toArray();
      res.json({ status: 200, data: joblist });
      break;
  }

}
