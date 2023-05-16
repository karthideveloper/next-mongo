import { connectToDatabase } from '../../database/mongodb';

const handler = async (req, res) => {
  const db = await connectToDatabase();

  if (req.method === 'GET') {
    // Read operation - fetch all posts
    const posts = await db.collection('posts').find({}).toArray();
    res.status(200).json(posts);
  }

  if (req.method === 'POST') {
    // Create operation - add a new post
    const { title, content } = req.body;
    const post = { title, content };
    const result = await db.collection('posts').insertOne(post);
    res.status(201).json(result.ops[0]);
  }

  if (req.method === 'PUT') {
    // Update operation - update a post
    const { id, title, content } = req.body;
    const result = await db
      .collection('posts')
      .updateOne({ _id: id }, { $set: { title, content } });
    res.status(200).json(result);
  }

  if (req.method === 'DELETE') {
    // Delete operation - delete a post
    const { id } = req.body;
    const result = await db.collection('posts').deleteOne({ _id: id });
    res.status(200).json(result);
  }
};

export default handler;
