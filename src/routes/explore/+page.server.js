import { connectDB } from '$lib/db';

export async function load() {
  const db = await connectDB();
  const destinations = await db.collection('destinations').find().toArray();
  return { destinations };
}
