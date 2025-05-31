import { error } from '@sveltejs/kit';
import { connectDB } from '$lib/db';
import { ObjectId } from 'mongodb'; // Nur falls deine IDs ObjectId sind – siehe Hinweis unten

export async function load({ params }) {
  const db = await connectDB();

  const id = params.id;

  // Wenn du UUIDs wie '510016bc-...' verwendest, brauchst du **kein** ObjectId
  const destination = await db.collection('destinations').findOne({ _id: id });

  if (!destination) {
    throw error(404, 'Destination not found');
  }

  return { destination };
}
