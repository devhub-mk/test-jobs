import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri);
const databaseName = "userinfoDB";

export default async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export async function insertFormData(data) {
  const db = client.db(databaseName);
  const collection = db.collection("users");

  try {
    const result = await collection.insertOne(data);
    return { message: `Inserted a user with _id: ${result.insertedId}` };
  } catch (error) {
    console.error("Error inserting data into MongoDB:", error);
    return { error: "Oops! Failed to insert user" };
  }
}
