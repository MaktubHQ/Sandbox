import clientPromise from "../../utils/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("dejobs");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(JSON.stringify(req.body));
      let newPost = await db.collection("applications").insertOne(bodyObject);
      res.json(newPost);
      break;
    case "GET":
      const joblist = await db.collection("joblist").find({}).toArray();
      res.json({ status: 200, data: joblist });
      break;
      case "PUT":
        console.log(req)
        const filter = { _id: req.query._id };
        let update = JSON.parse(JSON.stringify(req.body));
        const result = await collection.updateOne(filter, update);
        res.json({ status: 200, data: result });
  }
}
