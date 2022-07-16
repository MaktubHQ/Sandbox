import clientPromise from "../../utils/mongodb";
import ConnectWallet from "../../components/landing/connectwallet";
import { useWallet } from "@solana/wallet-adapter-react";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = await client.db("dejobs");
  switch (req.method) {
    case "POST":
        await db.applications.insertOne(bodyObject)
        // let bodyObject = JSON.parse(JSON.stringify(req.body));
        // let newPost = await db.collection("applications").insertOne(bodyObject);
        // res.json(newPost);
      break;
    case "GET":
      console.log("from get", req.publicKey)
      const joblistProfile = await db.collection("applications").find({
        wallet: req.publicKey}).toArray();
        console.log(req.publicKey, "printing pubkey")
      res.json({ status: 200, data: joblistProfile });
      break;
    case "PUT":
        console.log(req)
        const filter = { _id: req.query._id };
        let update = JSON.parse(JSON.stringify(req.body));
        const result = await collection.updateOne(filter, update);

  }
}