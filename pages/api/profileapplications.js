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
      const joblistProfile = await db.collection("applications").find({
        wallet: "idk"}).toArray();
      res.json({ status: 200, data: joblistProfile });
      break;
    case "PUT":
        console.log(req)
        const filter = { _id: req.query._id };
        let update = JSON.parse(JSON.stringify(req.body));
        const result = await collection.updateOne(filter, update);
        
  }
}