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
      const joblistProfile = await db.collection("joblist").find({
        wallet: "idk"}).toArray();
      res.json({ status: 200, data: joblistProfile });
      break;
      case "PUT":
        const id = req.id
        const filter = { _id: id };
        // update the value of the 'z' field to 42
        const updateDocument = {
          $set: {
              z: 42,
          },
        };
        const result = await collection.updateOne(filter, updateDocument);
  }
}