import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://karthi11:karthi11@nextcrud.eurtma2.mongodb.net/?retryWrites=true&w=majority'; // MongoDB connection URI
const dbName = 'nextCRUD'; // Your MongoDB database name

// Function to connect to MongoDB
export async function connectToDatabase() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.log(error);
    throw new Error('Could not connect to database.');
  }
}
