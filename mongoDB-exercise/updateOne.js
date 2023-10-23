const { MongoClient } = require("mongodb");

const uri =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.1";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db("testDB");
    const characters = database.collection("characters");

    const filter = { name: "Jusse Pinkman" };
    const updateEmail = {
        $set: {
            email: "pinkman@gmail.com",
        },
    };
    const result = await characters.updateOne(filter, updateEmail);

    console.log(result);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
