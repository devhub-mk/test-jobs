const { MongoClient } = require("mongodb");

const uri =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.1";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db("testDB");
    const characters = database.collection("characters");

    const character = [
      { name: "Hank Schrader", email: "hankschrader@gmail.com", profession: "DEA Agent", series: "Breaking Bad" },
      { name: "Walter White", email: "walterwhite@gmail.com", profession: "Meth Dealer", series: "Breaking Bad" },
      { name: "Jusse Pinkman", email: "pinkman@gmail.com", profession: "Meth Dealer" , series: "Breaking Bad"},
      { name: "Jane Margolis", email: "janemargolis@gmail.com", profession: "Painting Artist" , series: "Breaking Bad"},
      { name: "Saul Goodman", email: "saulgoodman@gmail.com", profession: "Lawyer" , series: "Breaking Bad"},
    ];
    const result = await characters.insertMany(character);

    console.log(result);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
