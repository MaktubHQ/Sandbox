import clientPromise from "../../utils/mongodb";

export default async function handler(req, res) {

  const client = await clientPromise;
  const db = client.db("dejobs");
    
  // create a filter for a movie to update
  const filter = { email: req.body.email };
  // this option instructs the method to create a document if no documents match the filter
  const options = { upsert: true };
  // create a document that sets the plot of the movie
  const updateDoc = {
    $set: {
      username: req.body.username,
      email: req.body.email,
      wallet: req.body.wallet,
      twitter: req.body.twitter,
      discord: req.body.discord
    },
  };
  
  switch (req.method) {
    case "POST":
        let newPost = await db.collection("profiles").updateOne(filter, updateDoc, options);
        res.json(newPost);
      
      break;
    case "PUT":
        let mybody = JSON.parse(JSON.stringify(req.body));
        let mynew = await db.collection("profiles").insertOne(mybody);
        res.json(mynew);
      
      break;
    case "GET":
      const joblist = await db.collection("profiles").find({}).toArray();
      res.json({ status: 200, data: joblist });
      break;
  }

}