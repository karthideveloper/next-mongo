import { MongoClient } from "mongodb";

// Connection URL and database name
const uri =
  "mongodb+srv://karthi11:karthi11@nextcrud.eurtma2.mongodb.net/?retryWrites=true&w=majority";
const dbName="nextCRUD"
// Create a MongoDB client
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to the MongoDB server
client.connect();

const handler=async(req, res) =>{
  const { method } = req;

  switch (method) {
    case "GET":
      console.log('s')
      // Fetch all users
      const users = await getUsers();
      res.status(200).json(users);
      break;
    case "POST":
      // Create a new user
      const { name, email } = req.body;
      const newUser = await createUser(name, email);
      res.status(201).json(newUser);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}

// Fetch all users
async function getUsers() {
  const db = client.db(dbName);
  const collection = db.collection("users");
  const users = await collection.find().toArray();
  return users;
}

// Create a new user
async function createUser(name, email) {
  const db = client.db(dbName);
  const collection = db.collection("users");
  const newUser = { name, email };
  const result = await collection.insertOne(newUser);
  return result.ops[0];
}


export default handler