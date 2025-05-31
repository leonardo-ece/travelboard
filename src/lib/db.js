import { MongoClient, ObjectId } from 'mongodb';
import { MONGODB_URI } from '$env/static/private';

const client = new MongoClient(MONGODB_URI);
let db;

export async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db('travelboard');
  }
  return db;
}

export { ObjectId };
