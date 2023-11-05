require("dotenv").config();

import { MongoClient } from "mongodb";
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);
async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const productCollection = await client.db().collection("Products");

    console.log("Collection name: ", productCollection.collectionName);

    const result = await productCollection.insertOne({
      name: "Finesse Tissue",
    });

    const { insertedId } = result;
    console.log("Result: ", insertedId);

    const document = await productCollection.findOne({ _id: nisertedId });
    console.log("Document from db: ", document);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
};
